import APP from './app/app';
import Entity from './entity/entity';
import SpriteComponent from './component/component.sprite';

const entity = new Entity();
entity.addComponent(new SpriteComponent());
APP.addEntity(entity);
