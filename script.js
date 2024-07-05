// synchronus programming
console.log("This is synchornus programing which means that the code will eventually evaluate on the continous basis.")
console.log("Ayush");
console.log("Bittu");
console.log("Vibhu");
console.log("Ankit");


// aynchronus Programing
console.log("This is aysnchronus programing thet means that the code will not execute line by line and insted it will check if there and code taking too long to execute and then it will surpass it and execute the other line of the code.")
console.log("Ayush");

setTimeout(()=>{
    console.log("bittu");
},1000)
console.log("Vibhu");
console.log("Ankit");


// callbacks: these are basically called to pass an functionl argument in another funntion.
function sum(a, b){
    console.log(1+4);
}
function getSum(a, b, sumcallback){
    setTimeout(()=>{
        sumcallback(a,b);
    },2000)
}

getSum(1,3,sum);

// callback Hell: this is a kind of callback where the arguments are passed in a way of nesting to form a pyramid structure.
// eg:- ther's a database and we want to fetch the data items

function fetchData(dataId, fetchNextData){
    setTimeout(()=>{
        console.log("Data",dataId);
        if(fetchNextData)
            {
                fetchNextData();
            }
    },2500)
}

fetchData(1, ()=>{
    fetchData(2, ()=>{
        fetchData(3, ()=>{
            fetchData(4, ()=>{
                fetchData(5)
            })
        })
    })
});

// Promises: This is used in js to get ri from the callback hell being created.
// Thus it comes with a new Promise and its function has basically two parameters which stand for resolve or reject.
// thus this promise contains three states:
// (1) pending: which menas that the proces is still in process
// (2) resolve: which means that the process is completed and thus printed.
// (3) reject: which menas that the process was fulfileed but due to some functionality there was an error being thrown.  
let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Hi i am a progammer");
        reject("tere jaise nalle se nhi ho paayega ja coding chod jhadu laga!");
    }, 10000)
})


function getbase(getId, getIdnext){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Data", getId);
            resolve("success")
            if(getIdnext)
                {
                    getIdnext();
                }
        }, 12000);
    })
}


// using the promise chain

function asynfunc(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("This is the data from the database!");
            resolve("Success");
        }, 20000)
    })
}

function asynfunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("This is data from another database!");
            resolve("Success another time, Congrats!");
        }, 23000)
    })
}

setTimeout(()=>{
    console.log("Your request is being processed");
}, 16000)

setTimeout(()=>{
    console.log("Fetching data from the database....")
}, 19000)
let result=asynfunc();
result.then((res)=>{
    console.log(res);
    setTimeout(() => {
        console.log("Getting your second request to be processed:)");      
    }, 21000);
    setTimeout(()=>{
        console.log("Fetching data from the databse....");
    }, 22000)
    let result2=asynfunc2();
    result2.then((res2)=>{
        console.log(res2);
    })
})

// Asyn Await: this type of programing is basically used for making the asynchronus progaming more esaily
//Asyn: its a function which will return a promise.
// Await : written with async function that basically pauses the aync function unitl the promises are settled in the surroundings
function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);
        }, 3000)
    })
}

async function getapi(){
    await api();
    await api();
    await api();
}

// IIFE: immediately invoked function expression
