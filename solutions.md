## ALTERNATE SOLUTIONS

### Solution 1
```js
// The global variable
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    // Only change code below this line 
    let newArray = [];
    this.forEach(function(x) {
        if (callback(x) == true) {
            newArray.push(x);
        }
    });
    // Only change code above this line
    return newArray;
};

let new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});
```


### Solution 2
```js
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    let newArray = [];
    // Add your code below this line 
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArray.push(this[i]);
        }
    }
    // Add your code above this line
    return newArray;
};

let new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});
```

