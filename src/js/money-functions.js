formatCurrency = (amount) => {
    if (amount >= 0) {
        return `$${amount.toFixed(2)}`;
    } else {
        return `-$${(-amount).toFixed(2)}`;
    }
}

getCoins = (cents) => {
    const quarters = Math.floor(cents / 25);
    const afterQuarters = cents % 25;

    const dimes = Math.floor(afterQuarters / 10);
    const afterDimes = afterQuarters % 10;

    const nickels = Math.floor(afterDimes / 5);
    const afterNickels = afterDimes % 5;

    const pennies = Math.floor(afterNickels / 1);
    // const afterPennies = afterNickels % 1;

    return {
        quarters: quarters,
        dimes: dimes,
        nickels: nickels,
        pennies: pennies,
    }
    


}

module.exports = {
    formatCurrency,
    getCoins,
}