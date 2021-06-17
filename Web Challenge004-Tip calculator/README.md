# Tip calculator

## Demo

## How it's built

**Tech used**: HTML, CSS, JavaScript

## Lesson learnt

### How do we update a text value while input is changed

Use `change` as the event listener trigger type

The value retrived from `input` element is a string. If we want to to the calculation on that, we should convert to numbers using `Number(string)`, converting back to string is `number.toString()`.

### How to change the color of a input placeholder

Use `::placeholder` for most of the modern browser now. (IE9 and lower doesn't support.)

### How to use select dropdown in HTML

### How to make inner box shadow

Use the same property but add `inset` to indicate that the shadow is insetted. 

### How to add restriction for the input tag

For number type input, we can use `min` or `max` attributes to restrict the range of the number. 

## What is DOMTokenList