console.log('Person1 : shows ticket');
console.log('Person2 : shows ticket');

const promiseWifeBringingticket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket')

    }, 3000)
})

const getPopcorn = promiseWifeBringingticket.then((t) => {
    console.log('wife : i have tickets')
    console.log('husband we should go in');
    console.log('wife : no i m hungry');

    return new Promise((resolve, reject) => resolve(`${t} popcorn`))

});

const getButter = getPopcorn.then((t) => {
    console.log('husband :  i got some popCorn');
    console.log('husband : we should go in');
    console.log('wife : I need butter on popcorn');
    console.log('husband : anything else darling ');
    console.log('wife : cold drink');
   

    return new Promise((resolve, reject) => resolve(`${t} butter`))

});

const getColdDrink = getButter.then((t)=>{
    console.log(`husband :  i got some colddrink`);
    console.log('husband : anythig else darling ');
    console.log('wife : lets go we are getting late');
    console.log('thanks for reminder')

    return new Promise ((resolve , reject)=>resolve(`${t} coldrink`));
})



getColdDrink.then((t)=>console.log(t));


console.log('Person4 : shows ticket');
console.log('Person5 : shows ticket');
