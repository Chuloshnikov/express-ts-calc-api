import express from "express";
import { healthRouter, calculatorRouter } from './routes'
const app = express();
const port = 8080;


// routes
app.use('/health', healthRouter);
app.use('/calculator', calculatorRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});