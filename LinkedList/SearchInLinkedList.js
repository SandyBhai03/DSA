class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new Node(11);
let firstNode = new Node(22);
let secondNode = new Node(33);
let thirdNode = new Node(44);
let fourthNode = new Node(55);

// Connect Nodes
head.next = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;

// function to Search in LinkedList

function seachLinkedList(head, key){
    current = head;
    //let count = 1;
    while( current != null){
        if(current.data == key){
            //console.log(count)
            return true;
        }
        current = current.next;
        //count++;
    }
    return false;
    
}

const result = seachLinkedList(head, 55);

result === true ? console.log("Key Found in Linked List") : console.log("Key Not Found in Linked List")