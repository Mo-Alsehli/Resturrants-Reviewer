import express, {Request, Response} from 'express';
import {Resturant, ResturantsStore} from '../models/resturants';
import 'express-async-errors';


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

const show = async(req: Request, res: Response)=>{
    try {
        const id = Number(req.params.id);
        const resturant = await store.show(id);
        res.json(resturant);
    } catch (error) {
        throw new Error(`Unable To Get One Resturant Route: ${error}`);
    }
}

const create = async(req: Request, res: Response)=>{
    try {
        const resturant: Resturant = {
            rest_name: req.body.name,
            rest_location: req.body.location,
            price_range: Number(req.body.price_range)
        }
        const createRest = await store.create(resturant);
        res.json(createRest);
    } catch (error) {
        throw new Error (`Unable To Create A Resturant Route: ${error}`);
    }
}

const update = async(req: Request, res: Response)=>{
    try {
        const resturant: Resturant = {
            id: Number(req.params.id),
            rest_name: req.body.name,
            rest_location: req.body.location,
            price_range: req.body.price_range
        }
        const updated = await store.update(resturant);
        res.json(updated);
    } catch (error) {
        throw new Error(`Unable To Update Resturant Route: ${error}`);
    }
}

const deleteRest = async(req: Request, res: Response) =>{
    try {
        const id = Number(req.params.id);
        const deleted = await store.delete(id);
        res.json(deleted);
    } catch (error) {
        throw new Error(`Unable To Delete Resturant Route: ${error}`);
    }
}



const resturants_routes = (app: express.Application)=>{
        app.get('/resturants', index);
        app.get('/resturants/:id', show);
        app.post('/resturants', create);
        app.patch('/resturants/:id', update);
        app.delete('/resturants/:id', deleteRest);
}

export default resturants_routes;


