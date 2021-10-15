import game from './game';

import './scenes/main';

import loadSprites from './game/sprites';

loadSprites();

game.go('main');
