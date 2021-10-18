"use strict";

// Test for easyhttp version -2/3.

const http = new easyHTTP();

// Make GET req. (Getting post-1 / all)
http.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(posts => document.body.innerHTML = `
  <h3>Title: ${posts.title} ------ ID: ${posts.id}</h3>
  <p>Body: ${posts.body}</p>
  `)
  .catch(err => document.body.innerHTML = `<h1>${err}</h1>`);


// Create data --->
const customData = {
  title: 'Custom-Post',
  body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde.'
}


// Make POST req. (Creating post in database)
// Create req. --->
http.post('https://jsonplaceholder.typicode.com/posts', customData)
  .then(posts => document.body.innerHTML = `
  <h3>Title: ${posts.title} ------ ID: ${posts.id}</h3>
  <p>Body: ${posts.body}</p>
  `)
  .catch(err => document.body.innerHTML = `<h1>${err}</h1>`);


// Make PUT req. (Updating post in database)
// Create req. --->
http.put('https://jsonplaceholder.typicode.com/posts/1', customData)
  .then(posts => document.body.innerHTML = `
  <h3>Title: ${posts.title} ------ ID: ${posts.id}</h3>
  <p>Body: ${posts.body}</p>
  `)
  .catch(err => document.body.innerHTML = `<h1>${err}</h1>`);


// Make DELETE req. (Deleting post-id)
http.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => document.body.innerHTML = `<h1>${response}</h1>`
  )
  .catch(err => document.body.innerHTML = `<h1>${err}</h1>`);