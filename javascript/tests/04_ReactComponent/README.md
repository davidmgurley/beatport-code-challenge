## Demonstration Video with Commentary

https://www.loom.com/share/f6cba3d316a343ae9c761374efb3b576

## Requirements Met

1. Allow for variable slide intervals, but default to 4 seconds
2. Should pause when a user is interacting with the component
3. The Slider should be able to take different types of slides. For example, it could be a single image or a set of tiles. Reference Beatport.com for an example

## Philosophy

1. Use modern react include hooks. I wanted to utilize useEffect and useState to create a simple reliable app
2. Make the Slider component as reuable as possible in as few files as possible.
3. Make the Slider look good no matter how much data it is asked to display and no matter how many tiles of images it needs to display
4. Require nothing but input data from the parent component. All props have defaults and are optional.

## Methodology

1. useState and useEffect drive everything in the Slider Component.
2. On render the data is divided into equal groups based on the `displayGroup` prop.
3. The divisibility of the `displayGroup` prop is calculated so the data is displayed in the slider in even neat rows.
4. An interval is set based on the `interval` prop as calculated in seconds. It is removed if the `timerActive` state is set to `false', and reinstated if `timerActive` sets back to `true`.
5. Arrow icons in the header manually control the displayed index. They increment and decrement the `slideIndex` state. They will also wrap back around if clicked when the corresponding index is at the beginning or end of its array.
6. Nav buttons at the bottom highlight where in the list the current index is diplaying. They can also be clicked to manipulate the index to the corresponding button that was clicked. 
