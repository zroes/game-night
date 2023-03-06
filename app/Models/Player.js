
export class Player {
  constructor(name) {
    this.name = name
    this.score = 0;
  }

  get PlayerTemplateCard() {
    return /*HTML*/ `
      <div class="card">
        <div class="card-body">
          ${this.name} || ${this.score}
          <button onclick="app.playersController.plusTwo('${this.name}')" class="btn btn-success">+2</button>
          <button onclick="app.playersController.minusTwo('${this.name}')" class="btn btn-danger">-2</button>
        </div>
    </div>
    `
  }
}

