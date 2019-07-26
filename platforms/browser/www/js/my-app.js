// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})



//This function that will read the globalization date and time 
function displayDateTime() {
    var date = new Date();
 
    // this to format the date for long date format
    var options = {
       formatLength:'full',
       selector:'date and time'
    }

    // this is the globalization systaxt
    navigator.globalization.dateToString(date, onSuccess, onError, options);
 
    //onSuccess the date and time will display there to the htmel div displayDate and Tiome
    function onSuccess(date) {
        var element = document.getElementById('displayDateTime');
        element.innerHTML = 'Today is: ' + date.value;
    }

    //If error getting the dates and times the alert message with display
    function onError(){
       alert('Error getting dateString');
    }
 }

 setInterval(displayDateTime, 1000);


// This function is going to be in charge of invoking
// the NEWSAPI external API
function businessNews(){

    // The XMLHttpRequest object, is the one in 
    // charge of handleing the request for us
    var http = new XMLHttpRequest();

    // The url to send the request to. Notice that we're passing
    // here some value of Source, date publice and the description  for the API 
    // to process
    const url = 'https://newsapi.org/v2/top-headlines?country=ie&category=business&apiKey=b978c5a2daf148bd8064413de76fb28a';
    
    // Opening the request. Remember, we will send
    // a "GET" request to the URL define above
    http.open("GET", url);
    // Sending the request
    http.send();

    // Once the request has been processed and we have
    // and answer, we can do something with it
    http.onreadystatechange=(e)=>{
        
        // First, I'm extracting the reponse from the 
        // http object in text format
        var response = http.responseText;

        // As we know that answer is a JSON object,
        // we can parse it and handle it as such
        var responseJSON = JSON.parse(response); 
    
        // Printing the result JSON to the console
        console.log(responseJSON);

        // Extracting the individual values, just as we
        // do with any JSON object. Just as we did 
        // with the position.
        // REMEMBER: In this case, we have an array inside 
        // the JSON object.
        var name = responseJSON.articles[0].source.name;
        var author = responseJSON.articles[0].publishedAt;
        var content = responseJSON.articles[0].description;

        //display the Title of the news feed then the button is clik
        var heading = "Business News";
        // Formattng data to put it on the front end
        var oc = "Source: " + name + "<br>Date Published: " + author + "<br>Description: " + content;
        //Placing formated heading to the html page
        document.getElementById('heading').innerHTML = heading;
         // Placing formatted data on the front ed
        document.getElementById('newsFeed').innerHTML = oc;
    }
    
}

//Sports News

// This function is going to be in charge of invoking
// the NewsAPI external API
function sportsNews(){

    // The XMLHttpRequest object, is the one in 
    // charge of handleing the request for us
    var http = new XMLHttpRequest();

    // The url to send the request to. Notice that we're passing
    // here some value of Source, date publice and the description  for the API 
    // to process
    const url = 'https://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=b978c5a2daf148bd8064413de76fb28a';
    
    // Opening the request. Remember, we will send
    // a "GET" request to the URL define above
    http.open("GET", url);
    // Sending the request
    http.send();

    // Once the request has been processed and we have
    // and answer, we can do something with it
    http.onreadystatechange=(e)=>{
        
        // First, I'm extracting the reponse from the 
        // http object in text format
        var response = http.responseText;

        // As we know that answer is a JSON object,
        // we can parse it and handle it as such
        var responseJSON = JSON.parse(response); 
    
        // Printing the result JSON to the console
        console.log(responseJSON);

        // Extracting the individual values, just as we
        // do with any JSON object. Just as we did 
        // with the position.
        // REMEMBER: In this case, we have an array inside 
        // the JSON object.
        var name = responseJSON.articles[0].source.name;
        var author = responseJSON.articles[0].publishedAt;
        var content = responseJSON.articles[0].description;

        // Formattng data to put it on the front end
        var heading = "Sports News";
        var oc = "Source: " + name + "<br>Date Published: " + author + "<br>Description: " + content;

        // Placing formatted data on the front ed
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('newsFeed').innerHTML = oc;
    }
    
}


//Financial News

// This function is going to be in charge of invoking
// the newsAPI external API
function financialNews(){

    // The XMLHttpRequest object, is the one in 
    // charge of handleing the request for us
    var http = new XMLHttpRequest();

    // The url to send the request to. Notice that we're passing
    // here some value of Source, date publice and the description  for the API 
    // to process
    const url = 'https://newsapi.org/v2/top-headlines?sources=financial-post&apiKey=b978c5a2daf148bd8064413de76fb28a';
    
    // Opening the request. Remember, we will send
    // a "GET" request to the URL define above
    http.open("GET", url);
    // Sending the request
    http.send();

    // Once the request has been processed and we have
    // and answer, we can do something with it
    http.onreadystatechange=(e)=>{
        
        // First, I'm extracting the reponse from the 
        // http object in text format
        var response = http.responseText;

        // As we know that answer is a JSON object,
        // we can parse it and handle it as such
        var responseJSON = JSON.parse(response); 
    
        // Printing the result JSON to the console
        console.log(responseJSON);

        // Extracting the individual values, just as we
        // do with any JSON object. Just as we did 
        // with the position.
        // REMEMBER: In this case, we have an array inside 
        // the JSON object.
        var name = responseJSON.articles[0].source.name;
        var author = responseJSON.articles[0].publishedAt;
        var content = responseJSON.articles[0].description;

        // Formattng data to put it on the front end
        var heading = "Financial News";
        var oc = "Source: " + name + "<br>Date Published: " + author + "<br>Description: " + content;

        // Placing formatted data on the front ed
        document.getElementById('heading').innerHTML = heading;
        document.getElementById('newsFeed').innerHTML = oc;
    }
    
}

//this fucntion is to load automatically whe the page is load to display the default pafe
//without click any button.
function start() {
    displayDateTime();
    businessNews();
}


//This is the code to create text file of a newsfee to store in the phonegap
function tryingFile(){

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemCallback, onError);
   
}

function fileSystemCallback(fs){

    // Name of the file I want to create
    var fileToCreate = "newPersistentFile.txt";

    // Opening/creating the file
    fs.root.getFile(fileToCreate, fileSystemOptionals, getFileCallback, onError);
}

var fileSystemOptionals = { create: true, exclusive: false };

function getFileCallback(fileEntry){
    
    var dataObj = new Blob(['Hello'], { type: 'text/plain' });
    // Now decide what to do
    // Write to the file
    writeFile(fileEntry, dataObj);

    // Or read the file
    readFile(fileEntry);
}

// Let's write some files
function writeFile(fileEntry, dataObj) {

    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        // If data object is not passed in,
        // create a new Blob instead.
        if (!dataObj) {
            dataObj = new Blob(['Hello'], { type: 'text/plain' });
        }

        fileWriter.write(dataObj);

        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };

    });
}


// Let's read some files
function readFile(fileEntry) {

    // Get the file from the file entry
    fileEntry.file(function (file) {
        
        // Create the reader
        var reader = new FileReader();
        reader.readAsText(file);

        reader.onloadend = function() {

            console.log("Successful file read: " + this.result);
            console.log("file path: " + fileEntry.fullPath);

        };

    }, onError);
}

function onError(msg){
    console.log(msg);
}
