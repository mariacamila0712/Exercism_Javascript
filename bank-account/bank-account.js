
export class BankAccount {
  constructor() {
    this._account = false;
    this._balance = 0;
  }

  open() {
    if(this._account == true) {
      throw new ValueError;
    }
    else {
      this._balance = 0;
      this._account = true;
    }
  }

  close() {
    if(this._account == true) {
      this._account = false;
    }
    else {
      throw new ValueError;
    }
  }

  deposit(amountAdd) {
    if(amountAdd > 0 && this._account == true) {
      this._balance += amountAdd;
    }
    else {
      throw new ValueError;
    }
  }

  withdraw(amountTaken) {
    if(amountTaken <= this._balance && this._account == true && amountTaken > 0) {
      this._balance -= amountTaken;
    }
    else {
      throw new ValueError;
    }
  }

  get balance() {
    if(this._account == false) {
      throw new ValueError;
    }
    else {
      return this._balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}