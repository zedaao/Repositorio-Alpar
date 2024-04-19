class LuzesModel {
  static instance;

  _sala = false;
  _quarto = false;
  _cozinha = false;
  _banheiro = false;

  set Sala(sala) {
    this._sala = sala;
  }
  get Sala() {
    return this._sala;
  }

  set Quarto(quarto) {
    this._quarto = quarto;
  }
  get Quarto() {
    return this._quarto;
  }

  set Cozinha(cozinha) {
    this._cozinha = cozinha;
  }
  get Cozinha() {
    return this._cozinha;
  }

  set Banheiro(banheiro) {
    this._banheiro = banheiro;
  }
  get Banheiro() {
    return this._banheiro;
  }
}
