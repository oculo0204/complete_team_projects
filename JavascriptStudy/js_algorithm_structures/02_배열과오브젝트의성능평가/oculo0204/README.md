### 오늘 배울 것

1\. 객체와 배열이 big o의 관점에서 어떻게 작동하는지

다양한 연산과 배열에 데이터를 입력하는 빠르고 느린 방법

2\. 배열의 시작에 요소를 집어넣는 것이 자원을 낭비하는 이유

3\. 배열에 요소를 삽입하는 다른 방법이 있다면 그것이 좋은 방법인지 (sort같은메소드도 포함해서)

더보기

1\. understand how objects and arrays work trough the lens of Big O;

various operations, is there a fast way to insert to an array or slow way that sort of thing.

2\. Explain why adding elements to the beginning of an array is costly.

3\. And if there are alternatives, if there's a better way of inserting

we'll compare and contrast the runtime for arrays and objects.But also they're built in methods.

There's a lot of these methods we get for free, like the built in JavaScript sought for an array for

each object keys object that has owned property, all that stuff we're going to discuss.

---

### 14\. 객체를 빅오로 분석하기

객체는 정렬될 필요가 없을 때 효과적으로 동작한다.

또 빠르게 접근해야 하거나 삽입, 제거해야 할때 배열에 비해 잘 작동한다.

**객체에서의 삽입, 제거, 정렬, 접근**

insertion O(1)

Removal O(1)

Searching O(N)

Access O(1)

```
let instructor = {
    firstName: "Kelly",
    isIntructor: true,
    favoriteNumbers: [1,2,3,4]
}
```


**객체에서 사용하는 메소드**

Object.keys O(N)

Object.values O(N)

Object.entries O(N)

hasOwnProperty O(1)

**객체 vs 배열**

객체의 정렬되지 않은 특성 때문에 정렬되어 있는 배열과 빠르기를 비교할 때가 많다. 하지만 요소의 접근, 삽입, 제거가 빠르게 때문에 아무 생각없이 사용하기에는 객체가 좋다.

### 15\. 배열 안의 데이터에 접근이 느린 이유

배열의 가장 큰 특징은 정렬이 되어 있다는 것이다.

정렬되어 있는 것이 필요하다면 유용하지만, 연산을 하는 시간이 더 걸릴 수 있다.

심지어는 싱글 링크 리스트나 더블 링크 리스트와도 비교된다.

**배열에서의 삽입, 제거, 정렬, 접근**

insertion 어디에 입력하는지에 따라

removal 어디에 입력하는지에 따라

searching O(N)

Access O(1)

배열은 정렬되어 있기 때문에 인덱싱이 가능하다. 따라서 빠르게 접근할 수 있다. O(1)

하지만 삽입과 제거는 어디에 입력하는 지에 따라 달라진다.

만약 배열의 맨 뒤에 요소를 삽입한다면 O(1) constant time이 걸리지만 맨 앞에 삽입하게 되면 O(N) linear time이 걸린다.

**배열에서 사용하는 메소드**

맨끝에 삽입/제거

-   push - O(1)
-   pop - O(1)

시작에 삽입/제거

-   shift - O(N)
-   unshift - O(N)

배열끼리 합침

-   concat - O(N)

배열의 일부 혹은 전체를 복사해옴

-   slice - O(N)

삽입과 삭제를 쉽게 할 수 있다.

-   splice - O(N)


-   sort - O(N \* log N)
-   forEach/map/filter/reduce/etc. - O(N)