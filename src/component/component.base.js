export default class BaseComponent {
  constructor() {}

  getName() {
    throw new Error('cannot instantiate base component !');
  }
}
