const CATEGORIES = [
  { id: 'python',     name: 'Python',     icon: '🐍', color: '#6dd9a0' },
  { id: 'javascript', name: 'JavaScript', icon: '🟨', color: '#f5c842' },
  { id: 'webdev',     name: 'HTML & CSS', icon: '🌐', color: '#78c8f5' },
  { id: 'general',    name: 'CS Concepts',icon: '🧠', color: '#c8b8f8' },
  { id: 'databases',  name: 'Databases',  icon: '🗄️', color: '#f07575' },
  { id: 'languages',  name: 'Multi-Lang', icon: '⚡', color: '#f5a660' },
];

const ALL_QUESTIONS = {
  python: [
    { q: "What is the output of: `type([])` in Python?", opts: ["<class 'array'>","<class 'list'>","<class 'tuple'>","<class 'dict'>"], ans: 1, exp: "An empty <code>[]</code> is a <strong>list</strong> in Python. Use <code>type()</code> to inspect any object's type.", diff: "easy" },
    { q: "Which keyword is used to define a function in Python?", opts: ["function","fun","def","fn"], ans: 2, exp: "<code>def</code> is Python's keyword for defining functions. Example: <code>def my_func():</code>", diff: "easy" },
    { q: "What does `len('hello')` return?", opts: ["4","5","6","None"], ans: 1, exp: "<code>len()</code> returns the number of characters. <strong>'hello'</strong> has 5 characters.", diff: "easy" },
    { q: "Which of the following is a Python tuple?", opts: ["[1, 2, 3]","{1, 2, 3}","(1, 2, 3)","<1, 2, 3>"], ans: 2, exp: "Tuples use <strong>parentheses</strong> <code>()</code>. They are immutable — values can't be changed after creation.", diff: "easy" },
    { q: "What does the `//` operator do in Python?", opts: ["Floating point division","Floor division","Modulus","Exponent"], ans: 1, exp: "<code>//</code> performs <strong>floor division</strong>, rounding down to the nearest integer. E.g. <code>7 // 2 = 3</code>.", diff: "easy" },
    { q: "What is the result of `bool('')` in Python?", opts: ["True","False","None","Error"], ans: 1, exp: "Empty strings are <strong>falsy</strong> in Python. <code>bool('')</code> evaluates to <code>False</code>.", diff: "medium" },
    { q: "Which method adds an element to the end of a Python list?", opts: ["add()","insert()","push()","append()"], ans: 3, exp: "<code>list.append(x)</code> adds item <code>x</code> to the end. <code>insert()</code> adds at a specific index.", diff: "easy" },
    { q: "What does the `*args` syntax allow in a function?", opts: ["Keyword arguments only","Any number of positional arguments","Exactly two arguments","Named tuple packing"], ans: 1, exp: "<code>*args</code> collects any number of <strong>positional arguments</strong> into a tuple inside the function.", diff: "medium" },
    { q: "What is a Python decorator?", opts: ["A comment style","A function that modifies another function","A type annotation","A loop construct"], ans: 1, exp: "Decorators are <strong>higher-order functions</strong> that wrap another function, modifying its behavior using <code>@syntax</code>.", diff: "medium" },
    { q: "What is the output of `range(0, 10, 3)`?", opts: ["0,3,6,9","0,3,6","1,4,7,10","0,3,6,9,12"], ans: 0, exp: "<code>range(start, stop, step)</code> yields <strong>0, 3, 6, 9</strong>. Stop (10) is exclusive.", diff: "medium" },
    { q: "Which built-in function returns the largest item in an iterable?", opts: ["largest()","top()","max()","peak()"], ans: 2, exp: "<code>max(iterable)</code> returns the largest value. Similarly, <code>min()</code> returns the smallest.", diff: "easy" },
    { q: "What does `__init__` do in a Python class?", opts: ["Destroys the object","Imports the module","Initializes a new object instance","Declares static methods"], ans: 2, exp: "<code>__init__</code> is the <strong>constructor</strong> method, called automatically when a new object is created.", diff: "medium" },
    { q: "What is the output of `2 ** 3` in Python?", opts: ["6","8","9","5"], ans: 1, exp: "<code>**</code> is the <strong>exponentiation</strong> operator. 2³ = <strong>8</strong>.", diff: "easy" },
    { q: "Which Python library is widely used for data analysis?", opts: ["NumSci","Pandas","DataLib","PyData"], ans: 1, exp: "<strong>Pandas</strong> provides DataFrames and tools for data wrangling, reading CSV, Excel, and more.", diff: "easy" },
    { q: "What does `list(map(lambda x: x*2, [1,2,3]))` return?", opts: ["[1,2,3]","[2,3,4]","[2,4,6]","[1,4,9]"], ans: 2, exp: "<code>map()</code> applies the lambda to each element: 1×2=2, 2×2=4, 3×2=6 → <strong>[2, 4, 6]</strong>.", diff: "hard" },
  ],
  javascript: [
    { q: "Which keyword declares a block-scoped variable in JavaScript?", opts: ["var","let","set","dim"], ans: 1, exp: "<code>let</code> (and <code>const</code>) are block-scoped. <code>var</code> is function-scoped and can cause hoisting bugs.", diff: "easy" },
    { q: "What does `===` check in JavaScript?", opts: ["Assignment","Loose equality","Strict equality (value + type)","Reference equality"], ans: 2, exp: "<code>===</code> checks both <strong>value and type</strong>. So <code>'5' === 5</code> is <code>false</code>, unlike <code>==</code>.", diff: "easy" },
    { q: "What is the output of `typeof null`?", opts: ['"null"','"undefined"','"object"','"NaN"'], ans: 2, exp: "This is a famous JavaScript bug — <code>typeof null</code> returns <strong>'object'</strong>, even though null is not an object.", diff: "medium" },
    { q: "Which method converts a JSON string to a JavaScript object?", opts: ["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.decode()"], ans: 0, exp: "<code>JSON.parse(str)</code> converts JSON text to a JS object. <code>JSON.stringify()</code> does the reverse.", diff: "easy" },
    { q: "What does the `Array.prototype.map()` method do?", opts: ["Filters an array","Finds one element","Creates a new array by transforming each element","Sorts the array"], ans: 2, exp: "<code>map()</code> returns a <strong>new array</strong> with each element transformed by the callback. The original is unchanged.", diff: "easy" },
    { q: "What is a Promise in JavaScript?", opts: ["A synchronous function","An object representing a future async value","A type of loop","A CSS animation callback"], ans: 1, exp: "A <strong>Promise</strong> represents an eventual completion (or failure) of an async operation and its resulting value.", diff: "medium" },
    { q: "What does the spread operator `...` do?", opts: ["Creates a new scope","Spreads iterable elements into individual items","Declares rest parameters only","Loops over objects"], ans: 1, exp: "<code>...arr</code> <strong>expands</strong> an iterable. E.g. <code>[...a, ...b]</code> merges two arrays.", diff: "medium" },
    { q: "Which method removes the last element from a JavaScript array?", opts: ["shift()","splice()","pop()","delete()"], ans: 2, exp: "<code>array.pop()</code> removes and returns the <strong>last element</strong>. <code>shift()</code> removes the first.", diff: "easy" },
    { q: "What is 'event bubbling' in JavaScript?", opts: ["An animation effect","Events firing from child to parent DOM elements","Memory leaks in event listeners","A type of Promise chain"], ans: 1, exp: "Event bubbling means an event triggers on the target element, then <strong>bubbles up</strong> to parent elements.", diff: "hard" },
    { q: "What does `async/await` simplify in JavaScript?", opts: ["Loops","Class inheritance","Working with Promises","DOM manipulation"], ans: 2, exp: "<code>async/await</code> is syntactic sugar over <strong>Promises</strong>, making async code readable like synchronous code.", diff: "medium" },
    { q: "What is the value of `0.1 + 0.2 === 0.3` in JavaScript?", opts: ["true","false","undefined","NaN"], ans: 1, exp: "Due to <strong>floating point precision</strong>, <code>0.1 + 0.2 = 0.30000000000000004</code>, not 0.3.", diff: "hard" },
    { q: "Which statement correctly creates an arrow function?", opts: ["function => (x) { x * 2 }","const f = (x) => x * 2","const f = function(x) => x * 2","def f(x) => x * 2"], ans: 1, exp: "Arrow function syntax: <code>const f = (x) => x * 2</code>. They also don't bind their own <code>this</code>.", diff: "easy" },
    { q: "What is the DOM?", opts: ["A JavaScript framework","A database query language","Document Object Model — the HTML structure as a tree","A CSS preprocessor"], ans: 2, exp: "The <strong>DOM</strong> (Document Object Model) is a tree representation of an HTML page that JS can read and modify.", diff: "easy" },
    { q: "Which array method returns `true` if ALL elements pass a test?", opts: ["some()","find()","every()","includes()"], ans: 2, exp: "<code>array.every(fn)</code> returns <strong>true</strong> only if every element satisfies the callback condition.", diff: "medium" },
    { q: "What is closure in JavaScript?", opts: ["A way to close browser tabs","A function that retains access to its outer scope","A method to delete objects","A CSS animation end event"], ans: 1, exp: "A <strong>closure</strong> is a function that remembers variables from its parent scope even after the parent has finished executing.", diff: "hard" },
  ],
  webdev: [
    { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language","High Transfer Markup Logic","Hyper Terminal Meta Language","Hyper Text Machine Learning"], ans: 0, exp: "<strong>HTML</strong> (HyperText Markup Language) defines the structure and meaning of web content.", diff: "easy" },
    { q: "Which HTML tag is used for the largest heading?", opts: ["<h6>","<h3>","<h1>","<head>"], ans: 2, exp: "<code>&lt;h1&gt;</code> is the largest and most important heading. There are six levels: h1–h6.", diff: "easy" },
    { q: "What does CSS stand for?", opts: ["Cascading Style Sheets","Colorful Styling System","Computer Style Syntax","Creative Style Scripts"], ans: 0, exp: "<strong>CSS</strong> (Cascading Style Sheets) controls the visual presentation of HTML elements.", diff: "easy" },
    { q: "Which CSS property controls the text color?", opts: ["font-color","text-color","foreground","color"], ans: 3, exp: "The <code>color</code> property sets the text color. Use hex, RGB, or color names as values.", diff: "easy" },
    { q: "What is the CSS Box Model composed of?", opts: ["content, padding, border, margin","width, height, font, border","display, position, float, clear","selector, property, value, rule"], ans: 0, exp: "The box model has four layers: <strong>content → padding → border → margin</strong>, from inside out.", diff: "medium" },
    { q: "Which HTML attribute specifies a unique element identifier?", opts: ["class","name","key","id"], ans: 3, exp: "The <code>id</code> attribute gives an element a <strong>unique identifier</strong> for CSS styling or JS targeting.", diff: "easy" },
    { q: "What does `display: flex` do in CSS?", opts: ["Hides the element","Makes text bold","Enables Flexbox layout on the element","Adds a border"], ans: 2, exp: "<code>display: flex</code> turns a container into a <strong>Flexbox</strong>, enabling powerful 1D alignment and distribution.", diff: "easy" },
    { q: "Which HTML tag creates a hyperlink?", opts: ["<link>","<href>","<a>","<url>"], ans: 2, exp: "The <code>&lt;a&gt;</code> (anchor) tag creates hyperlinks using the <code>href</code> attribute for the URL.", diff: "easy" },
    { q: "What is the purpose of the `alt` attribute on an `<img>` tag?", opts: ["Sets image width","Provides fallback text for accessibility","Adds a caption below the image","Links to another image"], ans: 1, exp: "The <code>alt</code> attribute provides <strong>alternative text</strong> for screen readers and when images fail to load.", diff: "easy" },
    { q: "Which CSS selector targets elements with a specific class?", opts: ["#classname",".classname","*classname","@classname"], ans: 1, exp: "A <strong>dot prefix</strong> (<code>.classname</code>) targets class selectors. <code>#id</code> targets IDs.", diff: "easy" },
    { q: "What does `position: absolute` do in CSS?", opts: ["Fixes element to viewport","Removes from normal flow, positioned relative to nearest positioned ancestor","Centers the element","Makes element sticky on scroll"], ans: 1, exp: "<code>absolute</code> removes the element from the document flow and positions it relative to its <strong>nearest positioned ancestor</strong>.", diff: "medium" },
    { q: "Which CSS unit is relative to the font-size of the root element?", opts: ["em","px","vh","rem"], ans: 3, exp: "<code>rem</code> (root em) is relative to the <strong>root element's</strong> font size, making it predictable for scaling.", diff: "medium" },
    { q: "What is the correct HTML5 doctype declaration?", opts: ["<!DOCTYPE HTML5>","<DOCTYPE html>","<!DOCTYPE html>","<html doctype='5'>"], ans: 2, exp: "<code>&lt;!DOCTYPE html&gt;</code> tells the browser to use <strong>HTML5 standards</strong> mode for rendering.", diff: "easy" },
    { q: "Which CSS property creates space INSIDE an element's border?", opts: ["margin","spacing","gap","padding"], ans: 3, exp: "<code>padding</code> creates space <strong>inside</strong> the border. <code>margin</code> creates space <strong>outside</strong> the border.", diff: "easy" },
    { q: "What does `z-index` control in CSS?", opts: ["Zoom level","Stacking order on the Z axis","Letter spacing","Animation speed"], ans: 1, exp: "<code>z-index</code> controls the <strong>stacking order</strong> of overlapping elements. Higher values appear on top.", diff: "medium" },
  ],
  general: [
    { q: "What does OOP stand for?", opts: ["Object Oriented Programming","Output Optimized Processing","Open Object Protocol","Ordered Operation Pipeline"], ans: 0, exp: "<strong>OOP</strong> is a paradigm based on 'objects' that bundle data and behavior, used in Java, Python, C++, and more.", diff: "easy" },
    { q: "What is a 'stack' data structure?", opts: ["First-In First-Out queue","Last-In First-Out structure","A sorted linked list","A key-value store"], ans: 1, exp: "A <strong>stack</strong> follows LIFO — the last item added is the first removed. Think of a stack of plates.", diff: "easy" },
    { q: "What does 'Big O notation' describe?", opts: ["The size of a program in bytes","The algorithm's performance as input grows","The number of bugs in code","The memory address layout"], ans: 1, exp: "<strong>Big O</strong> expresses how an algorithm's time or space requirements scale relative to the input size.", diff: "medium" },
    { q: "What is recursion in programming?", opts: ["A type of loop","A function calling itself","A database join","A UI design pattern"], ans: 1, exp: "<strong>Recursion</strong> is when a function calls itself with a smaller input, moving toward a base case to stop.", diff: "easy" },
    { q: "What is Git primarily used for?", opts: ["Database management","Machine learning","Version control","Web server hosting"], ans: 2, exp: "<strong>Git</strong> is a distributed version control system for tracking changes in source code over time.", diff: "easy" },
    { q: "What does API stand for?", opts: ["Application Programming Interface","Automated Program Integration","Advanced Protocol Input","Applied Programming Index"], ans: 0, exp: "An <strong>API</strong> defines how software components communicate — like a contract between a server and a client.", diff: "easy" },
    { q: "What is the time complexity of binary search?", opts: ["O(n)","O(n²)","O(log n)","O(1)"], ans: 2, exp: "Binary search halves the search space each step, giving it <strong>O(log n)</strong> time complexity.", diff: "medium" },
    { q: "What is a 'null pointer' or 'null reference'?", opts: ["A pointer to zero memory","A reference that points to no valid object","A deleted variable","An uninitialized integer"], ans: 1, exp: "A <strong>null reference</strong> means a variable points to no object — dereferencing it causes a null pointer exception.", diff: "medium" },
    { q: "What is the difference between compiled and interpreted languages?", opts: ["Compiled runs in a browser; interpreted doesn't","Compiled translates to machine code ahead-of-time; interpreted runs line-by-line","Compiled uses more memory always","There is no difference"], ans: 1, exp: "<strong>Compiled</strong> (C, Go) translates to machine code before run. <strong>Interpreted</strong> (Python, JS) executes source line by line.", diff: "medium" },
    { q: "What is a 'hash table'?", opts: ["A sorted array","A data structure that maps keys to values via a hash function","A type of binary tree","A network routing table"], ans: 1, exp: "A <strong>hash table</strong> uses a hash function to map keys to bucket indices, enabling O(1) average lookup.", diff: "medium" },
    { q: "What does DRY stand for in coding principles?", opts: ["Debug, Run, Yield","Don't Repeat Yourself","Dynamic Runtime Yield","Direct Result Yield"], ans: 1, exp: "<strong>DRY</strong> (Don't Repeat Yourself) means avoid duplication — write reusable functions and modules instead.", diff: "easy" },
    { q: "What is the purpose of a 'constructor' in OOP?", opts: ["Destroys old objects","Initializes a new object's state when it's created","Renders the UI","Compiles the class"], ans: 1, exp: "A <strong>constructor</strong> is a special method called when instantiating a class, setting up the object's initial state.", diff: "easy" },
    { q: "What is a REST API?", opts: ["A real-time socket protocol","An architectural style for web services using HTTP methods","A database query language","A CSS framework"], ans: 1, exp: "<strong>REST</strong> (Representational State Transfer) uses HTTP methods (GET, POST, PUT, DELETE) to interact with resources.", diff: "medium" },
    { q: "In version control, what does 'merge conflict' mean?", opts: ["A missing file","Two branches changed the same lines differently and Git can't auto-resolve","A failed build","A deleted commit"], ans: 1, exp: "A <strong>merge conflict</strong> happens when two branches edit the same code area — you must manually choose which version to keep.", diff: "medium" },
    { q: "What does SOLID stand for in software design?", opts: ["A set of 5 principles for OOP design","A database indexing method","A JavaScript testing framework","A type of encryption"], ans: 0, exp: "<strong>SOLID</strong> = Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion — five OOP design principles.", diff: "hard" },
  ],
  databases: [
    { q: "What does SQL stand for?", opts: ["Structured Query Language","Simple Query Logic","Standard Queue Language","Stored Query Library"], ans: 0, exp: "<strong>SQL</strong> (Structured Query Language) is the standard language for managing relational databases.", diff: "easy" },
    { q: "Which SQL keyword retrieves data from a table?", opts: ["FETCH","GET","SELECT","PULL"], ans: 2, exp: "<code>SELECT</code> retrieves data. Basic syntax: <code>SELECT column FROM table WHERE condition;</code>", diff: "easy" },
    { q: "What is a PRIMARY KEY in a database?", opts: ["The first column in a table","A unique identifier for each row","A foreign reference to another table","An indexed search field"], ans: 1, exp: "A <strong>PRIMARY KEY</strong> uniquely identifies each record in a table. It must be unique and not null.", diff: "easy" },
    { q: "What does the `JOIN` clause do in SQL?", opts: ["Deletes duplicate rows","Combines rows from two or more tables based on a related column","Sorts the result set","Groups results by a column"], ans: 1, exp: "<code>JOIN</code> combines rows from multiple tables using a shared column (usually a foreign key relationship).", diff: "easy" },
    { q: "What is a FOREIGN KEY?", opts: ["A key stored outside the database","A field that references the PRIMARY KEY of another table","An encrypted primary key","A key for external API access"], ans: 1, exp: "A <strong>FOREIGN KEY</strong> links two tables — it points to a PRIMARY KEY in another table to enforce referential integrity.", diff: "medium" },
    { q: "What is the difference between SQL and NoSQL databases?", opts: ["SQL is newer","SQL is relational with fixed schemas; NoSQL is flexible and non-relational","NoSQL is always faster","They are identical"], ans: 1, exp: "<strong>SQL</strong> databases use tables with fixed schemas. <strong>NoSQL</strong> (MongoDB, Redis) stores flexible JSON-like documents or key-value pairs.", diff: "medium" },
    { q: "Which SQL command removes all rows from a table without deleting the table?", opts: ["DROP","DELETE","REMOVE","TRUNCATE"], ans: 3, exp: "<code>TRUNCATE</code> removes all rows fast but keeps the table structure. <code>DROP</code> deletes the table entirely.", diff: "medium" },
    { q: "What does `GROUP BY` do in SQL?", opts: ["Sorts rows alphabetically","Merges duplicate tables","Groups rows sharing a column value for aggregate functions","Filters rows before selecting"], ans: 2, exp: "<code>GROUP BY</code> groups rows with the same value so you can apply aggregates like <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code>.", diff: "medium" },
    { q: "What is an INDEX in a database?", opts: ["A table of contents for the database","A data structure that speeds up query lookups at the cost of storage","A type of JOIN","A primary key alias"], ans: 1, exp: "An <strong>index</strong> is like a book index — it lets the DB engine find rows quickly without scanning the whole table.", diff: "medium" },
    { q: "Which NoSQL database stores data as key-value pairs and is often used for caching?", opts: ["MongoDB","PostgreSQL","Redis","Cassandra"], ans: 2, exp: "<strong>Redis</strong> is an in-memory key-value store known for blazing speed, widely used for caching and sessions.", diff: "medium" },
    { q: "What does ACID stand for in database transactions?", opts: ["Atomicity, Consistency, Isolation, Durability","Automatic, Cached, Indexed, Distributed","Access, Create, Insert, Delete","Atomic, Complete, Instant, Dynamic"], ans: 0, exp: "<strong>ACID</strong> guarantees transactions are Atomic (all-or-nothing), Consistent, Isolated from others, and Durable after commit.", diff: "hard" },
    { q: "What is database normalization?", opts: ["Encrypting the database","Organizing tables to reduce redundancy and improve integrity","Compressing database files","Converting SQL to NoSQL"], ans: 1, exp: "<strong>Normalization</strong> organizes a database into tables and columns to minimize redundancy and dependency.", diff: "hard" },
    { q: "Which SQL clause filters groups after a GROUP BY?", opts: ["WHERE","FILTER","HAVING","AFTER"], ans: 2, exp: "<code>HAVING</code> filters aggregated groups (e.g., <code>HAVING COUNT(*) > 5</code>). <code>WHERE</code> filters rows before grouping.", diff: "hard" },
    { q: "What does ORM stand for?", opts: ["Object-Relational Mapping","Optimized Record Management","Open Repository Method","Ordered Relational Model"], ans: 0, exp: "An <strong>ORM</strong> maps database tables to objects in code (e.g., SQLAlchemy for Python, Prisma for Node.js).", diff: "medium" },
    { q: "What is a database transaction?", opts: ["A paid API call","A sequence of operations treated as a single unit that either fully succeeds or fully fails","A type of database backup","A table join operation"], ans: 1, exp: "A <strong>transaction</strong> groups SQL operations atomically — if any step fails, all changes are rolled back.", diff: "medium" },
  ],
  languages: [
    { q: "Which language is primarily used for iOS app development?", opts: ["Kotlin","Dart","Swift","Objective-J"], ans: 2, exp: "<strong>Swift</strong>, created by Apple in 2014, is the primary language for iOS and macOS app development.", diff: "easy" },
    { q: "Which language runs on the Java Virtual Machine (JVM)?", opts: ["Go","Rust","Kotlin","TypeScript"], ans: 2, exp: "<strong>Kotlin</strong> runs on the JVM and is fully interoperable with Java. It's Google's preferred Android language.", diff: "medium" },
    { q: "What is TypeScript?", opts: ["A Python library","A superset of JavaScript that adds static typing","A CSS preprocessor","A compiled systems language"], ans: 1, exp: "<strong>TypeScript</strong> extends JavaScript with optional static types, catching errors at compile time before runtime.", diff: "easy" },
    { q: "Which language was designed with memory safety without a garbage collector?", opts: ["Go","Python","Rust","C#"], ans: 2, exp: "<strong>Rust</strong> uses an ownership system to guarantee memory safety at compile time without needing garbage collection.", diff: "medium" },
    { q: "In Java, what keyword prevents a variable from being reassigned?", opts: ["static","const","readonly","final"], ans: 3, exp: "<code>final</code> in Java makes a variable constant. In JavaScript/Java, <code>const</code>/<code>final</code> prevent reassignment.", diff: "medium" },
    { q: "Which language is most commonly used for data science and ML?", opts: ["R","Julia","MATLAB","Python"], ans: 3, exp: "<strong>Python</strong> dominates data science with libraries like NumPy, Pandas, TensorFlow, and scikit-learn.", diff: "easy" },
    { q: "What is Go (Golang) known for?", opts: ["UI development","High-performance concurrency and simplicity","Machine learning","Mobile apps"], ans: 1, exp: "<strong>Go</strong>, created by Google, is valued for simplicity, fast compilation, and built-in goroutines for concurrency.", diff: "medium" },
    { q: "What does PHP stand for?", opts: ["Personal Hypertext Processor","PHP: Hypertext Preprocessor","Public Hyper Protocol","Pre-compiled HTML Parser"], ans: 1, exp: "<strong>PHP</strong> is a recursive acronym: 'PHP: Hypertext Preprocessor'. It's widely used for server-side web development.", diff: "medium" },
    { q: "Which language uses `println!()` as its print macro?", opts: ["Swift","Kotlin","Go","Rust"], ans: 3, exp: "<strong>Rust</strong> uses <code>println!()</code> as a macro (note the <code>!</code>). Regular functions in Rust don't have the <code>!</code>.", diff: "hard" },
    { q: "What is C++ primarily an extension of?", opts: ["Java","C","Pascal","Assembly"], ans: 1, exp: "<strong>C++</strong> was created by Bjarne Stroustrup as an extension of <strong>C</strong>, adding classes and OOP features.", diff: "easy" },
    { q: "Which language is Ruby on Rails built with?", opts: ["Python","PHP","Ruby","Perl"], ans: 2, exp: "<strong>Ruby on Rails</strong> is a web framework written in Ruby, known for 'convention over configuration'.", diff: "easy" },
    { q: "What feature does Kotlin have that Java lacks by default?", opts: ["Loops","Classes","Null safety at the type system level","Interfaces"], ans: 2, exp: "Kotlin's type system distinguishes <strong>nullable vs non-nullable</strong> types, preventing null pointer exceptions at compile time.", diff: "hard" },
    { q: "Which language is widely used for embedded systems and operating systems?", opts: ["Python","JavaScript","Ruby","C"], ans: 3, exp: "<strong>C</strong> is the foundation of operating systems (Linux, Windows) and embedded systems due to direct memory control.", diff: "easy" },
    { q: "What is Dart primarily used for?", opts: ["Backend APIs","Flutter cross-platform app development","Data analysis","Blockchain"], ans: 1, exp: "<strong>Dart</strong> is Google's language used with the <strong>Flutter</strong> framework to build cross-platform apps for mobile, web, and desktop.", diff: "medium" },
    { q: "What makes Python an 'interpreted' language?", opts: ["It uses a JIT compiler","Source code runs line-by-line via an interpreter at runtime","It compiles to native machine code","It requires a virtual machine like Java"], ans: 1, exp: "Python executes source code <strong>line-by-line</strong> at runtime through an interpreter (CPython), without a separate compile step.", diff: "medium" },
  ],
};

// State
let state = {
  category: CATEGORIES[0].id,
  difficulty: 'easy',
  questions: [],
  currentIndex: 0,
  score: 0,
  correctCount: 0,
  wrongCount: 0,
  streak: 0,
  maxStreak: 0,
  timerInterval: null,
  timeLeft: 15,
  answered: false,
  answers: [],
};

// DOM
const screens = {
  start:  document.getElementById('screen-start'),
  quiz:   document.getElementById('screen-quiz'),
  result: document.getElementById('screen-result'),
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// Build category grid
const catGrid = document.getElementById('category-grid');
CATEGORIES.forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'category-btn' + (cat.id === state.category ? ' selected' : '');
  btn.dataset.id = cat.id;
  btn.innerHTML = `<span class="cat-icon">${cat.icon}</span><span class="cat-name">${cat.name}</span><span class="cat-count">${ALL_QUESTIONS[cat.id].length} questions</span>`;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.category = cat.id;
  });
  catGrid.appendChild(btn);
});

