const { isOpen, isPayment, isRefund } = require('../util/validators');
const { getTransactionProcessors } = require('./transaction-processors');

/**
 * @throws {Error} Invalid transaction type
 * @param {object} transaction
 */
function validateTransaction(transaction) {
    if (!isOpen(transaction)) {
        const error = new Error('Invalid transaction type!');
        throw error;
    }

    if (!isPayment(transaction) && !isRefund(transaction)) {
        const error = new Error('Invalid transaction type!');
        error.item = transaction;
        throw error;
    }
}

function processWithProccessor(transaction) {
    const processors = getTransactionProcessors(transaction)

    if (isPayment(transaction)) {
        processors.payment(transaction);
    } else if (isRefund(transaction)) {
        processors.refund(transaction);
    }
}

exports.validateTransaction = validateTransaction;
exports.processWithProccessor = processWithProccessor;
