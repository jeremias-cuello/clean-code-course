const { hasTransactions } = require("../util/validators")

function validateTransactions(transactions) {
    if (!hasTransactions(transactions)) {
        const error = new Error('No transactions provided!');
        error.code = 1;
        throw error;
    }
}

exports.validateTransactions = validateTransactions;
