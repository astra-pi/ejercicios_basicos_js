const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
  ];

  const cleanToys = [];

  for (let toy of toys) {
    if (!toy.name.includes("gato")) {
      cleanToys.push(toy);
    }
  }
  
  console.log(cleanToys); 