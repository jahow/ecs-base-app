export default class Entity {
  constructor() {
    this.id = Math.floor(Math.random() * 10000000);
    this.components = {};
  }

  getId() {
    return this.id;
  }

  hasComponent(name) {
    return !!this.getComponent(name);
  }
  getComponent(name) {
    return this.components[name];
  }

  /**
   * @param {BaseComponent} component
   */
  addComponent(component) {
    const name = component.getName();
    if (this.getComponent(name)) {
      throw new Error(
        `A component '${name}' already exists on entity ${this.getId()}`
      );
    }
    this.components[name] = component;
  }
}
