import app from '../index';
import supertest from 'supertest';

//@ts-ignore
describe("Testing The Server Status", ()=>{
    //@ts-ignore
    it("Server Route Should Return A Success Status", ()=>{
        supertest(app).get('/').expect(200);
    })
})