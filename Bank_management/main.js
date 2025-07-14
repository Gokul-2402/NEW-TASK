"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bank_1 = require("./bank");
var bank = new bank_1.BankAccount("Gokul", 23450949, 100000);
bank.deposit(25000);
bank.withdraw(30000);
bank.displaybalance();
