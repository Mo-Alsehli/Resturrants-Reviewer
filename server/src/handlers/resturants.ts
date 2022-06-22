import express, {Request, Response} from 'express';
import {Resturant, ResturantsStore} from '../models/resturants';

const store = new ResturantsStore();

const index = async(_req: Request, res: Response)=>{
    try {
        const resturants = await store.index();
        res.json(resturants);
    } catch (error) {
        console.log(error);
        throw new Error(`Unable To Send Resturants: ${error}`);
    }
}

const create = async(req: Request, res: Response)=>{
    try {
        const resturant: Resturant = {
            name: req.body.name,
            location: req.body.location,
            price_range: Number(req.body.price_range)
        }
        const createRest = await store.create(resturant);
        res.json(createRest);
    } catch (error) {
        throw new Error (`Unable To Create A Resturant Route: ${error}`);
    }
}



const resturants_routes = (app: express.Application)=>{
        app.get('/resturants', index);
        app.post('/resturants', create);
}

export default resturants_routes;


