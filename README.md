# Description

This is an assignment to build a responsive ecommerce web page. Nav and product container div will use flexbox. Sidebar/aside is a module that changes layout and location based on window size. Submitting the mailing list signup form results in user feedback on the page. Clicking a product's “add to cart” or “remove from cart” button updates cart count at top.

Students may use the provided mockups to guide their design to whatever extent they like. Matching the mockups is not required.

## Provided Materials

  - basic HTML and CSS
  - JSON list of products in script.js file
  - reset.css
  - images for all products
  - suggested design mockups

## Assignments

Lesson 03:

  - Make design decisions about how you'd like your site to look. You can use the provided mockups to guide your design to whatever extent you'd like- feel free to implement them exactly or make up your own design completely.
  - Code basic CSS for page. `reset.css` file should remain as it is. `main.css` file can be added to, changed, or completely redone.
  - `nav ul` and `.item-container` elements should be styled as flexbox containers. Implement a responsive grid system of your own design, or use a library, or don't use a grid at all. Be sure all important size values are proportional (em, rem, %).
  - We'll continue working on the CSS for this project throughout the course, in particular making it more responsive. The styling does not have to be perfect after this assignment. It's fine to change or add to the HTML as necessary for your styling.

Lesson 05:

  - Write a JS form handler function to be triggered on form submit. It should print to the console a friendly message that includes the value of the form element with name "email". Something like "Thanks for signing up for our mailing list, bobross@example.com!"

Lesson 06:

  - Serve appropriately sized images. Use GIMP or another photo-editing program to resize all images to more reasonable, consistent dimensions. This includes product images, the logo, and any background or other images you've included.

Lesson 07:

  - Write Javascript function that toggles the inclusion of a product in the "cart".
  - Add/edit HTML as necessary to trigger the function on click of a button for each product.

Lesson 08:

  - Write CSS that uses media queries to change layouts/style based on device size. There shoud be at least one obvious layout change in addition to elements fluidly changing width.
  - Finish styling the page.

Lesson 09:

  - Write Javascript that causes the total number of items in the cart to display next to the cart icon when that total changes.
  - Write Javascript that displays the friendly message on form submit in the page, not in the console.
  - Update the HTML and CSS as necessary to accomodate these changes.
  - Update the Testing section of this README with your own information.

*Extra Challenge*: Incorporate unit tests with [Qunit](https://qunitjs.com/).

*Extra Challenge*: Code a popup that toggles between hidden and displayed when user clicks on cart icon. It should show information about items in the cart (maybe list of their names, but up to you).

*Extra Challenge*: Serve appropriately sized images for user's device. Create multiple sizes of each image, and serve the appropriate one using the `srcset` and `sizes` attributes on the `img` tags. This will require naming all of the images consistently, e.g. "ombre-infinity400.jpg", "ombre-infinity200.jpg". [More](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) about [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

*Extra Challenge*: Use browser storage to save details about a user's cart so when they revisit the page, it's in the same state as when they left it. [More about browser storage](https://www.w3schools.com/html/html5_webstorage.asp)

*Extra Challenge*: Dynamically generate the HTML for product listings from the JSON objects in script.js.

## Requirements

  - Site layout looks good on all sizes of devices. At a minimum, elements are proportionally styled and aside element changes location and layout at different screen sizes. This should be tested using a variety of devices and at least one online browser compatiblity testing tool.
  - Nav and product container elements are styled using flexbox.
  - Appropriately sized images are served.
  - User can add and remove items from their cart, which changes cart count number at top of page.
  - This README is updated to include information about the testing steps taken to ensure site quality.
  - Site is live on GH Pages hosting.

## Grading
Each weekly assignment will be graded independently. There will not be a final grade for the entire project.

## Testing

#### Intended User Research
- User base for scarves e-commerce: middle-class and above women with moderate disposable income.
- Most likeyly devices owned: smartphone and computer (desktop or laptop).
.._sources:_ http://www.pewinternet.org/2015/10/29/technology-device-ownership-2015/

#### Mobile Device Testing
- Using Google's **PageSpeed Tools**, the resulting insight for mobile devices was a 74 out of 100 for optimization. For optimization, it suggested that CSS files could use  defer or asynchronous loading.

- **BrowserStack**: tested on iPhone 6S with iOS 9, iPhone 5 with iOS 6, iPad Air with iOS 8.3, Samsung Galaxy 4 with Android version 5.0.1, Lollipop, and Google Nexus 6 with Android version 6.1 Marshmallow.

- With **WebPageTest.org**, this site achieved scores of A for "First Byte Time", "Keep-alive Enabled", and "Compress Transfer". It only ranked a C in "Compress Images", and did very poorly (F) in "Cache static content". The site passed in the "Effective use of CDN" category.

- On **ResponsiveDesignChecker.com**, the site responded well when switching over to a smartphone device. The item columns were able to make the best use of whatever device screen size that were selected.

#### Desktop Computer Testing
- **Edge 16** and **Internet Explorer 11.2** on Windows 10: site responded well and looks OK
- **Safari 7.1** on OS X Mavericks: item grid/columns asymetrical.
- **Firefox 58.0.2** on Windows 10: ~~the function emailSubmission() doesn't work.~~ The site rendered perfectly, and JS functions are working.

- **Chrome DevTools**: the e-mail sign-up button's text doesn't fit onto button on mobile devices.
- **Firefox Developer Tools**: ~~the JavaScript doesn't seem to be working (ReferenceError: event is not defined for event.preventDefault(event);).~~ Page layout and images rendered nicely, and JS functions are working. 

- Optimization score of 45/100 with **PageSpeed Tools**. It suggested that CSS and JS files could be minified, browser caching could use leveragin, and the images could use compression.

- With **WebPageTest.org**, this site achieved scores of A for "First Byte Time", "Keep-alive Enabled", and "Compress Transfer". It only ranked a B in "Compress Images", and did very poorly (F) in "Cache static content". The site passed in the "Effective use of CDN" category.