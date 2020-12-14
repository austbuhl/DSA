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
}
