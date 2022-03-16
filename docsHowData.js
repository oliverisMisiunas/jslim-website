export const howDocs = {
    title: "How to use JSlim",
    text: [
        "To use JSlim you need to have <a href=’https://nodejs.org/en/’ id=’how-to-link’>Node.js</a> installed on your computer.",
        "JSlim is installed just like any other NPM package. Just navigate to your project folder in the <span id='teal-color'>terminal</span> and enter this command:",
        "<span id='teal-color'>npm i jslim-library</span>",
        "To gain access to the JSlim library you need to follow these 3 simple steps:",
        "When you link your JavaScript file in your HTML, make sure to include <span id='teal-color'>type=’module’</span> in the script tag just like that  <span id='teal-color'>&lt;script src='app.js'&gt;&lt;/script&gt;</span>",
        "Then, open your JavaScript file and import the JSlim library by pasting in this line <span id='teal-color'>import jslim from ‘/node_modules/jslim-library/index.js’;</span>. It is recommended to import any modules at the top of your file (in the first lines).",
        "Lastly, just call the JSlim function after the import by typing <span id='teal-color'>jslim()</span>.",
        "And that is all! Now you can take a look at individual JSlim classes and see how to use them.",
        "A couple of things to note before proceeding - all JSlim code is written inside the HTML elements by applying class names to them, you can even use multiple JSlim classes on one element! All JSlim classes start with the letter ‘j’."
        ],
    photos: ["/howtoHTML.jpg", "howtoJS.jpg"]
}