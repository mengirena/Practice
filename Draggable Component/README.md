# Sortable Drag & Drop

<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/8dd3688a-8f84-4c53-8702-a2cd7fcbe574/deploy-status)]() -->

## How it's built
**Tech used:** HTML, CSS, JavaScript

## Lesson learnt

### To get the width, height and the position of an element
-  `Element.getBoundingClientRect()` 
It returns a DOMRect object. It's the smallest rectangle containing the entire element including its padding and border width. It has `left`, `top`, `right`, `bottom`, `x`, `y`, `width`, and `height` properties. The result returned is relative to the viewport triggered at that time.


### Drag event

- Drag event
    - `drag`: event fires on the draggable target
    - `dragstart`: fires when drag starts on the draggable target
    - `dragend`: fires when drag ends on the draggable target
    - `dragover`: fires on the drop target. Use `event.preventfault()` to prevent default to allow drop
    - `dragenter`: fires when the draggable item enters the target
    - `dragleave`: fires when the draggable leaves the target
    - `drop`: event fires on the drop target. Use `event.preventfault()` to prevent default action