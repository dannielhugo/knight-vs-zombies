import game from '../../game';

const FLOOR_HEIGHT = 48;
const SPEED = 10;

game.scene('main', () => {
  // define gravity
  game.gravity(2400);

  // add a game object to screen
  const knight = game.add([
    // list of components
    game.sprite('knight'),
    game.scale(0.3, 0.3),
    game.pos(80, 40),
    game.area(),
    game.body(),
  ]);

  // add a game object to screen
  const zombieF = game.add([
    // list of components
    game.sprite('zombie-f'),
    game.scale(0.3, 0.3),
    game.pos(game.width() - 440, 0),
    game.area(),
    game.body(),
  ]);

  // add a game object to screen
  const zombieM = game.add([
    // list of components
    game.sprite('zombie-m'),
    game.scale(0.3, 0.3),
    game.pos(game.width() - 240, 0),
    game.area(),
    game.body(),
  ]);

  // floor
  game.add([
    game.rect(game.width(), FLOOR_HEIGHT),
    game.outline(4),
    game.pos(0, game.height()),
    game.origin('botleft'),
    game.area(),
    game.solid(),
    game.color(127, 200, 255),
  ]);

  knight.play('idle');
  zombieF.play('idle');
  zombieF.flipX(true);
  zombieM.play('idle');
  zombieM.flipX(true);

  game.action(() => {
    const left = game.keyIsDown('left');
    const right = game.keyIsDown('right');
    const curAnimation = knight.curAnim();

    if (left) {
      if (curAnimation !== 'run') {
        knight.play('run');
      }
      knight.flipX(true);
      knight.pos.x -= SPEED;
    } else if (right) {
      if (curAnimation !== 'run') {
        knight.play('run');
      }
      knight.flipX(false);
      knight.pos.x += SPEED;
    } else {
      knight.play('idle');
    }
  });
});
