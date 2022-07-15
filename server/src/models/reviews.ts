import { client } from "../database";
import "express-async-errors";
import { connect } from "http2";

export type Review = {
  id?: number;
  resturant_id: number;
  name: string;
  review: string;
  rating: number;
};

export class ReviewStore {
  async index(id: number): Promise<Review[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM reviews WHERE resturant_id=$1;";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(
        `Unable To Get Reviews For Resturant With Id: ${id}: ${error}`
      );
    }
  }

  async create(review: Review): Promise<Review> {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO reviews (resturant_id, name, review, rate) VALUES ($1, $2, $3, $4) RETURNING *;";
      const result = await conn.query(sql, [
        review.resturant_id,
        review.name,
        review.review,
        review.rating,
      ]);
      conn.release();
      const newReview = result.rows[0];
      return newReview;
    } catch (error) {
      throw new Error(`Unable To Create A New Review: ${error}`);
    }
  }
}
