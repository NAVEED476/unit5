class node {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}
class linkedlist {
  constructor(head = null) {
    this.head = head;
  }

  add(element) {
    var node = new node(element);

    var current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertat(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("please enter a valid index");
    } else {
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr;
      }
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

let node1 = new node(1);
let node2 = new node(2);
node1.next = node2;

let list = new linkedlist(node1);

console.log(list.head.size);
