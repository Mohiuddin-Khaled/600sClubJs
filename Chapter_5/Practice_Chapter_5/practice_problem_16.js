// if - else if - else condition

// You will get 5% discount on purchases over 3000 taka
// You will get 15% discount on purchases over 6000 taka

const amount = 4500;

if (amount > 6000) {
    const discount = amount / 100 * 15;
    const pay = amount - discount;
    console.log(pay);
}
else if (amount > 3000) {
    const discount = amount / 100 * 5;
    const pay = amount - discount;
    console.log(pay);
}
else {
    console.log(amount);
}
