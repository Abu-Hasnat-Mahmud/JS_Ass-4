// problem 1 ( seer to mon)

function seerToMon(seer) {

    if (seer < 0 || typeof (seer) != 'number') // check  validation  different type input and negative value
    {
        return "Your input parameter not valid";
    }

    const mon = seer / 40;
    return mon; // return mon
}

const seer = 80;
const totalMon = seerToMon(seer); //  funcnton call
console.log(totalMon);

// problem 2 (total sales)

function totalSales(salesShirt, salesPant, salesShoes) {

    // check  validation  different type input
    if (typeof (salesShirt) != 'number' || typeof (salesPant) != 'number' || typeof (salesShoes) != 'number') {
        return "Your input parameter not valid";
    }

    if (salesShirt < 0 || salesPant < 0 || salesShoes < 0) // check negative value validation 
    {
        return "Your input parameter not valid";
    }

    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoesPrice = 500;

    const totalSales = salesShirt * perShirtPrice + salesPant * perPantPrice + salesShoes * perShoesPrice;
    return totalSales;
}

const ttlSales = totalSales(4, 2, 1); // function call
console.log(ttlSales);


// problem 3 (delivery cost)

function deliveryCost(totalTshirt) {

    //check negative value validation 
    // check  validation  different type input
    if (totalTshirt < 0 || typeof (totalTshirt) != 'number') {
        return "Your input parameter not valid";
    }

    const first100Per = 100;
    const second100Per = 80;
    const over200per = 50;
    let totalDeliveryCost = 0;

    if (totalTshirt <= 100) {
        totalDeliveryCost = totalTshirt * first100Per;
    } else if (totalTshirt <= 200) {
        const first100 = 100 * first100Per;
        const restOfTShirt = totalTshirt - 100;
        totalDeliveryCost = first100 + restOfTShirt * second100Per;
    } else if (totalTshirt > 200) {
        const first100 = 100 * first100Per;
        const second200 = 100 * second100Per;
        const restOfTShirt = totalTshirt - 200;
        totalDeliveryCost = first100 + second200 + restOfTShirt * over200per;
    }

    return totalDeliveryCost;
}

const ttlDeliveryCost = deliveryCost(250); //  funcnton call
console.log(ttlDeliveryCost);


function perfectFriend(friends) {

    if (typeof (friends) != 'object') /// check validation 
    {
        return "Your input parameter not valid";
    }

    for (const friend of friends) {
        if (friend.length == 5) { // if friend name length 5 then return
            return friend;
        }
    }

    return "You have no perfect friend";
}

const myPerfectFrind = perfectFriend(['Aziz', 'Rafi', 'Rafiqa', 'Mashruf']); //  funcnton call

console.log(myPerfectFrind);