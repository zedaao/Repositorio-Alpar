btnSala.addEventListener("click", () => LuzController.instance.toggleOnSala());

btnQuarto.addEventListener("click", () =>
  LuzController.instance.toggleOnQuarto()
);

btnCozinha.addEventListener("click", () =>
  LuzController.instance.toggleOnCozinha()
);

btnBanheiro.addEventListener("click", () =>
  LuzController.instance.toggleOnBanheiro()
);
