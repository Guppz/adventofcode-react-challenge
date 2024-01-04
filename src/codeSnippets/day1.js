export const codeDay1 = `
const getDataDay1part1 = (): void => {

    const calibrationValues: number[] = [];
    const lines = realData.data
    lines.forEach((line) => {
        const firstDigitMatch = line.match(/\d/); // Match the first digit
        const lastDigitMatch = line.match(/\d(?=\D*$)/); // Match the last digit
        
        if (firstDigitMatch && lastDigitMatch) {
            const firstDigit = parseInt(firstDigitMatch[0]);
            const lastDigit = parseInt(lastDigitMatch[0]);
            const calibrationValue = parseInt({ firstDigit }{ lastDigit });
            calibrationValues.push(calibrationValue);
        }
    });
    setNumber(calibrationValues)
};

// Print out put whit my data set 55029
`

export const codeDay1p2 = `
const getData = (): void => {
    const numbersInLines = realData.data.map((line) => {
        const allNumbers = line
            .split('')
            .map((char, i) => {
                const restOfLineFromChar = line.slice(i);
                return /\d/.test(char) ? char : strToNum(restOfLineFromChar);
            })
            .filter(Boolean);

        const firstNumber = allNumbers[0];
        const lastNumber = allNumbers[allNumbers.length - 1];
        return parseInt({firstNumber}{lastNumber}, 10);
    });
    let sum = 0;
    for (let num of numbersInLines) {
        sum += num;
    }
};


const strToNum=(str:any): string | number =>{
    for (let [word, num] of NUM_WORD_ENTRIES) {
        if (str.startsWith(word)) {
            return num;
        }
    }
    return '';
}
`

