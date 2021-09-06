# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/desktop-design.png)
![](./design/mobile-design.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- SASS css preprocessor

### What I learned

--Sticking to mobile first approach. It really helped me understand the advantages of using mobile first approach 
--Flexbox and its properties. I understand now the difference of the properties for the flex container and flex items. The differences of justify content and align items, flex shrink, fex grow and flex basis.
--Importance of making your webste accessible for all types of users. Using of semantic elements like <list> , <main>, <ul> and <li>, <button>. Seeting up attribute aria-expanded="true" to buttons if collapsed and false if not collapsed.
--Good practice of not using logo in navigation links (however I included this to help me easily style nav container using flexbox)


```html
<svg>Some HTML code I learned can be styled in css</svg>
<ul><li>Importance of using semantic tag for list items such as navigation links etc..</li><ul>
<button>Maximize use of button tag for buttons use to collapse items</button>

```

```css

--Setting font-size to 62.5 so I can convert PX to REM easily
html {
    font-size: 62.5%;
}

--Understanding of inheritance in css
body {
    margin: 0;
    padding: 0;
    font-family: $font-body;
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 600;
    color: $darkGrayishBlue;
}


--I am really wondering how can  create shapes in css to copy the design but got it easily after going to W3schools tutorials
.proud-of-this-css {
  content: "";
  position: absolute;
  right: 0;
  top: -25px;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 25px solid #FFF;
}

--I also understand now the use of before and after pseudo elements
::before, ::after {
  content:"";
}

--I utilized selectors in css like
a:not(:last-child) {}
:nth-child(1){}

```

```js
//changing attributes to elements using js
btnHamburger.setAttribute('aria-expanded', 'true')
};
```


### Continued development

I want to continue focusing on using mobile first approach in designing. I will try to spped up my work by utilizing DEV TOOLS in browser. I will continue doing project with the use of Flexbox and Grid. 

 I will also try utilizing functions in SASS like extend which I am not really not familiar with.

 I will continue using BEM approach.

 I will try to use semantic tags as much as possible and give consideration to accessibility side of the website for screen readers. I will do more reseach on how I can make website accessible.


### Useful resources

(https://www.w3schools.com/howto/howto_css_shapes.asp) - This helped me for styling the triangle shape in css.

(https://codepen.io/MarioDesigns/pen/woJgeo) - This is an amazing snippet for floating effect that help me understad how can I use css animation 


## Author

- Website - [Jhon Loyd Pastorin](https://jlpasto.github.io)
- Frontend Mentor - [@jlpasto](https://www.frontendmentor.io/profile/jlpasto)


## Acknowledgments

 - Raymart Pamplona provided me [feedback](https://www.frontendmentor.io/solutions/responsive-landing-page-using-flexbox-and-grid-and-utilizing-scss-HgKCUtwQi#comment-61331977856b167e2fa445cd) on how can I make my website even more better and point out all  my mistakes on my previous work that I applied working on this project. 

