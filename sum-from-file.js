import { Service } from "./service.js";

Service.sumFromFile("data/nums.txt")
    .then(sum => {
        console.log(`The sum is: ${sum}`);
    })
    .catch(err => {
        console.error("Error reading file:", err);
    });