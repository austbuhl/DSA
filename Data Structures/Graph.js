class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1].push(vtx2)
    this.adjacencyList[vtx2].push(vtx1)
  }

  removeEdge(vtx1, vtx2) {
    this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
      (v) => v !== vtx2
    )
    this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
      (v) => v !== vtx1
    )
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }

    delete this.adjacencyList[vertex]
  }

  DFSRecursive(start) {
    const result = []
    const visited = {}

    const DFS = (vertex) => {
      if (!vertex) return null
      result.push(vertex)
      visited[vertex] = true
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return DFS(neighbor)
        }
      })
    }

    DFS(start)

    return result
  }

  DFSIterative(start) {
    const stack = [start]
    const result = []
    const visited = {}

    visited[start] = true
    let currentVertex
    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return result
  }

  BFS(start) {
    const queue = [start]
    const result = []
    const visited = {}

    visited[start] = true
    let currentVertex
    while (queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }
    return result
  }
}

let g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
