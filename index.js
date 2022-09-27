// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Implement the filter Method on a Prototype</h1>`;

/** TODO:
 * Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().  You should not use the built-in filter method.  The Array instance can be accessed in the myFilter method using this.
 *
 */

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  const newArray = [];
  this.forEach((c) => {
    if (callback(c)) {
      newArray.push(c);
    }
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

console.log('s =>', s);
console.log('new_s =>', new_s);
