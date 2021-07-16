//64. Дано натуральное число n (n > 99). Определить число сотен в нем.

const quantityOfHundreds = (n) => {

    if (typeof n === 'number' && n > 99 && !isNaN(n)) {
        const result = Math.floor(n / 100);

        console.log(result);
    } else {
        console.log('Please input correct value, number from 100 to "Number.MAX_SAFE_INTEGER"');
    }

}
quantityOfHundreds(3115);
quantityOfHundreds(2);
quantityOfHundreds(Number.MAX_SAFE_INTEGER);
quantityOfHundreds('null');
