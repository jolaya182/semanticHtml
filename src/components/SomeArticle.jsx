/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const SomeArticle = () => {
  return (
    <div>
      <h1>Javi is now x626</h1>
      <p>By Troy McClure. Published January 3rd</p>
      <p>This is an example web page explaining HTML5 semantic markup.</p>
      <h2>The Document Outline</h2>
      <p>
        HTML5 includes several “sectioning content” elements that affect the
        document outline.
      </p>

      <h3>Headers</h3>
        {/*eslint-disable-line*/}
      <p>
        The <code>&lt;header&gt;</code> element is one such sectioning element.
      </p>

      <h3>Footers</h3>
      <p>
        And so is the <code>&lt;footer&gt;</code> element.
      </p>

      <h2>Inline Semantic HTML</h2>
      <p>
        The <code>&lt;time&gt;</code> element is semantic, but it’s not
        sectioning content.
      </p>

      <p>
        This fake article was written by somebody at InternetingIsHard.com,
        which is a pretty decent place to learn how to become a web developer.
      </p>

      <p>&copy; 2017 InternetingIsHard.com</p>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Sign up</a>
        </li>
      </ul>
    </div>
  );
};

export default SomeArticle;
