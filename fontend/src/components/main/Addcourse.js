// import React from 'react'

// export default function Addcourse() {
//   return (
     
// const courses = document.querySelector('#courses-list'),
// shoppingCartContent = document.querySelector('#cart-content tbody'),
// clearCartBtn = document.querySelector('#clear-cart');





// loadEventListeners();

// function loadEventListeners() {

// courses.addEventListener('click', buyCourse);


// shoppingCartContent.addEventListener('click', removeCourse);

// // Clear Cart Btn
// clearCartBtn.addEventListener('click', clearCart);

// // Document Ready
// document.addEventListener('DOMContentLoaded', getFromLocalStorage);
// }





// // Functions
// function buyCourse(e) {
// e.preventDefault();
// // Use delegation to find the course that was added
// if(e.target.classList.contains('add-to-cart')) {
//     // read the course values
//     const course = e.target.parentElement.parentElement;

//     // read the values
//     getCourseInfo(course);
// }
// }
// // Reads the HTML information of the selected course
// function getCourseInfo(course) {
// // Create an Object with Course Data
// const courseInfo = {
//     image: course.querySelector('img').src,
//     title: course.querySelector('h4').textContent,
//     price: course.querySelector('.price span').textContent,
//     id: course.querySelector('a').getAttribute('data-id')
// }
// // Insert into the shopping cart
// addIntoCart(courseInfo);
// }
// // Display the selected course into the shopping cart

// function addIntoCart(course) {
// // create a <tr>
// const row = document.createElement('tr');

// // Build the template
// row.innerHTML = `
//     <tr>
//          <td>
//               <img src="${course.image}" width=100>
//          </td>
//          <td>${course.title}</td>
//          <td>${course.price}</td>
//          <td>
//               <a href="#" class="remove" data-id="${course.id}">X</a>
//          </td>
//     </tr>
// `;
// // Add into the shopping cart
// shoppingCartContent.appendChild(row);

// // Add course into Storage
// saveIntoStorage(course);
// }

// // Add the courses into the local storage

// function saveIntoStorage(course) {
// let courses = getCoursesFromStorage();

// // add the course into the array
// courses.push(course);

// // since storage only saves strings, we need to convert JSON into String
// localStorage.setItem('courses', JSON.stringify(courses) );
// }

// // Get the contents from storage
// function getCoursesFromStorage() {

// let courses;

// // if something exist on storage then we get the value, otherwise create an empty array
// if(localStorage.getItem('courses') === null) {
//     courses = [];
// } else {
//     courses = JSON.parse(localStorage.getItem('courses') );
// }
// return courses;

// }

// // remove course from the dom
// function removeCourse(e) {
// let course, courseId;

// // Remove from the dom
// if(e.target.classList.contains('remove')) {
//     e.target.parentElement.parentElement.remove();
//     course = e.target.parentElement.parentElement;
//     courseId = course.querySelector('a').getAttribute('data-id');
// }
// console.log(courseId);
// // remove from the local storage
// removeCourseLocalStorage(courseId);
// }
// // remove from local storage
// function removeCourseLocalStorage(id) {
// // get the local storage data
// let coursesLS = getCoursesFromStorage();

// // loop trought the array and find the index to remove
// coursesLS.forEach(function(courseLS, index) {
//     if(courseLS.id === id) {
//          coursesLS.splice(index, 1);
//     }
// });

// // Add the rest of the array
// localStorage.setItem('courses', JSON.stringify(coursesLS));
// }

// // Clears the shopping cart
// function clearCart() {
// // shoppingCartContent.innerHTML = '';

// while(shoppingCartContent.firstChild) {
//     shoppingCartContent.removeChild(shoppingCartContent.firstChild);
// }

// // Clear from Local Storage
// clearLocalStorage();
// }
// // Clears the whole local storage
// function clearLocalStorage() {
// localStorage.clear();
// }

// // Loads when document is ready and print courses into shopping cart

// function getFromLocalStorage() {
// let coursesLS = getCoursesFromStorage();

// // LOOP throught the courses and print into the cart
// coursesLS.forEach(function(course) {
//     // create the <tr>
//     const row = document.createElement('tr');

//     // print the content
//     row.innerHTML = `
//          <tr>
//               <td>
//                    <img src="${course.image}" width=100>
//               </td>
//               <td>${course.title}</td>
//               <td>${course.price}</td>
//               <td>
//                    <a href="#" class="remove" data-id="${course.id}">X</a>
//               </td>
//          </tr>
//     `;
//     shoppingCartContent.appendChild(row);
// });
// }
//     <div>
//         <header id="header" class="header">
//     <div class="container">
//       <div class="row">
//         <div class="four columns">
//           {/* <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/logo_og8ioo.jpg" id="logo"/> */}
//         </div>
//         <div class="two columns u-pull-right">
//           <ul>
//             <li class="submenu">
//               <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/cart_pg4skx.png" id="img-cart"/>
//               <div id="shopping-cart">
//                 <table id="cart-content" class="u-full-width">
//                   <thead>
//                     <tr>
//                       <th>Image</th>
//                       <th>Name</th>
//                       <th>Price</th>
//                       <th></th>
//                     </tr>
//                   </thead>
//                   <tbody></tbody>
//                 </table>

