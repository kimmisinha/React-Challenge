import React, { useState } from "react";
import '../Css/Question20.css';  

function Question20() {
    const [flipped, setFlipped] = useState(false);
    const [quote, setQuote] = useState("Just because I don't care doesn't mean I don't understand.");
    const [author, setAuthor] = useState("Homer Simpson");
    

    const fetchNewQuote = () => {
        const quotes = [
            { text: "Just because I don't care doesn't mean I don't understand.", author: "Homer Simpson" },
            { text: "D'oh!", author: "Homer Simpson" },
            { text: "Eat my shorts!", author: "Bart Simpson" },
            { text: "I'm not a monster. I'm just ahead of the curve.", author: "Bart Simpson" },
            { text: "I believe that children are our future. Unless we stop them now.", author: "Homer Simpson" },
            { text: "To alcohol! The cause of, and solution to, all of life's problems.", author: "Homer Simpson" },
            { text: "I used to be with it, but then they changed what it was.", author: "Grampa Simpson" },
            { text: "Hi, I'm Troy McClure. You may remember me from such films as...", author: "Troy McClure" },
            { text: "I'm allergic to bee stings. They cause me to, uh, die.", author: "Moe Szyslak" },
            { text: "I'm not a bad guy! I work hard, and I love my kids. So why should I spend half my Sunday hearing about how I'm going to Hell?", author: "Homer Simpson" },
            { text: "Shut up, brain, or I'll stab you with a Q-tip!", author: "Homer Simpson" },
            { text: "The only thing I'm high on is love.", author: "Marge Simpson" },
            { text: "A noble spirit embiggens the smallest man.", author: "Jebediah Springfield" },
            { text: "I'm Idaho!", author: "Ralph Wiggum" },
            { text: "Me fail English? That's unpossible.", author: "Ralph Wiggum" },
            { text: "My cat's breath smells like cat food.", author: "Ralph Wiggum" },
            { text: "I bent my Wookiee.", author: "Ralph Wiggum" },
            { text: "I, for one, welcome our new insect overlords.", author: "Kent Brockman" },
            { text: "Remember, you can always find East by staring directly at the sun.", author: "Bart Simpson" },
            { text: "I'm normally not a praying man, but if you're up there, please save me, Superman.", author: "Homer Simpson" }
          ];
        
        
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author);
      console.log(randomQuote.author)
      setFlipped(false); // Optionally reset the flip state
    };
  
    const handleClick = () => {
      setFlipped(!flipped);
    };
  
    return (
      <div className="card" onClick={handleClick}>
       Author {author}
        <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
          <div className="card-front">
            <p className="quote">{quote}</p>
           
          </div>
         
        </div>
        <button className="fetch-quote-button" onClick={fetchNewQuote}>Get New Quote</button>
      </div>
    );
  }
  

export default Question20

/*
Puzzle #20: Simpsons Quotes 🍩
Write a React functional component that displays a card containing a
quote from The Simpsons. When the card is clicked, it should flip over to reveal
the character who said the quote and an image of the character. There should also 
be a button that, when clicked, fetches a new quote and displays it on the card.
*/
