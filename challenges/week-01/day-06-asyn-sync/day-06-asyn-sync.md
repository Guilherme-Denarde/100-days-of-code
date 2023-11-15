# Day 6
## Asynchronous Data Fetching with JavaScript

### Introduction

Asynchronous programming allows JavaScript code to handle multiple tasks simultaneously without blocking the main thread. This is particularly useful for operations that involve I/O, such as making network requests.

### Implementing Asynchronous Data Fetching

The provided code demonstrates two approaches to asynchronous data fetching with JavaScript:

#### Async/Await

The `fetchDataAsync` function utilizes the `async/await` syntax to fetch data from a URL and log the response. The `await` keyword pauses the execution of the asynchronous operation until the response is received.

```javascript
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


#### Promises

The `fetchDataPromise` function utilizes the Promise API to fetch data from a URL and log the response. The `then` method handles the successful response, while the `catch` method handles any errors.

javascript
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