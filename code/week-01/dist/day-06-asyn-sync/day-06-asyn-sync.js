"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function fetchDataAsync() {
    console.time('Async/Await Response Time');
    try {
        const response = await axios_1.default.get('https://jsonplaceholder.typicode.com/users');
        console.log('Async/Await Response:', response.data);
    }
    catch (error) {
        console.error('Error fetching data with async/await:', error);
    }
    finally {
        console.timeEnd('Async/Await Response Time');
    }
}
function fetchDataPromise() {
    console.time('Promise Response Time');
    axios_1.default.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        console.log('Promise Response:', response.data);
    })
        .catch(error => {
        console.error('Error fetching data with Promises:', error);
    })
        .finally(() => {
        console.timeEnd('Promise Response Time');
    });
}
fetchDataAsync();
fetchDataPromise();
//# sourceMappingURL=day-06-asyn-sync.js.map