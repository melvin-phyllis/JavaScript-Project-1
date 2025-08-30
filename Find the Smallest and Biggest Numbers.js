let tableau = [14, 35, 'n', 1, 34, 54];

function minMax(arr){

    let tableau_trie = arr.sort((a,b)=>{
        return a - b
    })
    
    let new_arr =[tableau[0],tableau[tableau.length-1]]
    console.log(new_arr)
}

minMax(tableau)
