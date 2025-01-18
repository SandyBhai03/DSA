class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new Node(1);
let firstNode = new Node(2);
let secondNode = new Node(3)
let thirdNode = new Node(4);
let fourthNode = new Node(5);
let fifthNode = new Node(6);

// connect Nodes
head.next = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;

// function to Insert in the Beggining in Linked List
function insertInBeggining(key){
    let newNode = new Node(key);
    newNode.next = head;
    head = newNode;
}

insertInBeggining(22);
insertInBeggining(11);
function printList(head){
    currentNode = head;

    while( currentNode != null){
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

printList(head)
insertInBeggining(11);