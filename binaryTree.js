class binaryTree {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    getNumNodes() {
        if(this == null) {
            return 0
        }

        else {
            return 1 + (this.left != null ? this.left.getNumNodes() : 0) + (this.right != null ? this.right.getNumNodes() : 0);
        }
    }

    static generateBinaryTree(numNodes){
        let initialNode = new binaryTree(getRndInteger(-10, 10))

        for(let i = 1; i < numNodes; i++) {
            this.populateDown(initialNode, new binaryTree(getRndInteger(-10, 10)));
        }

        return initialNode;
    }

    static populateDown(parent, node) {
        if (getRndInteger(0,1) == 0) {
            if (parent.left == null) {
                parent.left = node;
            }
            else {
                this.populateDown(parent.left, node);
            }
        }
        else {
            if (parent.right == null) {
                parent.right = node;
            }
            else {
                this.populateDown(parent.right, node);
            }
        }
    }
}

// inclusive on both sides
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(binaryTree.generateBinaryTree(getRndInteger(1, 10)).getNumNodes());