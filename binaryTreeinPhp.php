<?php

class MyNode 
{
    public $leftNode = null;
    public $rightNode = null;
    public $value = null;

    public function __construct($value) {
        $this->value = $value;
    }
};


class BinarySearchTree {
    public $root = null;
    public $sortNumbers = array();

    function insert($value) {
        $currentNode = $this->root;
        $newNode = new MyNode($value);
        $this->insertNode($currentNode, $newNode);
    }

    function insertNode($currentNode, $newNode) {
        if(is_null($currentNode)) {
           $this->root = $newNode;
        }
        if($newNode->value > $currentNode->value) {
            if(is_null($currentNode->rightNode)){
                $currentNode->rightNode = $newNode;
            }
             $this->insertNode($currentNode->rightNode, $newNode);
        }
        if($newNode->value < $currentNode->value) {
            if(is_null($currentNode->leftNode)) {
                $currentNode->leftNode = $newNode;
            }
            $this->insertNode($currentNode->leftNode, $newNode);
        }
    }

    function findInNode($value, $node) {
        if(is_null($this->root)){
            echo 'node tree not existed';
        }

        if(!is_null($node->leftNode) && $value < $node->value) {
            return $this->findInNode($value, $node->leftNode);
        }
        if(!is_null($node->rightNode) && $value > $node->value) {
            return $this->findInNode($value, $node->rightNode);
        }
        if($value === $node->value) {
            echo 'Got you!';
        }
        echo 'Not existed value';
    }

}

$testTree = new BinarySearchTree();
$testTree->insert(1);
$testTree->insert(2);

$testTree->insert(3);
$testTree->insert(4);
echo 'console.log('. json_encode( $testTree->root ) .')';

$testTree->findInNode(7, $testTree->root);
// $testTree->findInNode(4, $testTree->root);
// $testTree->findInNode(6, $testTree->root);

?>