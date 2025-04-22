import { Router } from "express";

export const router = Router();

router.get('/', (req, res) => {
    res.send({ 
        message: 'Get all calculations', 
        data: [
            { id: 1, result: 1}, 
            {id: 2, result: 2}
        ]});
});



router.get("/:id", (req, res) => {
    console.log(`Query parameter: ${JSON.stringify(req.query)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Method: ${req.method}`);
    res.status(202).header({'X-Custom-Header': 'foo', 'X-Custom-Header-2': 'fuu'}).send(`Hello ${req.params.id}`);
});
