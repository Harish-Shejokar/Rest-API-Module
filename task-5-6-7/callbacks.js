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



            document.body.innerHTML = output;

        })

    }, 1000)

    // console.log('hey')

}

// getPosts();



function createPost(post, callback) {

    setTimeout(() => {

        posts.push({ ...post, createdAT: new Date().getTime() });

        callback();

    }, 9000);

}


createPost({ title: 'Post three', body: 'This is post third' }, getPosts);


function create4thPost(post, callback) {

    setTimeout(() => {

        posts.push({ ...post, createdAT: new Date().getTime() });
        callback();
    }, 2000)

}



create4thPost({ title: 'Post four', body: 'This is post four' }, getPosts);





function create5thPost(post, callback) {

    setTimeout(() => {

        posts.push({ ...post, createdAT: new Date().getTime() });



        callback();





    }, 4000)



}



create5thPost({ title: 'Post five', body: 'This is post five', createdAt: new Date().getTime() }, getPosts);