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

exports.hasTransactions = hasTransactions;
exports.isOpen = isOpen;
exports.isPayment = isPayment;
exports.isRefund = isRefund;
