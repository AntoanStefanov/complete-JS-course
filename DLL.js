// eslint-disable-next-line strict
'use strict';

class Node {
  constructor(data, previous, next) {
    this.data = data;
    this.previous = previous;
    this.next = next;
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

  isEmpty() {
    return this.#size === 0;
  }

  addLast(data) {
    if (this.isEmpty()) {
      this.#tail = this.#head = new Node(data, null, null);
    } else {
      // newTail: previous->current tail, next->null.
      const newTail = new Node(data, this.tail, null); // 2 -> 1

      // current tail.next->newTail
      this.#tail.next = newTail; // 1 -> 2

      // set newTail as tail.
      this.#tail = newTail;
    }
    this.#size++;
    return this.tail;
  }

  deleteLast() {
    if (this.isEmpty()) return;

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
      this.#tail = this.#head = new Node(data, null, null);
    } else {
      // newHead: prev:null, next:head
      const newHead = new Node(data, null, this.#head);

      // head.prev = newHead.
      this.#head.previous = newHead;

      // set newHead as head.
      this.#head = newHead;
    }
    this.#size++;
  }

  deleteFirst() {
    if (this.isEmpty()) return;

    this.#head.next.previous = null;
    this.#head = this.#head.next;
    this.#size--;
  }
}

const DLL = new DoublyLinkedList();
DLL.addLast(1);
DLL.addLast(2);
DLL.addLast(3);
DLL.deleteLast();
DLL.addFirst(0);
DLL.deleteFirst();
