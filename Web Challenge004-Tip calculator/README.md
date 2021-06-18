# Tip and Split

[![Netlify Status](https://api.netlify.com/api/v1/badges/8dd3688a-8f84-4c53-8702-a2cd7fcbe574/deploy-status)](https://tipnsplit.netlify.app)

👆🏽 click to check the live page

This is a tip calculator. You can also use it to calculate the amount to split with your friends.

## Demo

<img src="https://user-images.githubusercontent.com/51871665/122467437-5b98eb80-cf6f-11eb-9075-2d020f8e09bd.gif" width="300px">

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
