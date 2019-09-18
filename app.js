
for (var i = 1, points_sort = []; i <= 30; i++) {
    points_sort.push(i)
}

// randomize the array
points_sort.sort(function () {
    return Math.random() - 0.5;
});

document.getElementById("sort").innerHTML = points_sort;

const CheckDuplicate = (str) => {

    let arrText = [];
    let arrDup = [];

    for (var i = 0; i < str.length; i++) {

        var character = str.charAt(i);

        if (arrText[character]) {
            arrDup.push(character)
            arrText[character]++;

        } else {
            arrText[character] = 1;
        }
    }

    return arrDup;

}

const Submit = () => {

    let str = document.getElementById('valueInput').value;

    var F_wordDuplicate = CheckDuplicate(str);
    if (F_wordDuplicate.length > 0) {
        document.getElementById("output").innerHTML = F_wordDuplicate[0].toUpperCase();
    } else {
        document.getElementById("output").innerHTML = "Tidak ada duplikat";
    }

}

const SortAsc = () => {
    points_sort.sort(function (a, b) {
        return a - b
    });

    document.getElementById("sort").innerHTML = points_sort;
}

const SortDesc = () => {
    points_sort.sort(function (a, b) {
        return b - a
    });
    
    document.getElementById("sort").innerHTML = points_sort;
}
/*
function bubbleSort(arr) {
    
    for (var i = 0; i < arr.length; i++) {//Outer Loop
        for(var j=0; j < arr.length - 1; j++){//Inner Loop
         if (arr[j] > arr[j + 1]) {
           var a = arr[j]
           var b = arr[j + 1]
           arr[j] = b
           arr[j + 1] = a
          }
        }
       }
    console.log(arr)
}

bubbleSort(points_sort);
*/