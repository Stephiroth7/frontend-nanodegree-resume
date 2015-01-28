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