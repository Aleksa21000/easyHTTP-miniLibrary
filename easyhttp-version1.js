"use strict";

// This is version -1 that use es5 prototypes in combination with AJAX and callback functions.

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make http GET req.
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  this.http.onload = function () {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback('Error: ' + this.http.status);
    }
  }.bind(this);

  this.http.send();
}

// Make http POST req.
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = function () {
    callback(null, this.http.responseText);
  }.bind(this);

  this.http.send(JSON.stringify(data));
}

// Make http PUT req.
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  this.http.onload = function () {
    callback(null, this.http.responseText);
  }.bind(this);

  this.http.send(JSON.stringify(data));
}

// Make http DELETE req.
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  this.http.onload = function () {
    if (this.http.status === 200) {
      callback(null, 'Post is successfully deleted.');
    } else {
      callback('Error: ' + this.http.status);
    }
  }.bind(this);

  this.http.send();
}