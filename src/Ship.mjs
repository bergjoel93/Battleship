/**
 * Ship object
 */

class Ship {
  constructor(name, size) {
    this.name = name;
    this.size = size;
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
    return this.hitCount >= this.size;
  }
}

export default Ship;
