
const http = require("http");
const fs = require("fs");

// functions.js file is required to be used as a module. 
// keep it in the same directory as this file. 
const fun = require("./functions")

http.createServer((require, response) => {

    // after creating the server a GET message is sent and req (short for require) will handel it. 
    // by loading the signup html page. This works only if both files are in the same directory. 
    // ------------------------------------------------------------------------------------------- 
    if(require.method === "GET"){

        //respond with an html page.
        response.writeHead(200, {"Content-Type": "text/html"});

        // use fs to read the html file on the repositry. 
        fs.createReadStream("signup.html", "UTF-8").pipe(response);


    }else 

    // When user submits the form, it is a POST method, and it will be handeld here.
    if (require.method === "POST"){

        var dataString = "";
        var dataArray = []
        var body = "";


        // here the require is dealing with 'data'.
        require.on('data', (formData) => {

            // the body (req.body) is storing the resulting URL 
            // but since it is an object we have to parse it into a string.
            body += formData;

            // The stringfy method turns the require body into a string 
            // so it can be passed for myDecodeFunction that splits the String into an array
            dataString = JSON.stringify(body);
            dataArray = fun.splitFunction(dataString);


        }).on('end', ()=>{
        // Here is the last thing that require has to do after listning to 
        // the post method. we should connect this to other pages.
       
        console.log(dataArray);
        })


}
}).listen(5000);

console.log("Server at 5000");
