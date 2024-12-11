function organizeInventory(inventory) {
    // Code here
  
    let inventoryObject = {};

    inventory.forEach(
      item =>{

        {
            if(inventoryObject[item.category]){
                let cantidad = (inventoryObject[item.category][item.name]||0) + item.quantity
                inventoryObject[item.category][item.name] = cantidad;
                
            }else{
                inventoryObject[item.category] = { [item.name] : item.quantity  } ;
            }
      }
    }
    )
  
    return inventoryObject
  }

  const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]

  const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]
  

  console.log(organizeInventory(inventory))
  console.log(organizeInventory(inventory2))


  /*
  
  copilot:


function organizeInventory(inventory) {

const result = {}; 

inventory.forEach(toy => { 

  if (!result[toy.category]) 
  { 
    result[toy.category] = {}; 
  } 
  
  if (result[toy.category][toy.name]) {
     result[toy.category][toy.name] += toy.quantity; 
     } 
  else {
     result[toy.category][toy.name] = toy.quantity; 
     } 
     
     }
  ); 

return result;
 
}

  */