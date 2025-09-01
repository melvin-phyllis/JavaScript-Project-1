let tableau = [14, 35, 'n', 1, 34, 54];
let tableau2 = [14, 35, 3, 12000, 134, 4];

//fonction qui retourne uniquement le plus gran et petit element du tableau 
function minMax(arr){

    let tableau_trie = arr.sort((a,b)=>{
        return a - b
    })
    
    let new_arr =[tableau_trie[0],tableau_trie[tableau_trie.length-1]]
    console.log(new_arr)
}

minMax(tableau)
minMax(tableau2)
