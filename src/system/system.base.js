export default class BaseSystem {
  constructor() {}

  run(allEntities) {
    throw new Error('cannot run base system!');
  }
}
