
let tableau = [10,2, 35, 'n', 1, 34, 54];
let tableau2 = ['n',, 35, 'n', 1, 34, 54];

//fonction qui retire tout element du tableau qui n'est pas un nombre 
function filterArray(arr) {
   
           //filtre les information et cree un nouveau tableau 
           const q = arr.filter(b => typeof b !== "string")
       return console.log(q) 
}


filterArray(tableau) 
filterArray(tableau2) 
