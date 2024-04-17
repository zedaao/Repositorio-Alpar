const saldo = document.querySelector(".saldo");
const btn = document.querySelector(".submit");
const btn2 = document.querySelector(".sacar");
const input = document.querySelector(".input_bank");

const bank = new Bank();
saldo.innerHTML = formataDinheiro(bank.getsaldo());

btn2.addEventListener("click", () => {
  const valor = Number(input.value);
  if (!valor && isNaN) {
    alert("Valor Invalido !");
    return;
  }

  if (bank.saque(valor)) {
    saldo.innerHTML = formataDinheiro(bank.getsaldo());
  } else {
    alert("Saque Invalido ! verifique se você tem dinheiro.");
  }
});

btn.addEventListener("click", () => {
  const valor = Number(input.value);
  if (!valor && isNaN) {
    alert("Valor Invalido !");
    return;
  }
  if (bank.deposito(valor)) {
    saldo.innerHTML = formataDinheiro(bank.getsaldo());
  } else {
    alert("Deposite um valor valido.");
  }
});

function formataDinheiro(valor) {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(valor);
}
