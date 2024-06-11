/**
 * Ship object
 */

class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }

  getHitCount() {
    return this.hitCount;
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    return this.hitCount >= this.length;
  }
}

export default Ship;
