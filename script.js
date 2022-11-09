// let names = ['Abbos', 'Valentina', 'Odilbek', 'Shaxzod', 'Xojik', 'Emil', 'Saidbek', 'Morgenshtern', 'Alisher', 'Daler']

// let longest =[]

// if(names.sort((a,b) => b.length- a.length)){
//     console.log(names[0])
// }
// if(names.sort((a,b) => a.length- b.length)){
//     console.log(names[0])
// }

    let arr = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true 
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]
    let a = {
        count: 0,
        arr: []
    }
   
    let b = {
        count: 0,
        arr: []
    }



    arr.filter(item =>{
        if(arr.completed === 'true'){
           a.arr.push(completed) 
        }
    })
    console.log(a.arr)

