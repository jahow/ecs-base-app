import RenderSystem from '../system/system.render';

class App {
  constructor() {
    /**
     * @type {Entity[]}
     */
    this.entities = [];

    this.renderSystem = new RenderSystem();

    // kick off main loop
    this.loop();
  }

  loop() {
    this.renderSystem.run(this.entities);
    console.log('loop done');
    window.requestAnimationFrame(this.loop.bind(this));
  }

  /**
   *
   * @param {Entity} entity
   */
  addEntity(entity) {
    if (this.entities.indexOf(entity) > 1) {
      console.warn(`Entity ${entity.getId()} was already added`);
      return;
    }
    this.entities.push(entity);
  }
}

const APP = new App();
export default APP;
