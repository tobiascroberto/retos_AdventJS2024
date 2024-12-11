/**
 * 
 * 
 * It's time to put up the Christmas tree at home! 🎄 But this year we want it to be special. We're going to create a function that receives the height of the tree (a positive integer between 1 and 100) and a special character to decorate it.

The function should return a string that represents the Christmas tree, constructed as follows:

The tree is made up of triangles of special characters.
The spaces on the sides of the tree are represented with underscores _.
All trees have a trunk of two lines, represented by the # character.
The tree should always have the same length on each side.
You must ensure the tree has the correct shape using line breaks \n for each line.

 * 
 * 
*/

console.log('input: 5 : ' +'*********'.length) //9 9/2 = 4.5 =>
console.log('input: 3 : ' +'+++++'.length) // 5 
console.log('input: 6 : ' +'@@@@@@@@@@@'.length) //11
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/


function createXmasTree(height, ornament) {



  let tree = '\n';
  let length = height*2 -1;

  console.log(length)
  console.log(length/2)
  
  for(let i=0; i<height; i++){
    
    tree +=  ('_'.repeat(height-1-i) + ornament.repeat(2*i+1)).padEnd(Math.ceil(length),'_')+'\n'
  }
    
    tree +=  ('_'.repeat(height-1) + '#').padEnd(Math.ceil(length),'_')+'\n'
    tree +=  ('_'.repeat(height-1) + '#').padEnd(Math.ceil(length),'_')

  
  return  tree
}

console.log(createXmasTree(6,'@'))


/**
 * 
 * copilot
 * 
 * function generateChristmasTree(height, char) {
    if (height < 1 || height > 100) {
        return "Height must be a positive integer between 1 and 100.";
    }

    let tree = "";

    // Generate the tree part
    for (let i = 0; i < height; i++) {
        let spaces = "_".repeat(height - i - 1);
        let decorations = char.repeat(2 * i + 1);
        tree += spaces + decorations + spaces + "\n";
    }

    // Generate the trunk part
    let trunkSpaces = "_".repeat(height - 1);
    let trunk = trunkSpaces + "#" + trunkSpaces + "\n" + trunkSpaces + "#" + trunkSpaces;

    return tree + trunk;
}

// Example usage
let height = 5;
let specialChar = "*";
console.log(generateChristmasTree(height, specialChar));

*/