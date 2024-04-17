class Bank {
  saldo;
  constructor(saldo = 0) {
    this.saldo = saldo;
  }

  deposito(valor) {
    if (valor >= 1 && valor < 9999) {
      this.saldo += valor;
      return true;
    }
    return false;
  }

  saque(valor) {
    if (this.saldo - valor >= 0) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  getsaldo() {
    return this.saldo;
  }
}
