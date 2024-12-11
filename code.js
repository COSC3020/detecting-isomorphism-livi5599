function are_isomorphic(graph1, graph2) {
    //Check if graphs have the same number of vertices
    if (graph1.length != graph2.length) {
        console.log("Graphs don't have the same number of nodes");
        return false;
    }

    //Check if graphs have the same number of edges
    let g1Edges = 0;
    let g2Edges = 0;

    for (row = 0; row < graph1.length; row++) {
        for (column = 0; column < graph1.length; column++) {
            if (graph1[row][column] == 1) {
                g1Edges += 1;
            }
        }
    }
    
    for (row = 0; row < graph2.length; row++) {
        for (column = 0; column < graph2.length; column++) {
            if (graph2[row][column] == 1) {
                g2Edges += 1;
            }
        }
    }

    if (g1Edges != g2Edges) {
        console.log("Graphs don't have the same number of edges");
        return false;
    }

    //Check if graphs have the same degree sequence
    let g1DegSeq = [];
    let g2DegSeq = [];

    for (row = 0; row < graph1.length; row++) {
        let degCounter = 0;
        for (column = 0; column < graph1.length; column++) {
            if (graph1[row][column] == 1) {
                degCounter += 1;
            }
        }
        g1DegSeq.push(degCounter);
    }

    for (row = 0; row < graph2.length; row++) {
        let degCounter = 0;
        for (column = 0; column < graph2.length; column++) {
            if (graph2[row][column] == 1) {
                degCounter += 1;
            }
        }
        g2DegSeq.push(degCounter);
    }

    if (JSON.stringify(g1DegSeq) != JSON.stringify(g2DegSeq)) {
        console.log("Graph degree sequences aren't the same");
        return false;
    }

    //Check if graphs have the same edge structure
    for (row = 0; row < graph1.length; row++) {
        console.log("graph1[row] = ", graph1[row]);
        console.log("graph2[row] = ", graph2[row]);
        if (JSON.stringify(graph1[row]) != JSON.stringify(graph2[row])) {
            console.log("Graphs don't have the same edge structure");
            return false
        }
    }
    
    return true;
}
