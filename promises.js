// minic blog post on server

const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"},
];

// create a function to get posts 
// use settimeout sets a callback function and a certain amout of time 
function getPosts(){
    setTimeout(() =>{
        let output = "";
        // post we can call this anything
        posts.forEach((post, index) =>{
output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML= output;
    }, 1000);
}
// we can call callback anything but this is common pratice 

function createPost(post) {
    //promise takes in a callback and takes in two parameters reslove when it goes right and reject when it doesnt 
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            posts.push(post);


        const error = true;

        if (!error){
            resolve();
        } else {
            reject("Error: Something went wrong");
        }
        }, 2000);  
    });
}

//createPost({title: "Post Three", body: "This is post three"})
//.then(getPosts)
//.catch(err => console.log(err));


// Async/ Await 

// async function init (){
//    await createPost({title: "Post Three", body: "This is post three"})
//    getPosts();
// }

// init();

//Async await with fetch

//clean way of doing fecth call

async function fetchUsers(){
   const res = await fetch("https://jsonplaceholder.typicode.com/users");

   const data = await res.json();

   console.log(data);
}

fetchUsers();


// //promise.all

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => 
// setTimeout(resolve, 2000, "Goodbye")
// );

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(((values) => console.log(values)))