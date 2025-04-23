"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.send({
        message: 'Get all calculations',
        timestamp: req.timestamp,
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 },
        ],
    });
});
exports.router.get('/:id', (req, res) => {
    res.send({
        message: 'Get calculation by ID',
        timestamp: req.timestamp,
        id: req.params.id,
        result: 1,
    });
});
exports.router.delete('/:id', (req, res) => {
    res.status(204).end();
});
exports.router.put('/:id', middlewares_1.validateCalculatorRequest, (req, res) => {
    const { operator, operand1, operand2 } = req.body;
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    res.send({
        message: 'Update a calculation',
        id: req.params.id,
        timestamp: req.timestamp,
        result,
    });
});
exports.router.post('/', middlewares_1.validateCalculatorRequest, (req, res) => {
    const { operator, operand1, operand2 } = req.body;
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    res.status(201).send({
        message: 'Create new calculation',
        timestamp: req.timestamp,
        result,
    });
});
