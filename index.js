var customerName = 'bob';
var bestCustomer = undefined;
const leastFavoriteCustomer = 'larry'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();    
    return customerName
}

function setBestCustomer() {
   bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}