import { appState } from "../AppState.js";
import { playerService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js";

export class PlayersController {
  constructor() {
    console.log(appState.players);
    this.draw()
  }

  draw() {
    appState.players.sort(function (a, b) { return b.score - a.score })
    let template = ''
    appState.players.forEach(p => {
      template += p.PlayerTemplateCard
    })
    document.getElementById('players').innerHTML = template
  }

  plusTwo(name) {
    let player = appState.players.find(p => p.name == name)
    if (player)
      player.score += 2
    console.log(player)
    this.draw()
  }

  minusTwo(name) {
    let player = appState.players.find(p => p.name == name)
    if (player)
      player.score -= 2
    console.log(player)
    this.draw()
  }


  addPlayer() {
    try {
      if (window.event) {
        window.event.preventDefault()
        const form = window.event.target
        // const formData = new FormData(form);
        // console.log(formData.get("name"))
        const formData = (getFormData(form))
        playerService.addPlayer(formData["name"])
        form.reset()
        this.draw()
      }
    }
    catch (e) {
      console.error('addPlayer issue', e)
    }
  }
}