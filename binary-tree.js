/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(this.root === null) {
      return 0;
    }
    const minDepthNode = (node) => {
      if (node === null) {
        return Infinity;
      }
      if (node.left === null && node.right === null) {
        return 1;
      }

      return Math.min(minDepthNode(node.left), minDepthNode(node.right)) + 1;
    };

    return minDepthNode(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) {
      return 0;
    }

    const maxDepthNode = (node) => {
      if (node === null) {
        return 0;
      }
      if (node.left === null && node.right === null) {
        return 1;
      }

      return Math.max(maxDepthNode(node.left), maxDepthNode(node.right)) + 1;
    };

    return maxDepthNode(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let globalMax = -Infinity; //small num

    const maxSumNode = (node) => {
      if (node === null) {
        return 0;
      }

      let leftMax = Math.max(0, maxSumNode(node.left));
      let rightMax = Math.max(0, maxSumNode(node.right));

      globalMax = Math.max(globalMax, node.val + leftMax + rightMax);

      return node.val + Math.max(leftMax, rightMax);
    };

    maxSumNode(this.root);
    return globalMax;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;

    const traverse = (node) => {
      if (node === null) {
        return;
      }
      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val;
        }
      }

      traverse(node.left);
      traverse(node.right);
    }
    
    traverse(this.root);
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
