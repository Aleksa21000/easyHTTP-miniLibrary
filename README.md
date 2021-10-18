# easyHTTP-miniLibrary
This is custom created mini Library that making http requests in 3 versions: AJAX(CallBacks), Fetch api(Promises and async/await).
Its minified version of Library called Axios with just 4 basic methods to maintenance async calls ('GET', 'POST', 'PUT', 'DELETE').


In every version there is test filer for it. IF You are willing to include this in Your project for easier managing Your http requests do the following:
----- Include at Your HTML code before ending '</body>' tag easyhttp-version(1/2/3) optional wich version You would like to use.
      Make sure that this script including tag is on the top of Your custom javascript files (main.js, app.js, etc...).

----- If You want to use AJAX You will need to init 'new XMLHttpRequest()' and asign it to some variable and then use it in You project with URL You wish.
      More info. and example in file 'test-version1.js'.
      
----- IF You want to use Fetch api method You will just need to init a class 'const http = new easyHTTP()' and You can use it. Version 2 and version 3 using same test file.
      More info. and example in file 'test-version2.3.js'.
      
Feel free to use it.      
