import express from "express";
import { healthRouter, calculatorRouter } from './routes'
import { addTimestamp, logger } from "./middlewares";
const app = express();
const port = 8080;


// middleware
app.use(addTimestamp);
app.use(logger);

// routes
app.use('/health', healthRouter);
app.use('/calculator', calculatorRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});