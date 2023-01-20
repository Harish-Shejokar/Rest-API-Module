
// ans -> To avoid callbacks hell situation promises are introduced for eg ->
//     let we want to buy a car and we took 5 days for deciding which car we should buy

function buyCar(cb1, cb2, cb3, cb4) {
    setTimeout(() => {
        console.log('buy a car');
        cb1(cb2, cb3, cb4)
    }, 5000);
}

// now we want to go to trip, so we took 2 days to decide which place is good for trip 

function goToTrip(cb2, cb3, cb4) {
    setTimeout(() => {
        console.log('we are going to delhi');
        cb2(cb3, cb4)
    }, 2000);
}


// now it takes 1day to reach to delhi
function reachToDelhi(cb3, cb4) {
    setTimeout(() => {
        console.log('took 1 day to reach to delhi');
        cb3(cb4)
    }, 2000);
}

// we cant saw redfort, india gate, president house and so many places to delhi
function redfort(cb4) {
    setTimeout(() => {
    console.log('we are at redfort');
    cb4()
}, 1000);
}
function indiaGate() {
    setTimeout(() => {
    console.log('we are at InidaGate');
}, 1000);
}


// buyCar(goToTrip, reachToDelhi, redfort, indiaGate);


// this is nothing but a callbacks hell situation we have to pass all
// function refrence to 1st funtion and then call cb1 and again passing funtion cb2 to cb4, imagine if we forgot to mention any funtion refrece then code will not work according to sequence, we have to be very aware while using callbacks.thats why promises are Introduced 

// same above funtionalities but by Promises ->


function buyCar() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('buy a car');
        }, 5000);
    });
}


function goToTrip() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('we are going to delhi')
        }, 2000);

    })
}

function reachToDelhi() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('took 1 day to reach to delhi')
        }, 1000);
    })

}

function redfort() {
    return new Promise((res, rej) => res('we are at redfort'));
}

function indiaGate() {
    return new Promise((res, rej) => res('we are at india gate'));
}


// In case of promise we dont have to pass callback function as agrument we just have to pass parameter in .then(parm) and we can also handle the error if our promise get rejected .

// buyCar().then((msg1) => {
//     console.log(msg1);
//     goToTrip().then((msg2) => {
//         console.log(msg2);
//         reachToDelhi().then((msg3)=>{
//             console.log(msg3);
//             redfort().then((msg4)=>{
//                 console.log(msg4);
//                 indiaGate().then((msg5)=>{
//                     console.log(msg5)


//                 }).catch(err =>console.log(msg));
//             }).catch(err =>console.log(msg));
//         }).catch(err =>console.log(msg));
//     }).catch(err =>console.log(msg));

// }).catch(err =>console.log(msg));


// but this is also very confuse looking syntax so thats why async-await are introduced where code also looked very simpler and we can also handle error by using try catch 

// * we can only  use await in async function only.
// and async-await are only work with only promises 

async function fun(){
    try{
        const msg1 = await buyCar();
        console.log(msg1);

        const msg2 = await goToTrip();
        console.log(msg2);

        const msg3 = await reachToDelhi();
        console.log(msg3);

        const msg4 = await redfort();
        console.log(msg4);

        const msg5 = await indiaGate();
        console.log(msg5);

    }catch(err){
        console(err);
    }
}
fun();

// by using this async - await a very formal looking code we get and which very easy to understand as well