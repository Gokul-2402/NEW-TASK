async function fetchdata(){
    try{
        let result = await fetch("https://jsonplaceholder.typicode.com/todo");
        let data = await result.json();
        console.log(data);

    }catch(error){
        console.log(error.message);
    }
}

fetchdata();