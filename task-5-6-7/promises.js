const posts = [

    { title: "Post one", body: "This is post one", createdAT: new Date().getTime() },

    { title: "Post two", body: "This is post two", createdAT: new Date().getTime() }

];



let intervalId;

function getPosts() {


    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((post) => {

            output += `<li>${post.title} - last Updated ${(new Date().getTime() - post.createdAT) / 1000}  seconds ago</li>`
        })
        document.body.innerHTML = output;

    }, 1000)





    // console.log('hey')

}



function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let someCondition = false;
            if (!someCondition) {
                posts.push({ ...post, createdAT: new Date().getTime() });
                resolve();
            }
            else {
                reject('something went wront ');
            }

        }, 1000);

    });
}

const refrence = () => {

    getPosts();
    deletepost().then(() => {
        getPosts();
        deletepost().then(() => {
            getPosts();
            deletepost().then(() => {
                getPosts();
                deletepost().then(() => {
                    getPosts();
                    deletepost().then(getPosts).catch(err => console.log(err))

                }).catch(err => console.log(err))
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    })
        .catch(err => console.log(err));

}



createPost({ title: 'post 3rd', body: 'this is post 3rd' })
    .then(refrence)
    .catch(err => console.log(err))



const deletepost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let greenSignal = (posts.length > 0);
            console.log(posts.length)
            if (greenSignal) {
                posts.pop();
                resolve();
            }
            else {
                reject('Array is empty');
            }
        }, 1000)

    });
}



const create4thPost = (post)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                posts.push({ ...post, createdAT: new Date().getTime() });
                resolve();
            }
            else
                reject()
        }, 1000)
    });
}

create4thPost({ title: 'post 4th', body: 'this is post 4' });









// Promise.all     ============>

const Promise1 = Promise.resolve('hellow world');
const Promise2 = 10;
const Promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'good bye')
);


// Promise.all([Promise1, Promise2, Promise3]).then((values)=> console.log(values));


const User = {
    name : 'harry' , lastUpdatedAt : new Date()
}


let updateLastUserActivityTime = ()=>{
   
}



