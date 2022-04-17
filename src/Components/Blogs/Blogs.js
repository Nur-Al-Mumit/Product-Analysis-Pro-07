import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h1>Question And Answer</h1>
      <div className="question-container">
        <h2>1. What is semantic tag?</h2>
        <p>
          Answer : Semantic HTML elements are those tags witch define the
          purpose of the element and clearly describe their meaning in user and
          also machine can red this.
          <p>
            It makes web pages more informative. Semantic tags helps search
            engines for better interpret content and read the page more faster
            and find the required information faster. And semantic tags make it
            meaning full to the browser.
          </p>
        </p>
        <h2>
          2. What is difference between block, inline and inline block elements?
        </h2>
        <p>
          Answer : By default, boths elements have a major difference. HTML have
          3 types of display values, the are called by the name of block, inline
          and inline-block.
          <p>
            with Inline element you do not force a new line and it takes the
            exact weidth and height witch this tag contain. And it allow other
            elements to sit behind.
            <br />
            A block element always starts on a new line and it takes the full
            width witch available. And It not allow other elements to sit
            behind.
            <br />
            And inline-block elements contain both inline and block elements characteristics.It allow a new line and also allow other
            elements to sit behind.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
