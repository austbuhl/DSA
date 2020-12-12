class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined

    if (this.length === 0) {
      this.head = null
      this.tail = null
    } else {
      const current = this.head
      const newTail = current
      while (current.next) {
        newTail = current
        current = current.next
      }
      this.tail = newTail
      this.tail.next = null
    }

    this.length--
    return current
  }

  shift() {
    if (!this.head) return undefined
    const oldHead = this.head
    if (this.length === 0) {
      this.tail = null
    } else {
      this.head = oldHead.next
    }

    this.length--
    return oldHead
  }

  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined
    const counter = 0
    const current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }

  set(index, val) {
    const foundNode = this.get(index)
    if (foundNode !== null) {
      foundNode.val = val
      return true
    }
    return false
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(val)
    if (index === 0) return !!this.unshift(val)

    const newNode = new Node(val)
    const before = this.get(index - 1)
    const after = before.next

    before.next = newNode
    newNode.next = after

    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const before = this.get(index - 1)
    const removed = before.next

    before.next = removed.next

    this.length--
    return removed
  }
}
