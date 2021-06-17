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

### How to make inner box shadow

Use the same property but add `inset` to indicate that the shadow is insetted. 

### How to add restriction for the input tag

For number type input, we can use `min` or `max` attributes to restrict the range of the number. 

## What is DOMTokenList

The used case here is returned by `Element.classList`. It's not an array so most of the array methods are not able to apply on it except `.forEach()`. If we were to revise this DOMTokenList, we should use `add()` or `remove()` to do that.