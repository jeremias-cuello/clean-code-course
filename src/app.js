const transactions = require("./data/dummy-transactions");
const getTransactionProcessors = require("./processing/transaction-processors");
const showErrorMessage = require("./util/error-handling");

function main() {
    try {
        processTransactions(transactions);
    } catch (error) {
        showErrorMessage(error.message);
    }
}

function processTransactions(transactions) {
    validateTransactions(transactions);

    for (const transaction of transactions) {
        processTransaction(transaction);
    }
}

function validateTransactions(transactions) {
    if (!hasTransactions(transactions)) {
        const error = new Error('No transactions provided!');
        error.code = 1;
        throw error;
    }
}

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

/**
 * @param {object} transaction
 */
function processTransaction(transaction) {
    try {
        validateTransaction(transaction);
        processWithProccessor(transaction);
    } catch (error) {
        showErrorMessage(error.message, error.item);
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

function isOpen(transaction) {
    return transaction.status === 'OPEN';
}

function isPayment(transaction) {
    return transaction.type === 'PAYMENT';
}

function isRefund(transaction) {
    return transaction.type === 'REFUND';
}

function hasTransactions(transactions) {
    return transactions && transactions.length >= 0;
}

main();
