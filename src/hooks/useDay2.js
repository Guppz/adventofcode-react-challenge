import { useState } from "react";
import realData from '../data/day-2-data.json'


export const useDay2 = () => {
    // Example 8
    //2683
    //49710

    const maxCount = {
        red: 12,
        green: 13,
        blue: 14
    }

    const getDay2Part1 = () => {
        const gameTotal = realData.data.map((line) => {
            return line.split(": ")[1].split("; ").map((game) => {
                const gamePulls = game.split(", ")
                return gamePulls.every((gamePull) => {
                    const [count, color] = gamePull.split(" ")
                    return maxCount[color] >= Number(count)
                })
            }).every((play) => play)
        }).reduce((sum, game, i) => {
            return game ? sum + (i + 1) : sum;
        }, 0)

        console.log("Day 2 Part 1: "+gameTotal)

    };

    const getDay2 = () => {
        const gameTotal = realData.data.map((line) => {
            const maxCountTotal = {
                red: 0,
                green: 0,
                blue: 0
            }
            line.split(": ")[1].split("; ").forEach((game) => {
                const gamePulls = game.split(", ")
                return gamePulls.forEach((gamePull) => {
                    const [count, color] = gamePull.split(" ")
                    if (maxCountTotal[color] < Number(count)) {
                        maxCountTotal[color] = Number(count)
                    }
                })
            })
            return maxCountTotal.red * maxCountTotal.green * maxCountTotal.blue
        }).reduce((sum, game) => sum + game);

        console.log("Day 2 Part 2: "+gameTotal)
        console.log("*******************************")
    };



    return { getDay2Part1 , getDay2 }
};