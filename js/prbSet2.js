function getRelationship(x, y) {

 if( (isNaN(x)) && (isNaN(y)) ){
    	return "Can't compare relationships because " + x + " and " + y + " are not numbers";
    	
    }
    if((isNaN(x)) || (isNaN(y))){

		if( isNaN(x) && (!isNaN(y))){
		return "Can't compare relationships because " + x + " is not a number";
		
		}
		if( isNaN(y) && (!isNaN(x))){
		return "Can't compare relationships because " + y + " is not a number";
		
		}
    }
    
  
  	if(x < y){
  		return "<";
  	}  
  	if(x > y){
  		return ">";
  	} 
  	if(x === y){
  		return "=";
  	}
 
};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));



// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));



// We learned about relational operators and how they can classify the relationship between two values. Your job is to write the function getRelationship(x,y) function, which should return a string representing whether x is >, < or = y. For example:

// var rel = getRelationship(2, 3);
// console.log(rel); // <
// If one or both of the values aren't numbers, your function should output:

// "Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
// where [this value] and [that value] are replaced with the non-numerical values. The sentence should be grammatically correct by outputting either is or are and pluralizing number if necessary.

// For example:

// var rel1 = getRelationship("this", 2);
// console.log(rel1); // "Can't compare relationships because this is not a number"

// var rel2 = getRelationship("that");
// console.log(rel2) // "Can't compare relationships because that and undefined are not numbers"
// Notice in the second example, because the y value was missing, the output said that undefined was not a number.


var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var name, lastfirst;
    var finalWalkers = [];
    for(var i = 0; i < names.length; i ++){
        name = names[i];
        //console.log(typeof(name));
    
        name = name.split(" ");
        //console.log(typeof(name));
    
        lastFirst = name[1] + ", " + name[0];
        finalWalkers.push(lastFirst);
        
    }
    //console.log(finalWalkers);
    
    //now alphabetize them?
    finalWalkers.sort( function(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
        if (a == b) return 0;
    }//end anonymous
        );//end sort
    console.log(finalWalkers);
}



Google's PageSpeed Insights (PSI) scores websites on their speed. A perfect score is 100 and the worst score is 0. Alongside the score, PSI provides relevant advice for improvements.

By integrating an automated PSI score into a suite of front-end unit tests, you can periodically check a website's overall speed.

Let's assume you're building the front-end testing framework and you make a call to the PSI API. You receive the JSON below as a response.

Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object and returns the total number of bytes to load the website.

Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in ruleResults and returns an array of their strings.

var psiResults;

psiResults = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },
   ...
   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       ...
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   ...
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }

 // Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!
    var array = [];
    for (var variable in results.formattedResults.ruleResults){
        array.push(results.formattedResults.ruleResults[variable].localizedRuleName);
    }
    return array;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    var sum = 0;
    for (var variable in results.pageStats) {
        if (typeof results.pageStats[variable] == "string") {
            sum += (Number(results.pageStats[variable]));
        }
    }
    return sum;
}

/**************************************************************************************
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/
// don't change this variable!
var featuredArticle;

featuredArticle = $( '.featured' );

featuredArticle.toggleClass('featured');

/*************************************************************************************
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!
You must use jQuery's toggleClass method!
*/
// don't change these variable!
var article2, article3;

article2 = $(".featured");
article3 = article2.next(".article-item");

article2.toggleClass("featured");
article3.toggleClass("featured");
/*************************************************************************************
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/
// Start with this variable!
var navList, first;

console.log("Stephany!");
navList = $(".nav-item");

firstLink = navList.first().children("a").attr("href","#1");

/*************************************************************************************
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!
*/
// Start with this variable!
var articleItems;

articleItems = $(".article-item");
articleItems.css("font-size", "20px");


/************************************************************************************
MAKING LIVE CHANGES
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.

//make the value of the text in the h1 tags to be the same as what's written in the input box
*/


$('#input').on('change', function() { //this code is an event listener
    var val, headerText;
    
    val = $("#input").val();
    
    headerText = $(".articles").children("h1");// Your code goes here!
    headerText.text(val);
    //what this does: 
    //1. declare two variables, val and headerText
    //2. assign val the VALUE of the input box with the ID of #input
    //3. assign headerText the value of the H1 child element of the .articles class
    //4. assign the header text the value of the variable 'val' using the .val() function.
    
});


/*************************************************************************************
REMOVE HTML
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/


var articleItems, ul;

articleItems = $(".article-item");

ul = articleItems.children("ul");//now it includes both UL and LI elemtns

ul.remove();

/*************************************************************************************
selectedItem.append() adds the parameter as a LAST child element of the selected item
selectedItem.prepend() adds the parameter as a FIRST child element of the selected item

selectedItem.insertBefore() creates sibling elements by adding (parameter) siblings before the selected item 
selectedItem.insertAfter() creates sibling elements by adding (parameter) siblings after the selected item

For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

var fam1, fam2, bruce, mads, hunt;

fam2 = $("<div id='family2'></div>").insertAfter("#family1");
fam2.prepend('<h1>Family2</h1>');

fam2.append('<div id="bruce"></div>');
bruce = $('#bruce');
bruce.prepend('<h2>Bruce</h2>');

bruce.append('<div id="madison"></div>');
bruce.append('<div id="hunter"></div>');

mads = $('#madison');
hunt = $('#hunter');

mads.append('<h3>Madison</h3>');
hunt.append('<h3>Hunter</h3>');


/**************************************************************************
the .each() iterator
in jQuery, the $this refers to the DOM element itself

For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p>, otherwise your
lengths won't be correct!
*/

// Your code goes here!

var sum, index, pTags, string, strLnth;

pTags = $("p");
//console.log(pTags);
pTags.each( function(){
    
    //console.log(index); //index is each <pTag>
    string = $(this).text();
    
    strLnth =  string.length;
    
    $(this).append(strLnth);
}
);

// A function passed into the jQuery object runs on document.ready, which occurs after the DOM has been loaded.

// Why is this useful?

// External JavaScript files in the <head> of a document are generally downloaded earlier than JavaScript files included in the <body>. JavaScript files are also executed immediately at their location in the document, which means they can't access any DOM elements that come after their <script> tag in the DOM. This leads to some interesting situations.

// Imagine you're building a website and you've got a script you want to run against some DOM elements in the page. If you include your script in the <head> normally, it will run as soon as it's downloaded, which will occur before the DOM has built the elements you want your script to run against. So your script wouldn't be able to do anything.

// You could include your script at the bottom of the <body>, but that would mean that the download could potentially start later in the load process, slowing down the initial page render.

// So what can you do?

// Pass your function into the jQuery object, like so:

// function someFunction() {
//     // Do interesting things
// }
// $(someFunction)
// or

// $(function(){
//     // Do interesting things
// })
// Now, you can include your script in the <head> and it won't run until the DOM has been built and the elements that you want to manipulate are on the page.
/*********************************************************************************

For this quiz, can you use this script, which is in the <head> of index.html,
to change the boring placeholder image to a picture of a cute puppy?

Remember, you'll need to pass a function into the jQuery object to run 
when the document is ready.

Here's a URL for a picture of a puppy: http://placepuppy.it/350/150 or http://placekitten.com/350/150

****************************************************************/



$(function(){

img1 = $('img[alt="Placeholder Image"]');
src2 = 'http://placekitten.com/350/150';
src1 = img1.attr('src');

img1.attr('src', src2)
});