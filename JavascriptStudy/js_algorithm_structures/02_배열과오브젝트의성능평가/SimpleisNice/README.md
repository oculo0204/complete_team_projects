# 배열과 오브젝트의 성능 평가하기

## Objectives
- Understand how objects and arrays work, through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods


## Object
```js
const instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
```

### When to use objects
- When you don't need order
- When you need fast access / insertion and removal

### Big O of objects
- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(1)

### Big O of objects methods
- Object.keys - O(N)
- Object.values - O(N)
- Object.entries - O(N)
- hasOwnProperty - O(1)

## Array
```js
const tempArray = [1, 2, 3, 4, 5, 6, 7];
```

### When to use arrays
- When you need order
- When you need fast access / insertion and removal (sort of....)

### Big O of array methods
- Insertion - It depends....
- Removal - It depends....
- Searching - O(N)
- Access - O(1)

## Big O of array operations
- push - O(1)
- pop - O(1)
- shift - O(N)
- unshift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N * log N)
- forEach/map/filter/reduce/etc. - O(N)
