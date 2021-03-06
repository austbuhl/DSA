class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let current = this.root
    while (true) {
      if (val === current.val) return undefined
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  find(val) {
    if (!this.root) return false
    let current = this.root
    const found = false
    while (current && !found) {
      if (val < current.val) {
        current = current.left
      } else if (val > current.val) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return false
    return current
  }

  BFS() {
    let node = this.root
    const visited = []
    const queue = []

    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      visited.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return visited
  }

  DFSPreOrder() {
    const visted = []
    function traverse(node) {
      visted.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return visted
  }

  DFSPostOrder() {
    const visited = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visited.push(node.val)
    }
    traverse(this.root)
    return visited
  }

  DFSInOrder() {
    const visited = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      visited.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return visited
  }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
