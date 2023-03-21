"use strict";
class Account {
    constructor(CustID, CustName, widthdrawamt, acctype) {
        this.ID = CustID;
        this.Name = CustName;
        this.widthdraw = widthdrawamt;
        this.acctype = acctype;
    }
    balance(balance) {
        console.log("The customer id is :" + this.ID);
        console.log("The customer name is :" + this.Name);
        console.log("The account type :" + this.acctype);
        console.log("The available bank balance is :" + (balance - this.widthdraw));
    }
}
let obj = new Account(1000, 'karthikeyan', 4000, 'savings');
obj.balance(10000);
