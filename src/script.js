"use strict";

// TODO - write your code here.

// #1
const randomDamage = () => {
    // math.floor rounds whole number from floating integer, math.random multiplies 10 + 1 on the outside to return at least 1
    return Math.floor(Math.random() * 10)+1;
};

// #2
const chooseOption = (opt1, opt2) => {
    // math.random returns 0 or 1 -- math.round just rounds (does same thing as floor)
    const randomNum = Math.round(Math.random()); 
    // we want to return this random num above (0 or 1), if random num === 0 we return opt1 -- if not it will default to opt2
    // 
    return randomNum === 0 ? opt1 : opt2;
};

// you can assign your options here -- these inputs will show as 0 = heads, 1 = tails -- you can put any text in here to output these values
// console.log(chooseOption("heads", "tails" ))


// #3

const attackPlayer = function(health){
    const newHealth = health - randomDamage();
    return newHealth;
};

const logHealth = (player, health) => {
    console.log(`${player} health:  ${health}`)
};

// logHealth('kyle', 99999);

const logDeath = (winner, loser) => {
    console.log(`${winner} defeats ${loser}`);
};

// logDeath("Kyle", "Sean");


const isDead = (health) => health <= 0;

// console.log(isDead(0));


function fight(player1, player2, player1Health, player2Health){
    while(true){
        const attacker = chooseOption(player1, player2);
        if (attacker === player1){
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if(isDead(player2Health) === true){
                logDeath(player1, player2);
                break;
            }

        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if(isDead(player1Health) === true){
                logDeath(player2, player1);
                break;
            }

            }
        }
    }

fight('Kyle', 'Sean', 100, 100);
