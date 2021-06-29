# Card Game

[![Netlify Status](https://api.netlify.com/api/v1/badges/8dd3688a-8f84-4c53-8702-a2cd7fcbe574/deploy-status)]()

👆🏽 click to check the live page

This is a tip calculator. You can also use it to calculate the amount to split with your friends.

## Demo

<img src="" width="300px">

## How it's built

**Tech used**: HTML, CSS, JavaScript

## Lesson learnt

### Use data attribute as content for CSS

We can move small data to data attribute and then later make it content for CSS and style it. By using `attr(attribute-name)`, we can retrive the value from specified attribute. Using `[attribute-name]` as the CSS selector allow us to select the specific element.

```html
    <p data-text="Hello">World</p>
```

```css
    [data-text]::before{
        content: attr(data-text) " ",
    }
```
The result from above code will generate "Hello World".

**Note:** `attr()` can only be used in different properties but only in `content` property is robust. The other usages are still under experiment.   


Benefit of using data attribute as content for CSS:

1. Reduce the HTML code a lot

2. Allow dynamically change easily via JavaScript