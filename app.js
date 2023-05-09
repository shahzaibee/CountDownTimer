#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
async function startCountdown() {
    const { duration } = await inquirer.prompt([
        {
            type: 'input',
            name: 'duration',
            message: 'Enter the duration of the countdown in seconds:',
            validate: (value) => {
                const parsedValue = parseInt(value);
                if (isNaN(parsedValue)) {
                    return 'Please enter a valid number';
                }
                return true;
            },
        },
    ]);
    console.log(chalk.blue(`Starting countdown for ${duration} seconds...\n`));
    let remainingTime = parseInt(duration);
    const intervalId = setInterval(() => {
        remainingTime--;
        if (remainingTime <= 0) {
            clearInterval(intervalId);
            console.log(chalk.green('\nCountdown completed!\n'));
            return;
        }
        console.log(chalk.yellow(`Remaining time: ${remainingTime} seconds`));
    }, 1000);
}
startCountdown();
