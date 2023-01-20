// console.log('Person1 : shows ticket');
// console.log('Person2 : shows ticket');

// const promiseWifeBringingticket = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket')

//     }, 3000)
// })

// const getPopcorn = promiseWifeBringingticket.then((t) => {
//     console.log('wife : i have tickets')
//     console.log('husband we should go in');
//     console.log('wife : no i m hungry');

//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))

// });

// const getButter = getPopcorn.then((t) => {
//     console.log('husband :  i got some popCorn');
//     console.log('husband : we should go in');
//     console.log('wife : I need butter on popcorn');
//     console.log('husband : anything else darling ');
//     console.log('wife : cold drink');


//     return new Promise((resolve, reject) => resolve(`${t} butter`))

// });

// const getColdDrink = getButter.then((t)=>{
//     console.log(`husband :  i got some colddrink`);
//     console.log('husband : anythig else darling ');
//     console.log('wife : lets go we are getting late');
//     console.log('thanks for reminder')

//     return new Promise ((resolve , reject)=>resolve(`${t} coldrink`));
// })



// getColdDrink.then((t)=>console.log(t));


// console.log('Person4 : shows ticket');
// console.log('Person5 : shows ticket');







// 4->>>>>>>>>>>

let posts = [
    { title: '1st post', createdAt: new Date().getTime() },

    { title: '2nd post', createdAt: new Date().getTime() }
]

let intervalId;
function getPost() {
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li style="list-style:none">${post.title} created At ${((new Date().getTime() - post.createdAt) / 1000)} seconds ago </li>`
        })

        document.body.innerHTML = output;

    }, 1000)
}

// getPost();



let createPost = async (post) => {


    const thirdpost = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() })

            resolve('post 3rd created');

        }, 1000)
    })

    
    let post3 = await thirdpost;

    return post3
}

let deletePost = async ()=>{
    const deletepost = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop();
                resolve('post deleted successfully')
            } else {
                reject('array is empty');
            }

        }, 3000);
    })

    let del = await deletepost;

    return del;

}





createPost({ title: 'post 3rd' })
    .then((data) => {
        getPost();
        console.log(data);

    })

deletePost().then((data)=>{
    console.log(data);
})
