# Scrimba course card challenge

## How it's built
**Tech used:** HTML, CSS 

## Lesson learned

### Solve element height is 0

If the child elements are floating, they will be ignored when calculating the height of their parent. 

**Solution**
Setting its overflow property to "hidden"

### Use background property in CSS

`background` is a shorthand CSS property. It can set all background styles at once. The styles include (in recommended order with its default value):

- `background-image: none`
    - pass `url()` to assign image
    - use `linear-gradient()`

- `background-position: 0% 0%`
    - use keywords: `top`, `bottom`, `left`, `right`
    - use values like `px`, `%`...
        - one-value: set image's x-axis, y-axis is set to default 50%
        - two-value: set image's x-axis and y-axis 

- `background-size: auto auto`
    - use keywords: `contain` or `cover`
    - use values like `px`, `cm`, `em`...
        - one-value: set width only, image proportion is set
        - two-value: set width and height separately (`auto 100px` can also preserve image aspect ratio)

- `background-repeat: repeat`
    - value includes: `repeat`, `no-repeat`, `repeat-x`, `repeat-y`, `space` and `round`

- `background-attachment: scroll`
    - use keywords: `scroll`, `fixed`, `local`

- `background-origin: padding-box`
    - use keywords: `padding-box`, `border-box`, `content-box`

- `background-clip: border-box`
    - use keywords: `padding-box`, `border-box`, `content-box`, `text`
    ! `text` keyword means background will only show on the text but we have to make text `color: transparent`

- `background-color: transparent`
    - use [predefined color name](https://htmlcolorcodes.com/color-names/)
    - use hex, rgb, rgba, hsl

We can add different layers of background and separate different layers by commas. The first value is the toppest layer. 