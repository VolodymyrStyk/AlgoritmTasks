// 68. Дано натуральное число n(n<=9999).
// в) Верно ли что все четыре цыфри различны?

const uniqueNumber = (n) => {
    if (typeof n === 'number' && n <= 9999 && n >= 1000 && !isNaN(n)) {
        const arr = n.toString().split("");
        let isUnique = true;

        arr.forEach(num => {
                const quantityEl = arr.filter(value => value === num).length;

                if (quantityEl >= 2) isUnique = false;
            }
        );
        console.log(isUnique);
    } else {
        console.log('Please input correct value, number from 1000 to 9999');
    }
}

uniqueNumber(1231);
uniqueNumber(1234);
uniqueNumber(22);
uniqueNumber(null);
uniqueNumber(NaN);
