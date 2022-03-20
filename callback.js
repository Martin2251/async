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

function createPost(post, callback) {
setTimeout(() => {
    posts.push(post);
    callback();
}, 2000);
}



createPost({title: "Post Three", body: "This is post three"}, getPosts);