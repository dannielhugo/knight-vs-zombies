import game from './index';

import Knight from '../assets/knight/knight.png';
import ZombieF from '../assets/zombie-female/zombie-f.png';
import ZombieM from '../assets/zombie-male/zombie-m.png';

export default function loadSprites() {
  game.loadSprite('knight', Knight, {
    sliceX: 19,
    sliceY: 1,
    anims: {
      attack: {
        from: 0,
        to: 3,
      },
      idle: {
        from: 4,
        to: 7,
      },
      jump: {
        from: 8,
        to: 12,
      },
      run: {
        from: 13,
        to: 18,
      },
    },
  });

  game.loadSprite('zombie-f', ZombieF, {
    sliceX: 14,
    sliceY: 1,
    anims: {
      attack: {
        from: 0,
        to: 4,
      },
      idle: {
        from: 5,
        to: 7,
      },
      walk: {
        from: 8,
        to: 13,
      },
    },
  });

  game.loadSprite('zombie-m', ZombieM, {
    sliceX: 14,
    sliceY: 1,
    anims: {
      attack: {
        from: 0,
        to: 4,
      },
      idle: {
        from: 5,
        to: 7,
      },
      walk: {
        from: 8,
        to: 13,
      },
    },
  });
}
