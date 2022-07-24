import app from '../../index';
import supertest from 'supertest';
import jasmine from "jasmine";


describe("Testing That Handler Methods Exist", ()=>{
    it("The Index Handler", ()=>{
        supertest(app).get('/resturants').expect(200);
    })
    it("The Create Handler", ()=>{
        supertest(app).post('/resturants').expect(200);
    })
    it("The show Handler", ()=>{
        supertest(app).get('/resturants/:id').expect(200);
    })
    it("The Update Handler", ()=>{
        supertest(app).patch('/resturants/:id').expect(200);
    })
    it("The Delete Handler", ()=>{
        supertest(app).get('/resturants/:id').expect(200);
    })
});

