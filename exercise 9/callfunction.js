//Hey Kiddo
const bigKiddo = function (age) {

    if (age > 18) {
        return true;
    } else {
        return false;
    }
};

const bigMan = function (age) {

    if (age < 18) {
        return 'Hey Kiddo';
    } else (age > 18)
    return 'Hello There';
};

console.log(bigMan(bigKiddo(25)));


//Vat calculate 1

function gettax(bill, taxrate) {
    return bill * taxrate;
};

function totalBill(bill, taxrate) {
    return (bill + gettax(bill, taxrate))
};

console.log(totalBill(100, 0.21));

//vat calculate 2
const Paga = (bill, tax) => {
    const sum1 = bill / tax;
    const sum2 = bill - (bill / tax);

    return sum1 + sum2;
}

console.log(Paga(121, 1.21));