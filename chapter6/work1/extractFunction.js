function printOwing(invoice) {

    printBanner();
  
    // calculate outstanding
    const outstanding = calculateOutstanding();

    recordDueDate(invoice);  
    printDetails(invoice, outstanding);

    function calculateOutstanding(invoice) {
        let result = 0;
        for (const o of invoice.orders) {
            result += o.amount;
        }
        return result;
    }
}