// Difficulty
document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.difficulty = btn.dataset.diff;
  });
});

// Start
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('retry-btn').addEventListener('click', () => startQuiz());
document.getElementById('back-btn').addEventListener('click', () => showScreen('start'));

function filterQuestions(cat, diff) {
  const pool = ALL_QUESTIONS[cat] || [];
  let filtered = pool.filter(q => q.diff === diff);
  if (filtered.length < 5) filtered = pool;
  return shuffle(filtered).slice(0, 10);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  state.questions = filterQuestions(state.category, state.difficulty);
  state.currentIndex = 0;
  state.score = 0;
  state.correctCount = 0;
  state.wrongCount = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.answers = [];
  showScreen('quiz');
  renderQuestion();
}

function getTimerSeconds() {
  return { easy: 20, medium: 15, hard: 10 }[state.difficulty] || 15;
}

function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const total = state.questions.length;
  state.answered = false;

  document.getElementById('q-num').textContent = state.currentIndex + 1;
  document.getElementById('q-total').textContent = total;
  document.getElementById('progress-fill').style.width = `${(state.currentIndex / total) * 100}%`;
  document.getElementById('q-cat-tag').innerHTML = `${CATEGORIES.find(c=>c.id===state.category)?.icon || ''} ${CATEGORIES.find(c=>c.id===state.category)?.name || state.category}`;
  document.getElementById('question-text').textContent = q.q;

  const expBox = document.getElementById('explanation-box');
  expBox.style.display = 'none';
  expBox.innerHTML = '';

  const nextBtn = document.getElementById('next-btn');
  nextBtn.style.display = 'none';

  const streakArea = document.getElementById('streak-area');
  if (state.streak >= 2) {
    streakArea.innerHTML = `<span style="color:var(--muted)">🔥 ${state.streak} answer streak!</span>`;
  } else {
    streakArea.innerHTML = '';
  }

  // Render options
  const optList = document.getElementById('options-list');
  optList.innerHTML = '';
  const labels = ['A','B','C','D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    const label = document.createElement('span');
    label.className = 'opt-label';
    label.textContent = labels[i];
    const text = document.createElement('span');
    text.textContent = opt;
    btn.appendChild(label);
    btn.appendChild(text);
    btn.addEventListener('click', () => handleAnswer(i));
    optList.appendChild(btn);
  });

  // Timer
  clearInterval(state.timerInterval);
  state.timeLeft = getTimerSeconds();
  updateTimerUI();
  state.timerInterval = setInterval(tickTimer, 1000);
}

