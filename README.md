#### Instructions

First: `npm install`

To run: `npm run start`

To build: `npm run build`

#### Concepts

This is a super simple implementation of the ECS architecture:
* Entities are simple classes made of a unique ID and a list of components
* Components can be whatever and need to have a unique name
* Systems are run on all entities; each system will look for different components
  and do different stuff.
* The App class orchestrates all of this
  
Possible components include:
* `position`: allows keeping track of the position of an object in the world
* `collision`: specify a box/shape to handle collision for this object
* `physics`: mass, friction, etc.
* `player`: this component will mark an entity as being player controlled, ie
  its position/velocity will be altered by inputs; also means the enemies might look
  for it, and if it dies the game is over, etc.
* `behaviour`: this component will allow specifying a behaviour for the entity, eg an
  enemy that will run after/shoot the player etc.  
* `sprite`, `mesh`, `particle`: render-related components, may derive from the same base class?
* `parent`: allows specifying a parent entity; for example, a sword held by a character
  will have this component with the character set as parent; this might mean some systems
  will skip it (collision, physics) and others will act accordingly (rendering will draw
  the sword in the character hand)
* `hit`: might specify either a hit-giving or a hit-receiving zone (ie for weapons)
* `life`: hitpoints
  
Possible systems include:
* Rendering system: handle the target canvas & context, manipulates a rendering library and
  looks for render-related components (sprite, mesh, particles, etc.) to call the library API
* Input system: registers event handles for inputs (key/mouse) and will alter the entity
  that has the `player` component attached
* Behaviour system: will look for `behaviour` components on entities and make them do stuff
  accordingly
* Collision system: will look for `collision` components on entities and resolve interactions
  between them
* Hit system: will compare hit-giving and hit-receiving regions of entities and
  mutate `life` components accordingly