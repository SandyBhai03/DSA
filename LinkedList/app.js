// Learn Linked List

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
// create Nodes
let head = new Node(1)
let firstNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);
let fourthNode = new Node(5);
let fifthNode = new Node(6);

// Connect Nodes with eachOthers
head.next = firstNode;
firstNode.next = secondNode;

// Traverse LinkedList

traverseLinkedList(head);

function traverseLinkedList(head){
    let current = head;
  

    while(current != null){
        console.log(current.data);
        current = current.next;
    }
    
}































































































