main();

function main() {
    const transactions = [
        {
            id: 't1',
            type: 'PAYMENT',
            status: 'OPEN',
            method: 'CREDIT_CARD',
            amount: '23.99',
        },
        {
            id: 't2',
            type: 'PAYMENT',
            status: 'OPEN',
            method: 'PAYPAL',
            amount: '100.43',
        },
        {
            id: 't3',
            type: 'REFUND',
            status: 'OPEN',
            method: 'CREDIT_CARD',
            amount: '10.99',
        },
        {
            id: 't4',
            type: 'PAYMENT',
            status: 'CLOSED',
            method: 'PLAN',
            amount: '15.99',
        },
    ];

    processTransactions(transactions);
}

function processTransactions(transactions) {
    if (!hasTransactions(transactions)) {
        showErrorMessage('No transactions provided!');
        return;
    }

    for (const transaction of transactions) {
        processTransaction(transaction);
    }

}

function processTransaction(transaction) {
    if (!isOpen(transaction)) {
        showErrorMessage('Invalid transaction type!');
        return;
    }

    if (isPayment(transaction)) {
        processPayment(transaction)
    } else if (isRefund(transaction)) {
        processRefund(transaction)
    } else {
        showErrorMessage('Invalid transaction type!', transaction);
    }
}

function isOpen(transaction) {
    return transaction.status === 'OPEN'
}

function isPayment(transaction) {
    return transaction.type === 'PAYMENT'
}

function isRefund(transaction) {
    return transaction.type === 'REFUND'
}

function processPayment(transaction) {
    if (transaction.method === 'CREDIT_CARD') {
        processCreditCardPayment(transaction);
    } else if (transaction.method === 'PAYPAL') {
        processPayPalPayment(transaction);
    } else if (transaction.method === 'PLAN') {
        processPlanPayment(transaction);
    }
}

function processRefund(transaction) {
    if (transaction.method === 'CREDIT_CARD') {
        processCreditCardRefund(transaction);
    } else if (transaction.method === 'PAYPAL') {
        processPayPalRefund(transaction);
    } else if (transaction.method === 'PLAN') {
        processPlanRefund(transaction);
    }
}

function showErrorMessage(message, item) {
    console.log(message);

    if (item) {
        console.log(item);
    }
}

function hasTransactions(transactions) {
    return transactions && transactions.length >= 0;
}

function processCreditCardPayment(transaction) {
    console.log(
        'Processing credit card payment for amount: ' + transaction.amount
    );
}

function processCreditCardRefund(transaction) {
    console.log(
        'Processing credit card refund for amount: ' + transaction.amount
    );
}

function processPayPalPayment(transaction) {
    console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPayPalRefund(transaction) {
    console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
    console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
    console.log('Processing plan refund for amount: ' + transaction.amount);
}
