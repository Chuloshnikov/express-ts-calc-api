"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.send({
        message: 'Get all calculations',
        timestamp: req.timestamp,
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 }
        ]
    });
});
exports.router.get("/:id", (req, res) => {
    res.send({
        message: 'Get calculation by ID',
        timestamp: req.timestamp,
        id: req.params.id,
        result: 1,
    });
});
exports.router.post('/', (req, res) => {
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
            if (operand2 === 0) {
                result = 'Cannot divide by zero';
            }
            else {
                result = operand1 / operand2;
            }
            break;
        default:
            result = 'Invalid operator';
    }
    res.send({
        message: 'Create new calculation',
        timestamp: req.timestamp,
        result,
    });
});
