// async-await=>>>>>>>>>

// async function always return promise

console.log('Person1 : shows ticket');
console.log('Person2 : shows ticket');

const preMovie = async () => {

    const promiseWifeBringingticket = new Promise((resolve, reject) => {
        setTimeout(() => reject('tickets'), 3000);
    })

    // const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    // const getCandy = new Promise((resolve, reject) => resolve(`candy`));

    // const getColdDrink = new Promise((resolve , reject) => resolve('coldDrink'));


    // Promise all by async await
    // let ticket = await promiseWifeBringingticket;

    // let [popCorn , candy , coldDrink] = await Promise.all([getPopcorn, getCandy, getColdDrink])

    // console.log(`${popCorn} ${candy} ${coldDrink}`);



    // this is how to handle error in promises
    let ticket;
    try {
        ticket = await promiseWifeBringingticket;
    } catch (e) {
        ticket = 'said face';
    }

    return ticket;

}

preMovie().then((m) => console.log(`Person3 : show ${m}`));


console.log('Person4 : shows ticket');
console.log('Person5 : shows ticket');




