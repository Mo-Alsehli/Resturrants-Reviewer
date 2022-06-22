import {client} from '../database';

export type Resturant = {
    name: string,
    location: string,
    price_range: number
};

export class ResturantsStore {
    async index():Promise<Resturant[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM resturants;';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (error) {
            console.log(error);
            throw new Error(`Unable To Get Resturants: ${error}`)
        }
    }

    async create(rest: Resturant):Promise<Resturant>{
        try {
            const conn = await client.connect();
            const sql = 'INSERT INTO resturants (rest_name, rest_location, price_range) VALUES ($1, $2, $3);';
            const result = await conn.query(sql, [rest.name, rest.location, rest.price_range]);
            conn.release();
            console.log(result);
            return result.rows[0];
        } catch (error) {
            throw new Error(`Unable To Create A New Resturant: ${error}`);
        }
    }
}