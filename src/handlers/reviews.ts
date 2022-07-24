import express, { Request, Response } from "express";
import { Review, ReviewStore } from "../models/reviews";
import "express-async-errors";

const store = new ReviewStore();

const index = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const reviews = await store.index(id);
    res.json(reviews);
  } catch (error) {
    console.log(error);
    throw new Error(`Unable To Send Reviews: ${error}`);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const review: Review = {
      resturant_id: Number(req.params.id),
      name: req.body.name,
      review: req.body.review,
      rating: Number(req.body.rating),
    };
    const createdReview = await store.create(review);
    res.json(createdReview);
  } catch (error) {
    throw new Error(`Unable To Create A Review Route: ${error}`);
  }
};

const reviews_routes = (app: express.Application) => {
  app.get("/resturants/:id/reviews", index);
  app.post("/resturants/:id/addReview", create);
};

export default reviews_routes;
