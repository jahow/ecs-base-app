import BaseSystem from './system.base';

export default class RenderSystem extends BaseSystem {
  constructor() {
    super();
  }

  /**
   *
   * @param {Entity[]} allEntities
   */
  run(allEntities) {
    for (let entity of allEntities) {
      if (!entity.hasComponent('sprite')) continue;

      // render the sprite
      const sprite = entity.getComponent('sprite');
      console.log(`rendering sprite from entity ${entity.getId()}!`);
    }
  }
}
