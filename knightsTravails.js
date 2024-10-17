/*
*   Your task is to build a function knightMoves that shows the 
*   shortest possible way to get from one square to another by outputting 
*   all squares the knight will stop on along the way.
*
*   You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:
*
*   knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
*
*
*/

// Start by creating a adjacent list 
const adjList = {};
const positions = [];
const moveRules = [
    [1,2],
    [2,1],
    [-1,2],
    [2,-1],
    [1,-2],
    [-2,1],
    [-1,-2],
    [-2,-1]
];

//Create keys for adjList
for(let x = 0; x < 8; x++){
    for(let y= 0; y < 8; y++){
        positions.push([x,y]);        
    }
}

//add vertices adjacent to keys and append to adjList
for(const node of positions){
    const position = [];
    for(const move of moveRules){
        
        if(node[0] + move[0] > -1 && node[0] + move[0] < 8){
            if(node[1] + move[1] > -1 && node[1] + move[1] < 8){
                position.push([node[0] + move[0], node[1] + move[1]]);
            }
        }
    }
    adjList[node] = position;
}


export default function knightsTravails(firstPos,endPos){
    if(firstPos[0] < 0 || firstPos[0] > 7 || firstPos[1] < 0 || firstPos[1] > 7){
        throw new Error("Input out of range!");
    }
    if(endPos[0] < 0 || endPos[0] > 7 || endPos[1] < 0 || endPos[1] > 7){
        throw new Error("Input out of range!");
    }

    const path = {};
    //init path with starting pos as null;
    path[firstPos] = null;
    const queue = [firstPos];
    const visited = [];
    
    //Use BFS to find paths from firstPos to endPos
    while(queue.length != 0){

        visited.push(queue[0].toString());

        if(queue[0].toString() == endPos.toString()){
            break;
        }
        adjList[queue[0]].forEach((elem) => {
            if(!visited.includes(elem.toString())){
                queue.push(elem);
                //Keep track of elem parent.
                if(path[elem] == null){
                    path[elem] = queue[0];
                }
            }
        });
        queue.shift();
    }

    //create shortest path array from path object.
    const shortestPath = [];
    let posKey = endPos;
    //Starting pos does not count
    let moves = -1;

    while(posKey != null){
        shortestPath.push(posKey);
        posKey = path[posKey];
        ++moves
    }
    
    return showResults(moves,shortestPath.reverse());

}

function showResults(moves, shortPathArray){
    console.log(`=> You made it in ${moves} moves! Here's your path:`);
    shortPathArray.forEach((pos) => console.log(pos));
}

knightsTravails([0,0],[7,7]);