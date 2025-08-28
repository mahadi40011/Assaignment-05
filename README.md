## Answer the following questions clearly:
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?


## 1. Answer
   #### The difference between getElementById, getElementsByClassName, and querySelector, querySelectorAll is:
   ### getElementById()
   i. Return single Element    
   ii. Works only with id   
   iii. There cannot be multiple ids with the same name   

   ### getElementsByClassName()
   i. Return multiple Element   
   ii. Return HTMLCollection   
   iii. Works with class name   
   iv. There can be multiple classes with the same name   

   ### querySelector()
   i. Return the first Element of the CSS selector with the same name   
   ii. Works with CSS selector   
   iii. There can be multiple CSS selector with the same name but return the first element   

   ### querySelectorAll()
   i. Return multiple Element   
   ii. Return NodeList   
   iii. Works with CSS selector   
   iv. There can be multiple CSS selector   


## 2. Answer
   #### Using document.createElement() we can create any HTML element and Using appendChild() we can insert a new element into the DOM.      

## 3. Answer
   #### When we click on a element, the event first fires on that element, then his parent -> his parnt -> his parnt -> his parnt -> up to the root. That's called event bubbling.

## 4. Answer
   #### Event Delegation is a technique where instead of attaching individual event listeners to multiple child elements, a single event listener is added to their parent element, and events are handled for the target child through event bubbling.   
   It is very useful because here don'n have to provide a separate event listener for each child element, can handle event for all child elements by providing single event listener for the parent element.  

## 5. Answer
  #### the difference between preventDefault() and stopPropagation() methods is:
  ### preventDefault()
   This stops the predefined behavior of a DOM element 
  ### stopPropagation()
   This stops the bubbling of event
