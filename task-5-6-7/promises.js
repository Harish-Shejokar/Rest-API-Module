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
                let time = new Date().getHours() +":"+ new Date().getMinutes() + ":" + new Date().getSeconds();
         
                posts.push({ ...post, createdAT: new Date().getTime() });
                resolve(time);
            }
            else {
                reject('something went wront ');
            }

        }, 1000);

    });
}

const refrence = () => {

    getPosts();
    // deletepost().then(() => {
    //     getPosts();
    //     deletepost().then(() => {
    //         getPosts();
    //         deletepost().then(() => {
    //             getPosts();
    //             deletepost().then(() => {
    //                 getPosts();
    //             //     // deletepost().then(getPosts).catch(err => console.log(err))

    //             }).catch(err => console.log(err))
    //         }).catch(err => console.log(err))
    //     }).catch(err => console.log(err))
    // })
    //     .catch(err => console.log(err));

}



createPost({ title: 'post 3rd', body: 'this is post 3rd' })
    .then(refrence)
    .catch(err => console.log(err))



const deletepost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let greenSignal = (posts.length > 0);
            // console.log(posts.length)
            if (greenSignal) {
                
                posts.pop()
                resolve(posts);
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
                resolve(post);
            }
            else
                reject('error')
        }, 1000)
    });
}

// create4thPost({ title: 'post 4th', body: 'this is post 4' });











const User = {
    name : 'harry' , lastUpdatedAt : new Date().getHours() +":"+ new Date().getMinutes() + ":" + new Date().getSeconds()
}


let updateLastUserActivityTime = ()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
                let someCondition = false;
                let temp = User.lastUpdatedAt;
                if(!someCondition)
                    resolve('user activity time '+temp);
                else
                    reject('something went wrong');

        }, 1000)
     }
    )
}

Promise.all([ create4thPost({ title: 'post 4th', body: 'this is post 4' })
,updateLastUserActivityTime()])

.then(([first , second]) =>{ 

    console.log(first)
    console.log(second);

    
    deletepost().then(data=>{
        console.log(data);
    })

})
.catch(err=> console.log(err));



// console.log(User);






















// Promise.all     ============>

const Promise1 = Promise.resolve('hellow world');
const Promise2 = 10;
const Promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'good bye')
);


// Promise.all([Promise1, Promise2, Promise3]).then((values)=> console.log(values));






// practice on promise.all
const tOut = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Completed in ${t}`)
      }, t)
    })
  }

const timing = ()=>{
    return new Promise ((resolve, reject)=>{
        let time = new Date().getTime();
        resolve(time);
    })
}

const year = ()=>{
    return new Promise ((resolve, reject)=>{
        let time = new Date().getFullYear();
        resolve(time);
    })
}


  // Resolving a normal promise
//   tOut(1000).then(result => console.log(result+' '))
  // Completed in 1000
   
  // Promise.all
//   Promise.all([tOut(1000), year(), tOut(2000) , timing()]).then(result => console.log(result))
  










/*
Why on Earth do we need promise.all ?
let there are 2 promises both are independent of each other and let 1st
promise take 2 second and second one take 4 second , so total 6 second 
to execute both promises , 
As both are independent of each other we can execute simultaneously
together by use of Promise.all so by 4 second both get execute . 
By use of Promise.all if one of them get rejected then none of then 
execute , 
so it is compulsory to both get resolve. */
