export const docsData = [
  {
    id: 1,
    title: "Scroll to set position",
    text: [
      "When an element with a class <span id='teal-color'>jscrollto</span> is clicked, the page scrolls automatically to the set point. <span id='teal-color'>jscrollto</span> has several properties, some of which are optional.",
      "First, apply the <span id='teal-color'>jscrollto</span> class name to an element.",
      "Then, in the same element’s class name, enter the id (not class name!) of the element that you wish to scroll to.",
      "The following properties are optional:",
      "If you wish for the scroll to be smooth, apply a third class name <span id='teal-color'>jsmooth</span>.",
      "If you wish to scroll to a set amount of pixels above the selected element, add two more class names. <span id='teal-color'>jsetpx</span> and the number of pixels.",
    ],
    classes: ["jscrollto", "jsmooth", "jsetpx"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/scrollto.jpg']
  },
  {
    id: 2,
    title: "Add class on hover",
    text: [
      "Apply the <span id='teal-color'>jhover</span> class to an element.",
      "Then, apply the class name that you want to add on mouse hover. It will be removed automatically when the mouse leaves the object.",
      "The class name, that will be added, has to be applied to the same element but has to start with the letter ‘j’. For example, if you want to add the class name ‘container’, you would need to write ‘jcontainer’."
    ],
    classes: ["jhover"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/jhover.jpg']
  },
  {
    id: 3,
    title: "Apply class while scrolling",
    text: [
      "<span id='teal-color'>jscrollpos</span> applies a class name to an element when the window object reaches a set point (measured in pixels) and removes that class name when the window object reaches another set point.",
      "To use this function you will need to set four classes to your selected element:",
      "<span id='teal-color'>jscrollpos</span> initiates the function.",
      "Then two numbers are passed. The first number sets a point, when the window’s Y-axis passes that point (while scrolling) a class name is added to that element. The second number is another point, when the window’s Y-axis passes it, that same class name is removed from the element.",
      "The class name is also removed if the user scrolls back (the window’s Y-axis is less than the first number).",
      "The class name, that will be added to the element, has to be applied to the same element but it has to start with the letter ‘j’. For example, if you want to set the class name ‘container’ to an element, you would need to write ‘jcontainer’."
    ],
    classes: ["jscrollpos"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/applyClassScrolling.jpg']
  },
  {
    id: 4,
    title: "Create a variable for an element",
    text: [
      "<span id='teal-color'>jget</span> class assigns the elements (containing this class name) to the variables that become accessible in your JavaScript file.",
      "The variable name is set by writing another class name after <span id='teal-color'>jget</span> (that class name becomes the new variable name).",
    ],
    classes: ["jget"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/variableHTML.jpg', '/variableJS.jpg']
  },
  {
    id: 5,
    title: "Toggle class on click",
    text: [
      "Apply the <span id='teal-color'>jtoggle</span> class to an element.",
      "Then, apply the class name that you want to toggle on click.",
      "The class name, that will be toggled, has to be applied to the same element but has to start with the letter ‘j’. For example, if you want to toggle the class name ‘container’, you would need to write ‘jcontainer’."
    ],
    classes: ["jtoggle"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/jtoggle.jpg']
  },
  {
    id: 6,
    title: "Add class on click",
    text: [
      "Apply the <span id='teal-color'>jadd</span> class to an element.",
      "Then, apply the class name that you want to add on click.",
      "The class name, that will be added, has to be applied to the same element but has to start with the letter ‘j’. For example, if you want to add the class name ‘container’, you would need to write ‘jcontainer’."
    ],
    classes: ["jadd"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/jadd.jpg']
  },
  {
    id: 7,
    title: "Remove class on click",
    text: [
      "Apply the <span id='teal-color'>jremove</span> class to an element before the class name that you want to remove on click. When the element is clicked, the class name after <span id='teal-color'>jremove</span> will be removed.",
    ],
    classes: ["jremove"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/jremove.jpg']
  },
  {
    id: 8,
    title: "Display current date",
    text: [
      "Apply <span id='teal-color'>jdate-mdy</span>, <span id='teal-color'>jdate-dmy</span>, or <span id='teal-color'>jdate-ymd</span> classes to an element to display the current date. These classes differ from each other by date format.",
      "<span id='teal-color'>jdate-mdy</span> displays MM/DD/YYYY",
      "<span id='teal-color'>jdate-dmy</span> displays DD/MM/YYYY",
      "<span id='teal-color'>jdate-ymd</span> displays YYYY/MM/DD"
    ],
    classes: ["jdate-mdy", "jdate-dmy", "jdate-ymd"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/displayDate.jpg']
  },
  {
    id: 9,
    title: "Center elements",
    text: [
      "<span id='teal-color'>jfcol</span> or <span id='teal-color'>jfrow</span> classes apply flexbox with ‘center’ properties to the selected elements. In other words, it centers the elements horizontally and vertically inside another element or body.",
      "The only difference between <span id='teal-color'>jfcol</span> and <span id='teal-color'>jfrow</span> is flex-direction. <span id='teal-color'>jfcol’s</span> flex-direction is set to column and <span id='teal-color'>jfrow’s</span> is set to row.",
      "You should only apply flexbox to the HTML elements that are parent elements. Its children will be centered vertically and horizontally inside it. It is highly recommended to use <span id='teal-color'>jfcol</span> and <span id='teal-color'>jfrow</span> only if you are familiar with flexbox."
    ],
    classes: ["jfcol", "jfrow"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/centerElements.jpg']
  },
  {
    id: 10,
    title: "Scroll to the top on click",
    text: [
      "Apply the <span id='teal-color'>jscrolltop</span> class to an element. When that element is clicked, the page will scroll to the top automatically."
    ],
    classes: ["jscrolltop"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/scrolltoTop.jpg']
  },
  {
    id: 11,
    title: "Get contents of the input element",
    text: [
      "The <span id='teal-color'>jinput</span> class pushes the contents of an input element to an empty array in your JavaScript file.",
      "Apply the <span id='teal-color'>jinput</span> class on the input elements.",
      "Then apply the <span id='teal-color'>jinput-btn</span> class to the element that, when clicked, will push the contents of the input element to an empty array in your JavaScript file.",
      "The data will only be pushed once! If any data already exists in the array any new contents won’t be pushed on click.",
      "The array is named <span id='teal-color'>jinputArr</span>."
    ],
    classes: ["jinput", "jinput-btn", "jinputArr"],
    version: "1.0.0",
    author: 'Oliveris Misiūnas',
    photos: ['/inputHTML.jpg', '/inputJS.jpg']
  },
    {
    id: 12,
    title: "Scroll to the bottom",
    text: [
      "Apply the <span id='teal-color'>jscrollbottom</span> class to an element. When that element is clicked, the page will scroll to the bottom automatically."
    ],
    classes: ["jscrollbottom"],
    version: "1.2.0",
    author: 'Harry Whorlow',
    photos: ['/scrollBottom.jpg']
  },
];
