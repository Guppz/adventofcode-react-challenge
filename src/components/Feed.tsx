import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { useEffect, useState } from 'react';
import { codeDay1, codeDay1p2 } from '../codeSnippets/day1.js'
import { day2Snippet, day2p2Snippet } from '../codeSnippets/day2.js';
import { day3Snippet, day3p2Snippet } from '../codeSnippets/day3.js';

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <div id='day1'>
                <Card sx={{ mb: 5 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="60"
                            image="https://cdn.discordapp.com/attachments/595285584138731565/1192245174416453762/image.png?ex=65a85fd8&is=6595ead8&hm=f1436be9053160fd00b05e05e6a2d4cd882bad9d5634c9350f818cc65f4cd13a&"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 1: Trebuchet?! Part 1 ---
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

                                The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.
                                For example:
                            </Typography>
                            <Box p={2}>
                                <ul>
                                    <li>1abc2</li>
                                    <li>pqr3stu8vwx</li>
                                    <li>a1b2c3d4e5f</li>
                                    <li>treb7uchet</li>
                                </ul>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.
                                Consider your entire calibration document. What is the sum of all of the calibration values?
                                Your puzzle answer was 55029
                            </Typography>
                            <br />
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 1 Part 1: Solucion
                            </Typography>


                            <SyntaxHighlighter language="javascript" style={dracula}>
                                {codeDay1}
                            </SyntaxHighlighter>
                            <Typography variant="body2" color="text.secondary">
                                I just made 2 regex one to find the first number and another to find the second one and match them
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ mb: 5 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="60"
                            image="https://cdn.discordapp.com/attachments/595285584138731565/1192245174416453762/image.png?ex=65a85fd8&is=6595ead8&hm=f1436be9053160fd00b05e05e6a2d4cd882bad9d5634c9350f818cc65f4cd13a&"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 1: Trebuchet?! Part 2 ---
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".
                                Equipped with this new information, you now need to find the real first and last digit on each line. For example:
                            </Typography>
                            <Box p={2}>
                                    <ul>
                                        <li>two1nine</li>
                                        <li>eightwothree</li>
                                        <li>abcone2threexyz</li>
                                        <li>xtwone3four</li>
                                        <li>4nineeightseven2</li>
                                        <li>zoneight234</li>
                                        <li>7pqrstsixteen</li>
                                    </ul>
                                </Box>
                            <Typography variant="body2" color="text.secondary">
                                In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.
                                What is the sum of all of the calibration values?
                                With  my data set it was: 55686.
                                ps: your can find the code in hooks userData.tsx
                            </Typography>
                            <br />
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 1 Part 2: Solucion
                            </Typography>


                            <SyntaxHighlighter language="javascript" style={dracula}>
                                {codeDay1p2}
                            </SyntaxHighlighter>
                            <Typography variant="body2" color="text.secondary">
                                it some whwat similar to my firt solucion but this time iterate  each character of each words looking for writing words and maching them
                                in the end the code was : 55686
                                ps: your can find the code in hooks userData.tsx
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <Divider sx={{ mb: 5 }}>Day 2</Divider>
            <div id='day2'>
                <Card sx={{ mb: 5 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="60"
                            image="https://cdn.discordapp.com/attachments/595285584138731565/1192245174416453762/image.png?ex=65a85fd8&is=6595ead8&hm=f1436be9053160fd00b05e05e6a2d4cd882bad9d5634c9350f818cc65f4cd13a&"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 2 Part 1 ---
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. Each time you play this game, he will hide a secret number of cubes of each color in the bag, and your goal is to figure out information about the number of cubes.
                                To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes, show them to you, and then put them back in the bag. He'll do this a few times per game.
                                You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

                                For example, the record of a few games might look like this:
                            </Typography>
                            <Box p={2}>
                                    <ul>
                                        <li>Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green</li>
                                        <li>Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue</li>
                                        <li>Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red</li>
                                        <li>Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red</li>
                                        <li>Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green</li>
                                    </ul>
                                </Box>
                            <Typography variant="body2" color="text.secondary">
                                In the example above, games 1, 2, and 5 would have been possible if the bag
                                had been loaded with that configuration. However,
                                game 3 would have been impossible because at one point
                                the Elf showed you 20 red cubes at once; similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get 8.
                                With  my data set it was: 2683.
                                ps: your can find the code in hooks useday2.tsx
                            </Typography>
                            <br />
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 2 Part 1: Solucion
                            </Typography>


                            <SyntaxHighlighter language="javascript" style={dracula}>
                                {day2Snippet}
                            </SyntaxHighlighter>
                            <Typography variant="body2" color="text.secondary">
                                I just splited the arrays by games example 3 blues, 4 red; and compred with my table what
                                was the max number of that color and it would be posible to play the game and made my own array of witch game was posible with a boolean
                                in the end the code was for my solucion : 2683
                                ps: your can find the code in hooks useday2.tsx
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ mb: 5 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="60"
                            image="https://cdn.discordapp.com/attachments/595285584138731565/1192245174416453762/image.png?ex=65a85fd8&is=6595ead8&hm=f1436be9053160fd00b05e05e6a2d4cd882bad9d5634c9350f818cc65f4cd13a&"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 2 Part 2 ---
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                As you continue your walk, the Elf poses a second question: in each game you played, what is the fewest number of cubes of each color that could have been in the bag to make the game possible?

                                Again consider the example games from earlier:
                            </Typography>
                            <Box p={2}>
                                    <ul>
                                        <li>Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green</li>
                                        <li>Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue</li>
                                        <li>Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red</li>
                                        <li>Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red</li>
                                        <li>Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green</li>
                                    </ul>
                                </Box>
                            <Typography variant="body2" color="text.secondary">
                                The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together.
                                The power of the minimum set of cubes in game 1 is 48. In games 2-5 it was 12, 1560, 630, and 36, respectively.
                                Adding up these five powers produces the sum 2286.
                                With  my data set it was: 49710.
                                ps: your can find the code in hooks useday2.tsx
                            </Typography>
                            <br />
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 2 Part 2: Solucion
                            </Typography>


                            <SyntaxHighlighter language="javascript" style={dracula}>
                                {day2p2Snippet}
                            </SyntaxHighlighter>
                            <Typography variant="body2" color="text.secondary">
                                the solution was more simple than the first parth i just did the same separated each game and looped ech one for the max of color you needed for each game when that finxed i just multiplication of all of the color to get the code
                                in the end the code was for my solucion : 49710
                                ps: your can find the code in hooks useday2.tsx
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </div>

            <Divider sx={{ mb: 5 }} >Day 3</Divider>

            <div id='day3'>
                <Card sx={{ mb: 5 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="60"
                            image="https://cdn.discordapp.com/attachments/595285584138731565/1192245174416453762/image.png?ex=65a85fd8&is=6595ead8&hm=f1436be9053160fd00b05e05e6a2d4cd882bad9d5634c9350f818cc65f4cd13a&"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 3 Part 1 ---
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The engineer explains that an engine part seems to be missing from the engine, but nobody can figure out which one. If you can add up all the part numbers in the engine schematic, it should be easy to work out which part is missing.
                                The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)
                                Here is an example engine schematic

                                In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a part number; their sum is 4361.
                                Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?

                                With  my data set it was: 557705.
                                ps: your can find the code in hooks useday3.tsx
                            </Typography>
                            <br />
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 3 Part 1: Solucion
                            </Typography>


                            <SyntaxHighlighter language="javascript" style={dracula}>
                                {day3Snippet}
                            </SyntaxHighlighter>
                            <Typography variant="body2" color="text.secondary">
                                For the first i just copy every especiay character i fund in the arrays after i found everthing i started looping 2 ways to se if a number and a special character was fund,
                                in the end the code was for my solucion : 557705
                                ps: your can find the code in hooks useday3.tsx
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ mb: 5 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="60"
                            image="https://cdn.discordapp.com/attachments/595285584138731565/1192245174416453762/image.png?ex=65a85fd8&is=6595ead8&hm=f1436be9053160fd00b05e05e6a2d4cd882bad9d5634c9350f818cc65f4cd13a&"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 3 Part 2 ---
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The missing part wasn't the only issue - one of the gears in the engine is wrong. A gear is any * symbol that is adjacent to exactly two part numbers. Its gear ratio is the result of multiplying those two numbers together.
                                This time, you need to find the gear ratio of every gear and add them all up so that the engineer can figure out which gear needs to be replaced.
                                Consider the same engine schematic again
                                What is the sum of all of the gear ratios in your engine schematic?

                                With  my data set it was: 84266818.
                                ps: your can find the code in hooks useday3.tsx
                            </Typography>
                            <br />
                            <Typography gutterBottom variant="h5" component="div">
                                --- Day 3 Part 2: Solucion
                            </Typography>


                            <SyntaxHighlighter language="javascript" style={dracula}>
                                {day3p2Snippet}
                            </SyntaxHighlighter>
                            <Typography variant="body2" color="text.secondary">
                                This solucion is similar as part one but just need a litle more validacion to know if a number is near a gear
                                in the end the code was for my solucion : 84266818
                                ps: your can find the code in hooks useday3.tsx
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>





        </Box>
    );
}

export default Feed;