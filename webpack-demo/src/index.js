
import { HelloWorld } from './helloWorld';
import { Game } from './game';
import {check} from './DOM';

start();
function start() {
	const object = new HelloWorld()
	object.hi()

    const game = new Game()
    game.initializeGame()
    console.log(game)
    
    check(game.player1Gameboard)
}


