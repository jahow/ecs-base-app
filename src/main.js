import App from './app/app';
import Entity from './entity/entity';
import SpriteComponent from './component/component.sprite';

const app = new App();

const entity = new Entity();
entity.addComponent(new SpriteComponent());
app.addEntity(entity);
