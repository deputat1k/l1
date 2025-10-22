# 🧠 Lab Work #4 — JavaScript Practice

## 📘 Description
This project continues the development of the previous lab, adding JavaScript functionality to an existing website built with Tailwind CSS.  
The goal was to practice using core JavaScript concepts such as IIFE, array methods, Spread operator, Set, bind, and closures.

---

## 🏗 Project Structure
l1/
├── src/                # HTML/CSS/JS source files
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Dependencies and scripts
├── .gitignore          # Ignored system and Node files
└── ...



## 🚀 How to Run
# 1. Clone the repository
```
git clone https://github.com/deputat1k/l1.git
```
# 2. Navigate to the project folder
```
cd l1
```
# 3. Install dependencies
```
npm install
```
# 4. Run Tailwind in watch mode (for live changes)
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
# 5. Open index.html in your browser



## 🧩 Implemented Functionality

1. Immediately Invoked Function Expression (IIFE)
   Automatically logs the current page URL using window.location.href.

2. Array Methods — map, filter, reduce
   Processes a numeric array:
   - Doubles all values using map.
   - Filters numbers greater than 25 using filter.
   - Calculates the total sum using reduce.

3. Spread Operator
   Expands an array into separate arguments for a function that multiplies two numbers.

4. Set
   Creates a collection of unique elements and removes duplicates automatically.

5. bind Method
   Binds the context of one object’s method (getName) to another object using bind().

6. Closure
   Implements a counter using a closure to store and modify the internal state (increment / decrement).

## 📷 Screenshot
<p align="center">
 <<img width="1920" height="882" alt="image" src="https://github.com/user-attachments/assets/713f8ab2-9c97-4bb7-8ee5-eb3bcd02b6e3" />
/>
</p>
