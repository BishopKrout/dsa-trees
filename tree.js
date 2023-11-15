/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) {
      return 0;
    }

    let sum = this.root.val;
    let stack = [...this.root.children];

    while (stack.length > 0) {
      const currentNode = stack.pop();
      sum += currentNode.val;
      stack.push(...currentNode.children);
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) {
      return 0;
    }
    let count = 0;
    let stack = [this.root];

    while (stack.length > 0) {
      const currentNode = stack.pop();
      if (currentNode.val % 2 === 0) {
        count++;
      }
      for (let child of currentNode.children) {
        stack.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) {
      return 0;
    }
    let count = 0;
    let stack = [this.root];

    while (stack.length > 0) {
      const currentNode = stack.pop();

      if (currentNode.val > lowerBound) {
        count++;
      }

      for (let child of currentNode.children) {
        stack.push(child);
      }
    }
    
    return count;
  }
}


module.exports = { Tree, TreeNode };
