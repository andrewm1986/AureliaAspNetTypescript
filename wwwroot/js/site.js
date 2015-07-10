// Write your Javascript code.
var Customer = (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    return Customer;
})();

//# sourceMappingURL=site.js.map