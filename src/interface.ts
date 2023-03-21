interface SavingAccount{
balance(balance:number):void;
}
interface CurrentAccount{
    balance(balance:number):void;
}
class Account implements SavingAccount,CurrentAccount{
    ID : number;
    Name : string;
    widthdraw : number;
    acctype : string;
    
    constructor(CustID : number,CustName : string, widthdrawamt : number,acctype : string){
       this.ID = CustID;
       this.Name = CustName;
       this.widthdraw=widthdrawamt;
       this.acctype=acctype;

       
    }
    balance(balance: number): void {
        console.log("The customer id is :"+  this.ID ); 
        console.log("The customer name is :"+this.Name); 
        console.log("The account type :"+this.acctype); 
       console.log("The available bank balance is :"+(balance-this.widthdraw)); 
    }
}

let obj=new Account(1000,'karthikeyan',4000,'savings');
obj.balance(10000);