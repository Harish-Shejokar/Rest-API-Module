// async-await=>>>>>>>>>

// async function always return promise

console.log('Person1 : shows ticket');
console.log('Person2 : shows ticket');

const preMovie = async () => {

    const promiseWifeBringingticket = new Promise((resolve, reject) => {
        setTimeout(() => resolve('tickets'), 3000);
    })

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const getButter = new Promise((resolve, reject) => resolve(`butter`));

    const getColdDrink = new Promise((resolve , reject) => resolve('coldDrink'));


    let ticket = await promiseWifeBringingticket;

    console.log(`wife : i have ${ticket}`)
    console.log('husband we should go in');
    console.log('wife : no i m hungry');

    let popCorn = await getPopcorn;
    console.log(`husband :  i got some ${popCorn}`);
    console.log('husband : we should go in');
    console.log('wife : I need butter on popcorn');


    let butter = await getButter;
    console.log(`husband :  i got some ${butter}`);
    console.log('husband : anythig else darling ');
    console.log('wife : cold drink');
    
    let coldDrink = await getColdDrink;
    console.log(`husband :  i got some ${coldDrink}`);
    console.log('husband : anythig else darling ');
    console.log('wife : lets go we are getting late');
    console.log('thanks for reminder')


   return  ticket; 

}

preMovie().then((m) => console.log(`Person3 : show ${m}`));


console.log('Person4 : shows ticket');
console.log('Person5 : shows ticket');



