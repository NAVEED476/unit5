// for creating a linked list we need to create a node first then only we can easily access

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Linkedlist {
  // mainly there are two things that i need to remember

  // 1. Constructor
  // 2. Methods

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // there are mainly four methods which we can use in linked lists

  // i.add
  // ii.insert
  // iii.delete
  //  isEmpty
  //  size
  // iv.print

  add(element) {
    let node = new Node(element);

    // i am creating a new node

    //checking the if condtition for testing is not head here i am mainly hecking tha t
    // if head == null or head !==null if(!this.head) then the head will become new node

    // else
    // i am creating a new node called current and it tends to this.head

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }



  

  printlist() {
    var current = this.head;

    var index = 0;
    while (current) {
      console.log("current", current, "index", index++);
      current = current.next;
    }
  }
}

var list = new Linkedlist();
list.add(1);
list.add(2);
list.add(3);

list.printlist();
