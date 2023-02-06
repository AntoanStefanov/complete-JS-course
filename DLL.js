// eslint-disable-next-line strict
'use strict';

class Node {
  constructor(data, previous, next) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }

  toString() {
    return this.data;
  }
}

class DoublyLinkedList {
  #size = 0;
  #head = null;
  #tail = null;

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  #addFirstElement(data) {
    this.#tail = this.#head = new Node(data, null, null);
    this.#size++;
  }

  #isLastElement() {
    return this.#size === 1;
  }

  #deleteLastElement() {
    this.#head = this.#tail = null;
    this.#size--;
  }

  print() {
    const arrayNodes = [];
    let currentNode = this.#head;
    for (let i = 0; i < this.#size; i++) {
      arrayNodes.push(currentNode);
      currentNode = currentNode.next;
    }
    console.log(arrayNodes.join(' <--> '));
  }

  isEmpty() {
    return this.#size === 0;
  }

  addLast(data) {
    if (this.isEmpty()) {
      this.#addFirstElement(data);
      return;
    }
    // newTail: previous->current tail, next->null.
    const newTail = new Node(data, this.tail, null); // 2 -> 1

    // current tail.next->newTail
    this.#tail.next = newTail; // 1 -> 2

    // set newTail as tail.
    this.#tail = newTail;

    this.#size++;
  }

  deleteLast() {
    if (this.isEmpty()) {
      console.log('DLL is empty!');
      return;
    }

    if (this.#isLastElement()) {
      this.#deleteLastElement();
      return;
    }

    const previousNode = this.#tail.previous;

    // make previous node's next set to null.
    previousNode.next = null;

    // set tail to previous node.
    this.#tail = previousNode;

    // Object deletion. make it accessible to the garbage collector. aka null.
    // https://stackoverflow.com/questions/16643156/how-to-delete-an-object-from-memory-using-jquery-javascript

    // https://javascript.info/garbage-collection
    // Garbage Collector will get the unaccessible node.
    // "Outgoing references do not matter.
    // Only incoming ones can make an object reachable."

    // both 56 and 59 lines removes the only TWO references to the node.
    // there are no other ways of getting that node, so with this said,
    // garbage collector will get it.

    this.#size--;
  }

  addFirst(data) {
    if (this.isEmpty()) {
      this.#addFirstElement(data);
      return;
    }

    // newHead: prev:null, next:head
    const newHead = new Node(data, null, this.#head);

    // head.prev = newHead.
    this.#head.previous = newHead;

    // set newHead as head.
    this.#head = newHead;

    this.#size++;
  }

  deleteFirst() {
    if (this.isEmpty()) {
      console.log('DLL is empty!');
      return;
    }

    if (this.#isLastElement()) {
      this.#deleteLastElement();
      return;
    }

    this.#head.next.previous = null;
    this.#head = this.#head.next;
    this.#size--;
  }

  insert(index, data) {
    if (index < 0 || index > this.#size) {
      console.log('Invalid index');
      return;
    }

    if (index === 0) {
      this.addFirst(data);
      return;
    }

    if (index === this.#size) {
      this.addLast(data);
      return;
    }

    // insert(1, 7):
    // 1, 2, 3
    // 1, 7, 2, 3

    let currentNode = this.#head;

    // we get 2.
    for (let currentIndex = 0; currentIndex < index; currentIndex++) {
      currentNode = currentNode.next;
    }

    // set 7.previous to 2.previous
    // set 7.next to 2
    const newNode = new Node(data, currentNode.previous, currentNode);

    // set 1.next to 7.
    currentNode.previous.next = newNode;

    // set 2.previous to 7
    currentNode.previous = newNode;
    this.#size++;
  }
}

const DLL = new DoublyLinkedList();
DLL.addLast(1);
DLL.addLast(2);
DLL.addLast(3);
DLL.deleteLast();
DLL.addFirst(0);
DLL.deleteFirst();
DLL.print();

const DLL1 = new DoublyLinkedList();
DLL1.addLast(1);
DLL1.addLast(2);
DLL1.deleteLast();
DLL1.deleteLast();
DLL1.insert(0, 1);
DLL1.insert(1, 2);
DLL1.insert(2, 3);
DLL1.insert(1, 7); // 1, 7, 2, 3
DLL1.print();

const DLL2 = new DoublyLinkedList();
DLL2.insert(1, 1);
DLL2.deleteFirst();
DLL2.deleteLast();
DLL2.insert(0, 1);
DLL2.print();
DLL2.deleteLast();
DLL2.deleteLast();
DLL2.insert(-1, 1);
DLL2.addFirst(1);
DLL2.deleteFirst();
DLL2.deleteFirst();
DLL2.print();
DLL2.addLast(1);
DLL2.addLast(2);
DLL2.print();
DLL2.deleteFirst();
DLL2.deleteLast();
DLL2.addFirst(1);
DLL2.addFirst(0);
DLL2.insert(1, 7);
DLL2.print();
