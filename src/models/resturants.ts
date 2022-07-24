import { client } from "../database";
import "express-async-errors";
import { connect } from "http2";

export type Resturant = {
  id?: number;
  rest_name: string;
  rest_location: string;
  price_range: number;
};

export class ResturantsStore {
  async index(): Promise<Resturant[]> {
    try {
      const conn = await client.connect();
      const sql =
        "SELECT * FROM resturants LEFT JOIN( SELECT resturant_id, COUNT(*), ROUND(AVG(rate), 2) AS average_rating FROM reviews GROUP BY resturant_id ) reviews ON resturants.id=reviews.resturant_id;";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Unable To Get Resturants: ${error}`);
    }
  }

  async show(id: number): Promise<Resturant> {
    try {
      const conn = await client.connect();
      const sql = `SELECT rest_name, rest_location, price_range FROM resturants WHERE id=$1; `;
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable To Get Resturant With ID: ${id}, ${error}`);
    }
  }

  async create(rest: Resturant): Promise<Resturant> {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO resturants (rest_name, rest_location, price_range) VALUES ($1, $2, $3) RETURNING *;";
      const result = await conn.query(sql, [
        rest.rest_name,
        rest.rest_location,
        rest.price_range,
      ]);
      conn.release();
      const newRest = result.rows[0];
      return newRest;
    } catch (error) {
      throw new Error(`Unable To Create A New Resturant: ${error}`);
    }
  }

  async update(rest: Resturant): Promise<Resturant> {
    try {
      const conn = await client.connect();
      const sql =
        "UPDATE resturants SET rest_name=$1, rest_location=$2, price_range=$3 WHERE id=$4 RETURNING id, rest_name, rest_location, price_range;";
      const result = await conn.query(sql, [
        rest.rest_name,
        rest.rest_location,
        rest.price_range,
        rest.id,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable To Update The Resturant: ${error}`);
    }
  }

  async delete(id: number): Promise<Resturant> {
    try {
      const conn = await client.connect();
      const sql =
        "DELETE FROM resturants WHERE id=$1 RETURNING rest_name, rest_location, price_range;";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Unable To Delete Resturant With ID: ${id}, ${error}`);
    }
  }
}
