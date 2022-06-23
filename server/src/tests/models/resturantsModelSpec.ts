import { client } from "../../database";
import { ResturantsStore, Resturant } from "../../models/resturants";
import jasmine from 'jasmine';


const store = new ResturantsStore();

describe("Testing The Model Methods To Be Defiend", ()=>{
    it("Testing Index Method Exist", ()=>{
        expect(store.index).toBeDefined();
    });

    it("Testing Create Method Exist", ()=>{
        expect(store.create).toBeDefined();
    });

    it("Testing Update Method Exist", ()=>{
        expect(store.update).toBeDefined();
    });

    it("Testing Delete Method Exist", ()=>{
        expect(store.delete).toBeDefined();
    });
});

describe("Testing The Logic Of Model Methods", ()=>{
    let resturant: Resturant = {
        rest_name: 'kfc',
        rest_location: 'tanta',
        price_range: 5
    };

    beforeAll(async ()=>{
        try {
            const rest = await store.create(resturant) as Resturant;
             resturant.id = rest.id;
        } catch (error) {
            console.log(error);
        }
        
    });

    afterAll(async ()=>{
        const conn = await client.connect();
        const sql = 'DELETE FROM resturants;';
        await conn.query(sql);
        conn.release();
    });

    it("Testing The Index Method Logic", async()=>{
        const rests = await store.index();
        expect(rests.length).toBeGreaterThanOrEqual(1);
    });

    it("Testing Show Method Model", async()=>{
        const rest = await store.show(resturant.id as number);
        expect(rest.rest_name).toBe('kfc');
        expect(rest.rest_location).toBe('tanta');

    })

    it("Testing Create Method Logic", async() =>{
        const newUser: Resturant = {
            rest_name: 'mcdonals',
            rest_location: 'cairo',
            price_range: 4
        }
        const create = await store.create(newUser);
        expect(create.rest_name).toBe('mcdonals');
        expect(create.rest_location).toBe('cairo');
        expect(create.price_range).toBe(4);
    });

    it("Testing Update Method Logic", async()=>{
        const updated: Resturant = {
            id: resturant.id,
            rest_name: 'KFC',
            rest_location: 'Elsanta',
            price_range: 3
        }

        const update = await store.update(updated);
        expect(update.rest_name).toBe('KFC');
        expect(update.rest_location).toBe('Elsanta');
        expect(update.price_range).toBe(3);
    });

    it("Testing Delete Method Logic", async () => {
        const deleted = await store.delete(resturant.id as number);
        expect(deleted.rest_name).toBe('KFC');
    })
});