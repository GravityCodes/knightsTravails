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
const adjList = new Map();
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

for(let x = 0; x < 8; x++){
    for(let y= 0; y < 8; y++){
        positions.push([x,y]);        
    }
}

for(const node of positions){
    const position = [];
    for(const move of moveRules){
        
        if(node[0] + move[0] > 0 && node[0] + move[0] < 7){
            if(node[1] + move[1] > 0 && node[1] + move[1] < 7){
                position.push([node[0] + move[0], node[1] + move[1]]);
            }
        }
    }
    adjList.set(node,position);
}

console.log(adjList);

export default function knightsTravails(firstPos,endPos){
    if(firstPos[0] < 0 || firstPos[0] > 7 || firstPos[1] < 0 || firstPos[1] > 7){
        throw new Error("Input out of range!");
    }
    if(endPos[0] < 0 || endPos[0] > 7 || endPos[1] < 0 || endPos[1] > 7){
        throw new Error("Input out of range!");
    }

    

}