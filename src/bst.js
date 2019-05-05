function Node(key) {
    this.left = null;
    this.right = null;
    this.key = key;
}
function BinarySearchTree() {
    this.__Root__ = null;
}
BinarySearchTree.prototype.insert = function(key) {
    var newNode = new Node(key);
    if (this.__Root__ == null) {
        this.__Root__ = newNode;
        return;
    }
    var currNode = this.__Root__;
    while (currNode) {
        if (newNode.key < currNode.key) {
            if (currNode.left) {
                currNode = currNode.left;
            } else {
                currNode.left = newNode;
                break;
            }
        } else {
            if (currNode.right) {
                currNode = currNode.right;
            } else {
                currNode.right = newNode;
                break;
            }
        }
    }
};

BinarySearchTree.prototype.remove = function(key) {};
BinarySearchTree.prototype.search = function(key) {
    var isFound, currNode;
    if (this.__Root__ == null) {
        return false;
    }
    isFound = false;
    currNode = this.__Root__;
    while (currNode) {
        if (key < currNode.key) {
            if (currNode.left) {
                currNode = currNode.left;
            } else {
                break;
            }
        } else if (key > currNode.key) {
            if (currNode.right) {
                currNode = currNode.right;
            } else {
                break;
            }
        } else {
            isFound = true;
            break;
        }
    }
    return isFound;
};

BinarySearchTree.prototype.inOrderTraverse = function(callback) {
    var currNode;
    if (this.__Root__ == null) {
        return false;
    }
    currNode = this.__Root__;
    traverse(currNode, callback);

    function traverse(node, callback) {
        if (node) {
            var left = node.left;
            traverse(left, callback);
            callback(node.key);
            traverse(node.right, callback);
        }
    }
};

BinarySearchTree.prototype.preOrderTraverse = function(callback) {
    var currNode;
    if (this.__Root__ == null) {
        return false;
    }
    currNode = this.__Root__;
    traverse(currNode, callback);

    function traverse(node, callback) {
        if (node) {
            callback(node.key);
            traverse(node.left, callback);
            traverse(node.right, callback);
        }
    }
};

BinarySearchTree.prototype.postOrderTraverse = function(callback) {
    var currNode;
    if (this.__Root__ == null) {
        return false;
    }
    currNode = this.__Root__;
    traverse(currNode, callback);

    function traverse(node, callback) {
        if (node) {
            traverse(node.left, callback);
            traverse(node.right, callback);
            callback(node.key);
        }
    }
};

BinarySearchTree.prototype.min = function(key) {};
BinarySearchTree.prototype.max = function(key) {};
export default BinarySearchTree;
