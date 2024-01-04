export const day3Snippet = ` const part1 = (inputs) => {
    for (let x of inputs) {
        for (let y of x) {
            if (isNaN(y) && y != "." && !special_chars.includes(y)) {
                special_chars.push(y);
            }
        }
    }
    for (var y = 0; y < inputs.length; y++) {
        let temp = "";
        let eligible = false;
        for (var x = 0; x <= inputs[y].length; x++) {
            if (!isNaN(inputs[y][x])) {
                temp += inputs[y][x];
                if (!eligible) {
                    if (y != 0 && x != 0 && special_chars.includes(inputs[y - 1][x - 1])) eligible = true;
                    if (x != 0 && special_chars.includes(inputs[y][x - 1])) eligible = true;
                    if (y != 139 && x != 0 && special_chars.includes(inputs[y + 1][x - 1])) eligible = true;
                    if (y != 0 && special_chars.includes(inputs[y - 1][x])) eligible = true;
                    if (y != 139 && special_chars.includes(inputs[y + 1][x])) eligible = true;
                    if (y != 0 && x != 139 && special_chars.includes(inputs[y - 1][x + 1])) eligible = true;
                    if (x != 139 && special_chars.includes(inputs[y][x + 1])) eligible = true;
                    if (y != 139 && x != 139 && special_chars.includes(inputs[y + 1][x + 1])) eligible = true;
                }
            }
            if (isNaN(inputs[y][x]) && temp != "") {
                if (eligible) {
                    answer += Number(temp);
                    for (var i = 1; i <= temp.length; i++) pc_part2[y + "_" + (x - i)] = Number(temp);
                }
                temp = "";
                eligible = false;
            }
        }
    }
    return answer;
}`

export const day3p2Snippet = `       let good_stars = [];
for (var y = 0; y < inputs.length; y++) {
    for (var x = 0; x <= inputs[y].length; x++) {  
        let tl = false;
        let t = false;
        let tr = false;
        let bl = false;
        let b = false;
        let br = false;
        let i = 0;
        let arr = [];
        if (inputs[y][x] == "*") {
            if (x != 0 && !isNaN(inputs[y][x - 1])) arr.push('l');
            if (x != 139 && !isNaN(inputs[y][x + 1])) arr.push('r');
            if (y != 0 && x != 0 && !isNaN(inputs[y - 1][x - 1])) tl = true;
            if (y != 0 && !isNaN(inputs[y - 1][x])) t = true;
            if (y != 0 && x != 139 && !isNaN(inputs[y - 1][x + 1])) tr = true;
            if (tl && !t) arr.push("tl");
            if (t) arr.push("t");
            if (tr && !t) arr.push("tr");
            if (y != 139 && x != 0 && !isNaN(inputs[y + 1][x - 1])) bl = true;
            if (y != 139 && !isNaN(inputs[y + 1][x])) b = true;

            if (y != 139 && x != 139 && !isNaN(inputs[y + 1][x + 1])) br = true
            if (bl && !b) arr.push("bl");
            if (b) arr.push("b");
            if (br && !b) arr.push("br");
        }
        if (arr.length == 2) {
            good_stars.push([y, x, arr]);
        }
    }
}

good_stars.forEach(gs => {
    let local_answer = 1;
    gs[2].forEach(pos => {
        switch (pos) {
            case "l":
                local_answer *= pc_part2[(gs[0]) + "_" + (gs[1] - 1)];
                break;
            case "r":
                local_answer *= pc_part2[(gs[0]) + "_" + (gs[1] + 1)];
                break;
            case "tl":
                local_answer *= pc_part2[(gs[0] - 1) + "_" + (gs[1] - 1)];
                break;
            case "t":
                local_answer *= pc_part2[(gs[0] - 1) + "_" + (gs[1])];
                break;
            case "tr":
                local_answer *= pc_part2[(gs[0] - 1) + "_" + (gs[1] + 1)];
                break;
            case "bl":
                local_answer *= pc_part2[(gs[0] + 1) + "_" + (gs[1] - 1)];
                break;
            case "b":
                local_answer *= pc_part2[(gs[0] + 1) + "_" + (gs[1])];
                break;
            case "br":
                local_answer *= pc_part2[(gs[0] + 1) + "_" + (gs[1] + 1)];
                break;
        }
    });
    //add to answer
    answer_p2 += local_answer;
});
return answer_p2;
}`
