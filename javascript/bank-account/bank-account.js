//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #balance;
  #accountIsOpen;
  constructor() {
    this.#accountIsOpen = false;
  }

  open() {
    if (this.#accountIsOpen) throw new ValueError();
    this.#balance = 0;
    this.#accountIsOpen = true;
  }

  close() {
    if (!this.#accountIsOpen) throw new ValueError();
    this.#accountIsOpen = false;
  }

  deposit(money) {
    if (!this.#accountIsOpen || money < 0) throw new ValueError();
    this.#balance += money;
  }

  withdraw(money) {
    if (!this.#accountIsOpen || money > this.#balance || money < 0)
      throw new ValueError();
    this.#balance -= money;
  }

  get balance() {
    if (!this.#accountIsOpen) throw new ValueError();
    return this.#balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
