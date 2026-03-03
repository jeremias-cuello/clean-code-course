function showErrorMessage(message, item) {
    console.log(message);

    if (item) {
        console.log(item);
    }
}

exports.showErrorMessage = showErrorMessage;
