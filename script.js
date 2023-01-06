let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.querySelector("#main-title").innerHTML = "Doms races"

  // Part 2
  document.body.style.backgroundColor = "lightblue"

  // Part 3 select last list and remove doms items
  const favList = document.querySelector("#favorite-things")
               favList.removeChild(favList.lastElementChild)

  // Part 4 select all special el's and change font to 2rem
   const allElements = document.querySelectorAll(".special-title")
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].style.fontSize = "2rem"
    }
 
    // Part 5 Access the Past Races list and remove Chicago.
   document.querySelectorAll("#past-races > li").forEach((item) => {
    if (item.textContent.trim() === "Chicago") {
      document.querySelector("#past-races").removeChild(item)
    }

   })

  
    // Part 6 
    const li = document.createElement('li')
li.innerHTML = 'Laurelton'
document.querySelector('#past-races').appendChild(li)
    

  // Part 7 
  const post = document.createElement('div')
  post.className = "blog-post purple" 

  const heading = document.createElement('h1')
  heading.innerHTML = "Pittsburgh"
  const paragraph = document.createElement('p')
  paragraph.innerHTML = "Lets ride till the wheels fall off"


  post.appendChild(heading)
  post.appendChild(paragraph)
  
 document.querySelector(".main").appendChild(post)
 
  // Part 8
document.querySelector("#quote-title").addEventListener("click", randomQuote)

  // Part 9

const blogPosts = document.querySelectorAll(".blog-post")

blogPosts.forEach(function(element){
  element.addEventListener("mouseout", function(){
    element.classList.toggle("purple")
  })

  element.addEventListener("mouseenter", function(){
    element.classList.toggle("red")
}) 
})
});
