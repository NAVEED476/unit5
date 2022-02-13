class node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // i am going to create a method for inserting in the biginning

  InsertatBegining(data) {
    this.head = new node(data, this.head);
    this.size++;
  }

  insertintheEnd(data) {
    let node1 = new node(data);
    let current;
    if (!this.head) {
      this.head = node1;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node1;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index == 0) {
      this.head = new node(data, this.head);
    }
    let node2 = new node(data);

    let current = this.head;

    let previous;

    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node2.next = current;
    previous.next = node2;
    this.size++;
  }
  getat(index) {
    if (index > this.size) {
      return console.log("enter the valid index value");
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (index == count) {
        console.log("the current index value", current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  removeat(index) {
    if (index > 0 && index > this.size) {
      return console.log("pleade enter the valid index number");
    }
    let current;
    let previous;
    let count = 0;
    current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  clearall() {
    this.head = null;
    this.size = 0;
  }

  printlist() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let ll = new linkedlist();
ll.InsertatBegining(100);
ll.InsertatBegining(200);
ll.InsertatBegining(300);
ll.InsertatBegining(400);
//ll.insertintheEnd(500);
ll.getat(7);
ll.removeat(2);

ll.insertAt(600, 2);

ll.clearall();

//console.log(ll)

ll.printlist();
