import fs from 'fs';

export const Service = {
    sumFromFile
}

function sumFromFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            const numbers = data.split('\n').map(line => parseFloat(line)).filter(num => !isNaN(num));
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            resolve(sum);
        }); 
    });
}