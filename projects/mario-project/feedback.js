// Really great work on the project!  I'll go over a few things here to help, but overall it was easy to read 
// and works correctly.

// HTML
  // Make sure the <script> tag is inside of the <body> tag at the very bottom.  While it still works, this will end up 
  // eventually if it is not in the body tag.
  
  // Make sure every HTML tag that is wrapped in another tag is indented, while tags surrounded by it are on the same line.
  // Example

  <body>
      <form>
          <div>
              <h1>Goombas</h1>
              <img src="goombaImg.png"/>
              <input type="text" name="goombaAmount"/>
          </div>
          <div>
              <h1>Cheeps</h1>
              <img src="cheepImg.png"/>
              <input type="text" name="cheepAmount"/>
          </div>
          
          // etc... 
          
      </form>
      <script sr="app.js"></script>
  </body>
  
  // The organization of your HTML was great, so this is more just for convention and readability.
  
  
// CSS
  // The majority of the time spend on this project is in the HTML and JS, so minimal CSS is great.
  // Going forward, you'll be pushed to use things like flexbox and media queries which will definitely
  // lengthen that stylesheet a bit more.
  
  
// JS
  // Really great organization, order of logic, and readability.  The only thing I saw that could have been done
  // another way was how you got the result to show up on the HTML page.  There is an <h2> near the bottom of the
  // HTML page you could select by it's id, and then just set it's textContent to the final value rather than
  // creating a new <h2> and appending it to the DOM.  Both methods are great to use, so this is just to point
  // out another option.
  
