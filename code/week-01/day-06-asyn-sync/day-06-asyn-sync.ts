import axios from 'axios';

async function fetchDataAsync(): Promise<void> {
    console.time('Async/Await Response Time');
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('Async/Await Response:', response.data);
    } catch (error) {
        console.error('Error fetching data with async/await:', error);
    } finally {
        console.timeEnd('Async/Await Response Time');
    }
}

function fetchDataPromise(): void {
    console.time('Promise Response Time');
    axios.get('https://jsonplaceholder.typicode.com/users')
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
