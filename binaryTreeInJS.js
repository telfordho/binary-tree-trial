class MyNode {
    constructor(value) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.sortNumbers = [];
    }
    // Call to insertNode to binaryTree
    // P.S. Need to split up a function to insert node directly in order to allow the recursive call
    insert(value) {
        let currentNode = this.root;
        let newNode = new MyNode(value);
        this.insertNode(currentNode, newNode)
    }

    insertNode(currentNode, newNode) {
        if(!currentNode) {
            this.root = newNode;
            return;
        }
        // console.log(newNode.value)
        // console.log(currentNode)

        if(newNode.value > currentNode.value) {
            switch(!!currentNode.rightNode) {
                case true: 
                    this.insertNode(currentNode.rightNode, newNode);
                    break;
                case false: 
                    currentNode.rightNode = newNode;
                    break;
            }
  
        }
        if(newNode.value < currentNode.value) {
            switch(!!currentNode.leftNode) {
                case true: 
                    this.insertNode(currentNode.leftNode, newNode);
                    break;
                case false:
                    currentNode.leftNode = newNode;
                    break;
            }
        }
    }
    sort(node = this.root) {
        if(node.leftNode)
        this.sort(node.leftNode, node.leftNode.value)
        if(node.value)
        this.sortNumbers.push(node.value);
        if(node.rightNode)
        this.sort(node.rightNode, node.rightNode.value)
        return this.sortNumbers;
    }
    find(value, node = this.root) {
        if(!node) {
            console.log('No Binary tree exist')
            return;
        }
        if(node.value === value) {
            console.log('Value Find')
            return;
        }
        if(node.rightNode && value > node.value) {
            return this.find(value, node.rightNode);
        }
        if(node.leftNode && value < node.value) {
            return this.find(value, node.leftNode);
        }
        console.log('Value Not Find')

    }
}

var tree = new BinarySearchTree();
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(2)
tree.insert(4)
tree.insert(6)
console.log(tree.sort())
console.log(tree)
console.log(tree.find(6))