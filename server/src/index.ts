import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response)=>{
    res.send('SERVER STARTED');
});

app.listen(port, ()=>{
    console.log(`Server Started At: http://localhost:${port}`);
});