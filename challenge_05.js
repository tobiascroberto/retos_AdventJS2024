/**
 * 
 * Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:

type indicates if it's a left boot (I) or a right boot (R).
size indicates the size of the boot.
Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.

Note: You can have more than one pair of boots of the same size!
 * 
*/


function organizeShoes(shoes) {

    let objAux = {}
    let array = []

    shoes.forEach(shoe => {

        if(objAux[shoe.size]){

            if(objAux[shoe.size]!==shoe.type){
                //objAux[shoe.size] += shoe.type;
                array.push(shoe.size);
                objAux[shoe.size]= null;
            }
        }
        else{
            objAux[shoe.size] = shoe.type; 
        }
    });


    return array
  }

  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  console.log(organizeShoes(shoes))
  // [38, 42]