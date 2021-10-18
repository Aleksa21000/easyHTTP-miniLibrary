"use strict";

// Test for easyhttp version -1.

const http = new easyHTTP();

// Make GET req. (Getting post-1 / all)
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
  if (err) {
    document.body.innerHTML = `<h1>${err}</h1>`;
  } else {
    const post = JSON.parse(posts);
    document.body.innerHTML = `
    <h3>Title: ${post.title} ------ ID: ${post.id}</h3>
    <p>Body: ${post.body}</p>
    `;
  }
});

// Create data --->
const customData = {
  title: 'Custom-Post',
  body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde.'
}

// Make POST req. (Creating post in database)
// Create req. --->
http.post('https://jsonplaceholder.typicode.com/posts', customData, function (err, posts) {
  if (err) {
    document.body.innerHTML = `<h1>${err}</h1>`;
  } else {
    const post = JSON.parse(posts);
    document.body.innerHTML = `
    <h3>Title: ${post.title} ------ ID: ${post.id}</h3>
    <p>Body: ${post.body}</p>
    `;
  }
});

// Make PUT req. (Updating post in database)
// Create req. --->
http.put('https://jsonplaceholder.typicode.com/posts/1', customData, function (err, posts) {
  if (err) {
    document.body.innerHTML = `<h1>${err}</h1>`;
  } else {
    const post = JSON.parse(posts);
    document.body.innerHTML = `
    <h3>Title: ${post.title} ------ ID: ${post.id}</h3>
    <p>Body: ${post.body}</p>
    `;
  }
});

// Make DELETE req. (Deleting post-id)
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    document.body.innerHTML = `<h1>${err}</h1>`;
  } else {
    document.body.innerHTML = `<h1>${response}</h1>`;
  }
});