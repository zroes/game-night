import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";


class PlayerService {

  addPlayer(name) {
    appState.players.push(new Player(name))
    console.log(appState.players)
  }
}


export const playerService = new PlayerService()