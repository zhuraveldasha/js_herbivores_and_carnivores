'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health = 100) {
    super(name, health);

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore) {
      if (!animal.hidden) {
        animal.health -= 50;

        if (animal.health <= 0) {
          const index = Animal.alive.indexOf(animal);

          if (index !== -1) {
            Animal.alive.splice(index, 1);
          }
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
