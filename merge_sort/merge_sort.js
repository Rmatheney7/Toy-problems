// split input into array of arrays with individual characters
var mergeSort = function (input){
    // output array
    var mergeSorted = [];
    // input split by character
    var splitInput = input.split("")
    var arrays = [];

    // make each character its own array
    splitInput.forEach(function(character, i, c){
        splitInput[i] = [character]
       

    });
    console.log(splitInput);

    var split = function(input) {
        if(Input.length > 2){
            var half = Math.round(splitInput.length / 2);
            var left = splitInput.slice(0, half)
            var right = splitInput.slice(half)

           split(left).sort()
           split(right).sort()
    
        }else{
            
            
        }

        split(splitInput);





    }
    return mergeSorted

    
    
// var combine = function(input){
//     var pushList = [];
//     count = 0;
//     input.forEach(function(character, i, c){
//         if(c[count]){
//             pushList.push([...c[count], ...c[count + 1]].sort())
//             count+= 2;

//         }
//         if(pushList.length > 1){
//             combine(pushList);
//         }


//     })
// }
// return mergeSorted;

}



console.log(mergeSort("test"))
    // combine  arrays 2 at a time and sort until 1 sorted list exists 
