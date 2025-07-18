// function myvalue(data){
//     console.log(`My value is : ${data}`);
// }
//  let promises = new Promise((resolve,reject)=>{
//     let x = 1;
//     if (x===0){
//         resolve("promise is solved");
//     }else{
//         reject("promise is not solved");

//     }
    

//  })

// promises.then((value)=>{myvalue(value)}, (error)=>{myvalue(error)});

function getdata(){
    return new Promise((resolve,result)=>{
        setTimeout(()=>{
            resolve ("code is resolved");
        }, 2000);

    });
};

 async function greeting(){

    let data = await getdata();
    console.log(data);

};

greeting();