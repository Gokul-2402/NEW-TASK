import { BankAccount } from "./bank";
let bank = new BankAccount("Gokul",23450949,100000);
 
bank.deposit(25000);
 
bank.withdraw(30000)
 
bank.displaybalance();