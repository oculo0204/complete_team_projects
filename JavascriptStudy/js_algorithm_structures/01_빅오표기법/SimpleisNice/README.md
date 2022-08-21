# Big O Notation

## Objectives
1. Motivate the need for something like Big O Notation
2. Describe what Big O Notation is
3. Simplify Big O Expressions
4. Define "time complexity" and "space complexity"
5. Evaluate the time complexity and space complexity of different algorithms using Bi O Notation
5. Describe what a logarithm is

## Who Cares?
- It's important to have a precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
- Less important: it comes up in interviews!

## What does better mean?
- Faster?
- Less memory-intensive?
- More readable?

## The problem with time
- Different machines will record different times
- The same machine will record different times!
- For fast algorithms, speed measurements may not be precise enough?

## Big O Definition
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

## Big O shorthands
- Analyzing complexity with big O can get complicated
- There are several rules of thumb that can help
- These rules won't ALWAYS work, but are a helpful starting point

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## Space Complexity in JS
- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

## Recap
- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
- Big O Notation is everywhere, so get lots of practice!

### RER
https://www.educative.io/edpresso/time-complexity-vs-space-complexity

**What is time complexity**
```
The time complexity of an algorithm is the amount of time taken by the algorithm to complete its process as a function of its input length, n. The time complexity of an algorithm is commonly expressed using asymptotic notations:

- Big O - O(n),
- Big Theta - Θ(n)
- Big Omega - Ω(n)
```

**What is space complexity**
```
The space complexity of an algorithm is the amount of space (or memory) taken by the algorithm to run as a function of its input length, n. Space complexity includes both auxiliary space and space used by the input.

Auxiliary space is the temporary or extra space used by the algorithm while it is being executed. Space complexity of an algorithm is commonly expressed using Big O (O(n))
(O(n)) notation.

Many algorithms have inputs that can vary in size, e.g., an array. In such cases, the space complexity will depend on the size of the input and hence, cannot be less that O(n) for an input of size n. For fixed-size inputs, the complexity will be a constant O(1).
```