//                 <a href="#" id="clear-cart" class="button u-full-width">Clear Cart</a>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </header>

//   <div id="hero">
//     <div class="container">
//       <div class="row">
//         <div class="six columns">
//           <div class="hero-content">
//             <h2>Learn Something Today</h2>
//             <p>Special Offer, any course $15</p>
//             <form action="#" id="search" method="post" class="form"/>
//               <input class="u-full-width" type="text" placeholder="What Do You Want To Learn? " id="search-course"/>
//               <input type="submit" id="submit-search-course" class="submit-search-course"/>
//             {/* </form> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div class="main-bar">
//     <div class="container">
//       <div class="row">
//         <div class="four columns icon icon1">
//           <p>20,000 online courses <br/> Learn new skills</p>
//         </div>
//         <div class="four columns icon icon2">
//           <p>Expert Instructors<br/> Learn with different teach styles</p>
//         </div>
//         <div class="four columns icon icon3">
//           <p>Lifetime access <br/> learn at your own pace</p>
//         </div>
//       </div>
//     </div>

//   </div>

//   <div id="courses-list" class="container">
//     <h1 id="heading" class="heading">Online Courses</h1>
//     <div class="row">
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course1_cpyzpy.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>HTML5, CSS3, JavaScript for beginners</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="1">Add to Cart</a>
//           </div>
//         </div>
     
//       </div>
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course2_ydtulm.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>Cooking Course</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="2">Add to Cart</a>
//           </div>
//         </div>
//       </div>
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course3_lm6akn.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>Guitar for beginners</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="3">Add to Cart</a>
//           </div>
//         </div>
        
//       </div>

//     </div>
    
//     <div class="row">
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course4_nfaple.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>Orchard at home</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="4">Add to Cart</a>
//           </div>
        
//       </div>
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course5_t3x1cm.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>Home Decor with recycled products</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="5">Add to Cart</a>
//           </div>
//         </div>
        
//       </div>
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course1_cpyzpy.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>Web Design for beginners</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="6">Add to Cart</a>
//           </div>
//         </div>
       
//       </div>
//     </div>
   
//     <div class="row">
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course2_ydtulm.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>Learn to cook mexican food</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="7">Add to Cart</a>
//           </div>
//         </div>
        
//       </div>
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course3_lm6akn.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>Build a Music Studio</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="8">Add to Cart</a>
//           </div>
//         </div>
        
//       </div>
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course2_ydtulm.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>Harvest your own fruits and vegetables</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="9">Add to Cart</a>
//           </div>
//         </div>
        
//       </div>
//     </div>
    
//     <div class="row">
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course2_ydtulm.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>Cook home cookies</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="10">Add to Cart</a>
//           </div>
//         </div>
        
//       </div>
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course1_cpyzpy.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>Modern JavaScript</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="11">Add to Cart</a>
//           </div>
//         </div>
        
//       </div>
//       <div class="four columns">
//         <div class="card">
//           <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/course2_ydtulm.jpg" class="course-image u-full-width"/>
//           <div class="info-card">
//             <h4>100 Natural recipes</h4>
//             <p>Juan Pedro</p>
//             <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1529532504/stars_m4mt7a.png"/>
//             <p class="price">$200 <span class="u-pull-right ">$15</span></p>
//             <a href="#" class="u-full-width button-primary button input add-to-cart" data-id="12">Add to Cart</a>
//           </div>
//         </div>
        
//       </div>
//     </div>
    
//   </div>

//   <footer id="footer" class="footer">
//     <div class="container">
//       <div class="row">
//         <div class="four columns">
//           <nav id="primary" class="menu">
//             <a class="link" href="#">For Business</a>
//             <a class="link" href="#">Become an Instructor</a>
//             <a class="link" href="#">Mobile Applications</a>
//             <a class="link" href="#">Support</a>
//             <a class="link" href="#">Help</a>
//           </nav>
//         </div>
//         <div class="four columns">
//           <nav id="secondary" class="menu">
//             <a class="link" href="#">About Us</a>
//             <a class="link" href="#">Work with us</a>
//             <a class="link" href="#">Blog</a>
//           </nav>
//         </div>
//       </div>
//     </div>
//   </footer>

//   <script src="js/app.js"></script>

//     </div>
//     </div>
//   );
// }
