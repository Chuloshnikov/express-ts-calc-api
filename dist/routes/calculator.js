"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.send({
        message: 'Get all calculations',
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 }
        ]
    });
});
exports.router.get("/:id", (req, res) => {
    console.log(`Query parameter: ${JSON.stringify(req.query)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Method: ${req.method}`);
    res.status(202).header({ 'X-Custom-Header': 'foo', 'X-Custom-Header-2': 'fuu' }).send(`Hello ${req.params.id}`);
});
