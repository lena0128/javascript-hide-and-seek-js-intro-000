
function getFirstSelector(selector) {
  var myString = document.querySelector(selector);
  return myString;
}


function nestedTarget() {
return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n){
 const myRank = querySelectorAll('ranked-list');
 for (let i = 0; i < myRank.length; i++) {
   myRank[i].innerHTML = (i + n).parseInt();
 }
  return myRank;
}
