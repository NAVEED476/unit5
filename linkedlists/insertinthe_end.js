class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }

  insertintheend(data) {
    let node = new Node(data);

    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  printlist() {
    let current = this.head;

    while (current) {
      console.log(current.data);

      current = current.next;
    }
  }
}


let ll = new Linkedlist()

ll.insertintheend(100)
ll.insertintheend(2)
ll.insertintheend(100)
ll.insertintheend(3000)

ll.printlist()