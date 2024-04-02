// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};
upperCaseCustomerName();

// setBestCustomer()
var bestCustomer;
function setBestCustomer() {
    bestCustomer = "not bob";
};
setBestCustomer()

// overwriteBestCustomer()
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
};
overwriteBestCustomer();

// changeLeastFavoriteCustomer()
const leastFavoriteCustomer = "Angry customers";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = " Proud customers";
};
console.log(changeLeastFavoriteCustomer());