function tickTimer() {
  state.timeLeft--;
  updateTimerUI();
  if (state.timeLeft <= 0) {
    clearInterval(state.timerInterval);
    if (!state.answered) handleAnswer(-1); // timeout = wrong
  }
}

function updateTimerUI() {
  const wrap = document.getElementById('timer-wrap');
  const val = document.getElementById('timer-val');
  val.textContent = state.timeLeft;
  wrap.classList.toggle('urgent', state.timeLeft <= 5);
}

function handleAnswer(selectedIdx) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const q = state.questions[state.currentIndex];
  const correct = q.ans;
  const isCorrect = selectedIdx === correct;
  const options = document.querySelectorAll('.option');

  options.forEach((opt, i) => {
    opt.classList.add('disabled');
    if (i === correct) opt.classList.add(selectedIdx === -1 ? 'reveal' : 'correct');
    if (i === selectedIdx && !isCorrect) opt.classList.add('wrong');
  });

  if (isCorrect) {
    const timeBonus = Math.max(0, state.timeLeft);
    const diffBonus = { easy: 10, medium: 15, hard: 20 }[state.difficulty] || 10;
    state.score += diffBonus + timeBonus;
    state.correctCount++;
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
  } else {
    state.wrongCount++;
    state.streak = 0;
  }

  state.answers.push({ q: q.q, correct: isCorrect, selected: selectedIdx, ans: correct, opts: q.opts });

  const expBox = document.getElementById('explanation-box');
  expBox.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : selectedIdx === -1 ? '⏱ Time\'s up!' : '✗ Incorrect.'}</strong> ${q.exp}`;
  expBox.style.display = 'block';

  const nextBtn = document.getElementById('next-btn');
  nextBtn.style.display = 'block';
  nextBtn.textContent = state.currentIndex < state.questions.length - 1 ? 'Next Question →' : 'See Results →';
}

function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  showScreen('result');
  const total = state.questions.length;
  const pct = Math.round((state.correctCount / total) * 100);

  document.getElementById('res-correct').textContent = state.correctCount;
  document.getElementById('res-wrong').textContent = state.wrongCount;
  document.getElementById('res-score').textContent = state.score;
  document.getElementById('accuracy-pct').textContent = pct + '%';

  const fill = document.getElementById('score-bar-fill');
  fill.style.width = '0%';
  setTimeout(() => { fill.style.width = pct + '%'; }, 100);

  let emoji, title, sub;
  if (pct === 100) { emoji='🏆'; title='Perfect Score!'; sub='You nailed every question. Incredible!'; }
  else if (pct >= 80) { emoji='🎉'; title='Excellent Work!'; sub=`${pct}% accuracy — you really know your stuff.`; }
  else if (pct >= 60) { emoji='👍'; title='Good Job!'; sub=`${pct}% accuracy — solid performance!`; }
  else if (pct >= 40) { emoji='📚'; title='Keep Practicing!'; sub=`${pct}% accuracy — review the explanations and try again.`; }
  else { emoji='💪'; title='Keep Going!'; sub=`${pct}% accuracy — everyone starts somewhere. Try again!`; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-sub').textContent = sub;

  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = '';
  state.answers.forEach(a => {
    const div = document.createElement('div');
    div.className = 'review-item ' + (a.correct ? 'correct-item' : 'wrong-item');
    div.innerHTML = `
      <span class="review-icon">${a.correct ? '✓' : '✗'}</span>
      <div class="review-q">
        <strong>${a.q}</strong>
        ${a.correct ? `Your answer: <em style="color:var(--correct)">${a.opts[a.ans]}</em>` : `Your answer: <em style="color:var(--wrong)">${a.selected === -1 ? 'Timed out' : a.opts[a.selected]}</em> · Correct: <em style="color:var(--correct)">${a.opts[a.ans]}</em>`}
      </div>`;
    reviewList.appendChild(div);
  });
}