# Pricing component

## How it's built
**Tech used:** HTML, CSS

## Lesson learned

### To change the marker for a list in CSS

Use `ul li::marker{ content: "something here"}`

### How do we make fluid font size


### How do we use transition

`transition` can let us decide which property to animate, when the animation should start and how long and how the animation will be. But not all properties can be transitioned. Here are the [properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) can be transitioned. 
We can control the transition by the sub-properties (with default):

- `transition-property: all`

- `transition-duration: 0s`

- `transition-timing-function: ease`

- `transition-delay: 0s`

### How do we make slide button

### 3D CSS properties used 

`perspective`: determine the distance between the z = 0 and the user. Default value is `none`. Giving a `length` value can appply a perspective transform to the element and the content. 

Use `transform-style: preserve-3D` can preserve element's 3D position

If a `transform` property has a value other than its initial value, a stacking context will be created. The 3D rotational methods are:
	
- `rotateX(angle)`

- `rotateY(angle)`

- `rotateZ(angle)`

- `rotate3d(x,y,z,angle)`
	

`backgace-visibility` is often used with `transform: rotateY(180deg);` and this can make the back of the element be visible or hidden.  