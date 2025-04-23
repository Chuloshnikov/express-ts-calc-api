"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCalculatorRequest = validateCalculatorRequest;
function validateCalculatorRequest(req, res, next) {
    const { operator, operand1, operand2 } = req.body;
    if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
        res.status(400).send('Operands must be numbers');
        return;
    }
    if (!['+', '-', '*', '/'].includes(operator)) {
        res.status(400).send('Operator must be +, -, *, or /');
        return;
    }
    next();
}
