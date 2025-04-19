import express from "express";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Howdy!");
});

app.get('/health', (req, res) => {
    res.send('OK');
});

app.get("/calculator/:id", (req, res) => {
    console.log(`Query parameter: ${JSON.stringify(req.query)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Method: ${req.method}`);
    res.status(202).header({'X-Custom-Header': 'foo', 'X-Custom-Header-2': 'fuu'}).send(`Hello ${req.params.id}`);
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});