// map.keys().next().value

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.index = 0;
  this.store = {};
  return this;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.store[key]) return -1;
  this.store[key].lastModifyDate = ++this.index;
  console.log(this.store);
  return this.store[key].value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const { store } = this;
  if (store[key]) {
    store[key] = {
      value,
      lastModifyDate: ++this.index,
    };
  } else {
    if (this.capacity == Object.keys(this.store).length) {
      const minKey = Object.keys(this.store).reduce((rs, key, idx) => {
        return rs
          ? store[rs].lastModifyDate <= store[key].lastModifyDate
            ? rs
            : key
          : key;
      }, "");
      delete store[minKey];
      store[key] = {
        value,
        lastModifyDate: ++this.index,
      };
    } else {
      store[key] = {
        value,
        lastModifyDate: ++this.index,
      };
    }
  }

  console.log(store);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const handle = [
  "LRUCache",
  "put",
  "put",
  "get",
  "put",
  "get",
  "put",
  "get",
  "get",
  "get",
];
const val = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
