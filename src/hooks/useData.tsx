import { useState } from "react";
import realData from '../data/real-data.json'


export const useData = () => {

    const NUM_WORDS = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    const NUM_WORD_ENTRIES = Object.entries(NUM_WORDS);
    
    const getDataDay1part1 = (): void => {

        const calibrationValues: number[] = [];
        const lines = realData.data
        lines.forEach((line) => {
            const firstDigitMatch = line.match(/\d/); // Match the first digit
            const lastDigitMatch = line.match(/\d(?=\D*$)/); // Match the last digit
            
            if (firstDigitMatch && lastDigitMatch) {
                const firstDigit = parseInt(firstDigitMatch[0]);
                const lastDigit = parseInt(lastDigitMatch[0]);
                const calibrationValue = parseInt(`${firstDigit}${lastDigit}`);
                calibrationValues.push(calibrationValue);
            }
        });

        const initialValue = 0;
        const sumWithInitial = calibrationValues.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
          );
        console.log("Day Part 1: "+sumWithInitial)
    };

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
            return parseInt(`${firstNumber}${lastNumber}`, 10);
        });
        let sum = 0;
        for (let num of numbersInLines) {
            sum += num;
        }
        console.log("Day 1 part 2: " + sum)
        console.log("*******************************")
    };


    const strToNum=(str:any): string | number =>{
        for (let [word, num] of NUM_WORD_ENTRIES) {
            if (str.startsWith(word)) {
                return num;
            }
        }
        return '';
    }



    return {  getData , getDataDay1part1 }
};