// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
async function a(){
    try {
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("jkl");
                resolve()
            },2000)
            // reject("Err:Something went wrong.")
        })
        console.log("hi");
        
    } catch (error) {
        console.log(error);
    }
}
a()
// or 
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Loging after 2sec.");
        resolve()
    },2000)
}).then(()=>{
    console.log("Resolved 1");
})
// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error: test error")
    },2000)
}).then(()=>{
    console.log("resolved 2");
}).catch((err)=>{
    console.log("Reject 2");
})
// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function fetchData(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched data from ${url}`);
            resolve(`Data from ${url}`);
        }, delay);
    });
}

fetchData('server1.com', 1000)
    .then((data1) => {
        console.log(data1);
        return fetchData('server2.com', 2000);
    })
    .then((data2) => {
        console.log(data2);
        return fetchData('server3.com', 1500);
    })
    .then((data3) => {
        console.log(data3);
        console.log('All data fetched in sequence.');
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function a2(){
    try {
        let data = await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("jkl");
                resolve({data:"Guyz! resolved. "})
            },2000)
        })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
a();
// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function b(){
    try {
        let data2 = await new Promise((resolve,reject)=>{
            reject("Error : Something went wrong.")
        })
        console.log(data2);
    } catch (error) {
        console.log(error);
    }
}
b();
// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
new Promise((resolve,reject)=>{
    let res = fetch('https://api.restful-api.dev/objects/7')
    resolve(res)
}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function apiCall(){
    let response = await fetch('https://api.restful-api.dev/objects')
    console.log(response);
}
apiCall();
// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise One resolved");
    }, 1000);
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Two resolved");
    }, 2000);
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Three resolved");
    }, 3000);
});

async function waitForAllPromises() {
    try {
        const results = await Promise.all([promiseOne, promiseTwo, promiseThree]);
        console.log(results); 
    } catch (error) {
        console.error("One of the promises rejected:", error);
    }
}
waitForAllPromises();
// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('two');
    }, 100);
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
});

// **promise.race -> Waits for the first promise to settle (resolve or reject).Returns a single promise that resolves or rejects as soon as one of the input promises resolves or rejects.