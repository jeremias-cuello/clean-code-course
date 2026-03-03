const transactions = require("./data/dummy-transactions");

const { showErrorMessage } = require("./util/error-handling");
const { validateTransaction, processWithProccessor } = require("./processing/transaction");
const { validateTransactions } = require("./processing/transactions");

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

main();
