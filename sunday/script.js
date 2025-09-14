// Quiz Application JavaScript

// Quiz Data Structure with Categories
const quizCategories = {
    javascript: [
        {
            question: "What does 'typeof null' return in JavaScript?",
            options: [
                "'null'",
                "'undefined'", 
                "'object'",
                "'number'"
            ],
            correct: 2,
            explanation: "In JavaScript, typeof null returns 'object', which is a well-known bug that has been preserved for backward compatibility."
        },
        {
            question: "Which method is used to add an element to the end of an array?",
            options: [
                "append()",
                "push()",
                "add()",
                "insert()"
            ],
            correct: 1,
            explanation: "The push() method adds one or more elements to the end of an array and returns the new length."
        },
        {
            question: "What is the result of '2' + 2 in JavaScript?",
            options: [
                "4",
                "22",
                "Error",
                "undefined"
            ],
            correct: 1,
            explanation: "When using the + operator with a string and a number, JavaScript converts the number to a string and concatenates them."
        },
        {
            question: "Which keyword is used to declare a variable with block scope?",
            options: [
                "var",
                "let",
                "const",
                "both let and const"
            ],
            correct: 3,
            explanation: "Both let and const declare variables with block scope, while var has function scope."
        },
        {
            question: "What is the purpose of the 'this' keyword in JavaScript?",
            options: [
                "It refers to the current function",
                "It refers to the global object",
                "It refers to the object that is executing the current function",
                "It is always undefined"
            ],
            correct: 2,
            explanation: "The 'this' keyword refers to the object that is executing the current function, and its value depends on how the function is called."
        },
        {
            question: "Which method creates a new array with all elements that pass a test?",
            options: [
                "map()",
                "filter()",
                "reduce()",
                "forEach()"
            ],
            correct: 1,
            explanation: "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
        },
        {
            question: "What is a closure in JavaScript?",
            options: [
                "A way to close a program",
                "A function that has access to variables in its outer scope",
                "A type of loop",
                "A method to stop execution"
            ],
            correct: 1,
            explanation: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned."
        },
        {
            question: "Which of the following is NOT a JavaScript data type?",
            options: [
                "String",
                "Boolean",
                "Float",
                "Symbol"
            ],
            correct: 2,
            explanation: "Float is not a JavaScript data type. JavaScript has Number for numeric values, which includes both integers and floating-point numbers."
        },
        {
            question: "What does the 'async' keyword do?",
            options: [
                "Makes the function run faster",
                "Makes the function return a Promise",
                "Makes the function synchronous",
                "Prevents the function from being called"
            ],
            correct: 1,
            explanation: "The async keyword makes a function return a Promise and allows the use of the await keyword within it."
        },
        {
            question: "Which method is used to remove the last element from an array?",
            options: [
                "remove()",
                "pop()",
                "delete()",
                "shift()"
            ],
            correct: 1,
            explanation: "The pop() method removes the last element from an array and returns that element."
        }
    ],
    python: [
        {
            question: "What is the output of print(2 ** 3) in Python?",
            options: [
                "6",
                "8",
                "9",
                "Error"
            ],
            correct: 1,
            explanation: "The ** operator is used for exponentiation in Python, so 2 ** 3 equals 8."
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: [
                "function",
                "def",
                "func",
                "define"
            ],
            correct: 1,
            explanation: "The 'def' keyword is used to define a function in Python."
        },
        {
            question: "What is the correct way to create a list in Python?",
            options: [
                "list = []",
                "list = {}",
                "list = ()",
                "list = <>"
            ],
            correct: 0,
            explanation: "Lists in Python are created using square brackets []."
        },
        {
            question: "Which method is used to add an element to the end of a list?",
            options: [
                "add()",
                "append()",
                "insert()",
                "push()"
            ],
            correct: 1,
            explanation: "The append() method adds an element to the end of a list in Python."
        },
        {
            question: "What is the result of len('hello')?",
            options: [
                "4",
                "5",
                "6",
                "Error"
            ],
            correct: 1,
            explanation: "The len() function returns the length of the string, which is 5 for 'hello'."
        },
        {
            question: "Which of the following is a mutable data type in Python?",
            options: [
                "String",
                "Tuple",
                "List",
                "Integer"
            ],
            correct: 2,
            explanation: "Lists are mutable in Python, meaning they can be changed after creation, unlike strings and tuples."
        },
        {
            question: "What does the 'self' parameter represent in Python class methods?",
            options: [
                "The class itself",
                "The instance of the class",
                "The parent class",
                "The global scope"
            ],
            correct: 1,
            explanation: "The 'self' parameter represents the instance of the class and is used to access variables and methods of the class."
        },
        {
            question: "Which loop is used to iterate over a sequence in Python?",
            options: [
                "for loop",
                "while loop",
                "do-while loop",
                "foreach loop"
            ],
            correct: 0,
            explanation: "The for loop is commonly used to iterate over sequences like lists, tuples, strings, etc. in Python."
        },
        {
            question: "What is the correct way to import a module in Python?",
            options: [
                "import module",
                "include module",
                "using module",
                "require module"
            ],
            correct: 0,
            explanation: "The 'import' statement is used to import modules in Python."
        },
        {
            question: "Which method is used to convert a string to lowercase in Python?",
            options: [
                "toLower()",
                "lowercase()",
                "lower()",
                "to_lowercase()"
            ],
            correct: 2,
            explanation: "The lower() method converts all characters in a string to lowercase in Python."
        }
    ],
    java: [
        {
            question: "Which keyword is used to create a constant in Java?",
            options: [
                "const",
                "final",
                "static",
                "immutable"
            ],
            correct: 1,
            explanation: "The 'final' keyword is used to create constants in Java, making variables unchangeable after initialization."
        },
        {
            question: "What is the default value of a boolean variable in Java?",
            options: [
                "true",
                "false",
                "null",
                "0"
            ],
            correct: 1,
            explanation: "The default value of a boolean variable in Java is false."
        },
        {
            question: "Which method is the entry point of a Java program?",
            options: [
                "start()",
                "main()",
                "run()",
                "execute()"
            ],
            correct: 1,
            explanation: "The main() method with the signature 'public static void main(String[] args)' is the entry point of a Java program."
        },
        {
            question: "What is the size of an int variable in Java?",
            options: [
                "16 bits",
                "32 bits",
                "64 bits",
                "8 bits"
            ],
            correct: 1,
            explanation: "An int variable in Java is 32 bits in size, with a range from -2,147,483,648 to 2,147,483,647."
        },
        {
            question: "Which of the following is not a Java access modifier?",
            options: [
                "public",
                "private",
                "protected",
                "internal"
            ],
            correct: 3,
            explanation: "Java has public, private, protected, and default (package-private) access modifiers, but not 'internal'."
        },
        {
            question: "What is the purpose of the 'super' keyword in Java?",
            options: [
                "To call the parent class constructor",
                "To access parent class methods",
                "To access parent class variables",
                "All of the above"
            ],
            correct: 3,
            explanation: "The 'super' keyword can be used to call the parent class constructor, access parent class methods, and access parent class variables."
        },
        {
            question: "Which interface is used to implement comparable objects in Java?",
            options: [
                "Comparator",
                "Comparable",
                "Equals",
                "Sort"
            ],
            correct: 1,
            explanation: "The Comparable interface is used to define the natural ordering of objects in Java."
        },
        {
            question: "What is the result of 10 / 3 in Java?",
            options: [
                "3.33",
                "3",
                "3.0",
                "Error"
            ],
            correct: 1,
            explanation: "In Java, dividing two integers performs integer division, so 10 / 3 equals 3."
        },
        {
            question: "Which collection class does not allow duplicate elements?",
            options: [
                "ArrayList",
                "LinkedList",
                "HashSet",
                "Vector"
            ],
            correct: 2,
            explanation: "HashSet is a Set implementation that does not allow duplicate elements."
        },
        {
            question: "What is the purpose of garbage collection in Java?",
            options: [
                "To clean up unused objects",
                "To optimize memory usage",
                "To prevent memory leaks",
                "All of the above"
            ],
            correct: 3,
            explanation: "Garbage collection automatically cleans up unused objects, optimizes memory usage, and helps prevent memory leaks."
        }
    ],
    cpp: [
        {
            question: "Which symbol is used for comments in C++?",
            options: [
                "// and /* */",
                "# and ##",
                "<!-- and -->",
                "' and \""
            ],
            correct: 0,
            explanation: "C++ uses // for single-line comments and /* */ for multi-line comments."
        },
        {
            question: "What is the correct way to declare a pointer in C++?",
            options: [
                "pointer ptr;",
                "*ptr;",
                "int *ptr;",
                "ptr* int;"
            ],
            correct: 2,
            explanation: "The correct way to declare a pointer in C++ is 'int *ptr;' where * indicates a pointer variable."
        },
        {
            question: "Which keyword is used for dynamic memory allocation in C++?",
            options: [
                "alloc",
                "new",
                "malloc",
                "create"
            ],
            correct: 1,
            explanation: "The 'new' keyword is used for dynamic memory allocation in C++."
        },
        {
            question: "What is the size of a char variable in C++?",
            options: [
                "4 bits",
                "8 bits",
                "16 bits",
                "32 bits"
            ],
            correct: 1,
            explanation: "A char variable in C++ is typically 8 bits (1 byte) in size."
        },
        {
            question: "Which of the following is not a C++ data type?",
            options: [
                "int",
                "float",
                "string",
                "boolean"
            ],
            correct: 3,
            explanation: "C++ does not have a built-in 'boolean' data type; it uses 'bool' instead."
        },
        {
            question: "What is the purpose of the 'virtual' keyword in C++?",
            options: [
                "To create virtual functions",
                "To enable polymorphism",
                "To allow function overriding",
                "All of the above"
            ],
            correct: 3,
            explanation: "The 'virtual' keyword enables polymorphism, allows function overriding, and is used to create virtual functions."
        },
        {
            question: "Which operator is used for dereferencing a pointer?",
            options: [
                "&",
                "*",
                "->",
                "."
            ],
            correct: 1,
            explanation: "The * operator is used to dereference a pointer, accessing the value at the memory address it points to."
        },
        {
            question: "What is the correct way to include a header file in C++?",
            options: [
                "include <header.h>",
                "#include <header.h>",
                "import <header.h>",
                "using <header.h>"
            ],
            correct: 1,
            explanation: "The correct way to include a header file in C++ is '#include <header.h>'."
        },
        {
            question: "Which of the following is a C++ standard library container?",
            options: [
                "Array",
                "List",
                "Vector",
                "Collection"
            ],
            correct: 2,
            explanation: "Vector is a standard library container in C++, part of the Standard Template Library (STL)."
        },
        {
            question: "What is the purpose of the 'const' keyword in C++?",
            options: [
                "To declare constants",
                "To prevent modification",
                "To enable compiler optimizations",
                "All of the above"
            ],
            correct: 3,
            explanation: "The 'const' keyword declares constants, prevents modification, and enables compiler optimizations."
        }
    ],
    csharp: [
        {
            question: "Which keyword is used to declare a constant in C#?",
            options: [
                "const",
                "final",
                "readonly",
                "immutable"
            ],
            correct: 0,
            explanation: "The 'const' keyword is used to declare compile-time constants in C#."
        },
        {
            question: "What is the entry point method of a C# program?",
            options: [
                "Start()",
                "Main()",
                "Run()",
                "Begin()"
            ],
            correct: 1,
            explanation: "The Main() method is the entry point of a C# program."
        },
        {
            question: "Which of the following is a value type in C#?",
            options: [
                "string",
                "object",
                "int",
                "Array"
            ],
            correct: 2,
            explanation: "int is a value type in C#, while string, object, and Array are reference types."
        },
        {
            question: "What is the correct way to create a property in C#?",
            options: [
                "public int Age { get; set; }",
                "public property int Age;",
                "public int Age() { get; set; }",
                "public Age: int { get; set; }"
            ],
            correct: 0,
            explanation: "The correct syntax for a property in C# is 'public int Age { get; set; }'."
        },
        {
            question: "Which keyword is used to handle exceptions in C#?",
            options: [
                "try",
                "catch",
                "throw",
                "All of the above"
            ],
            correct: 3,
            explanation: "C# uses try, catch, and throw keywords for exception handling."
        },
        {
            question: "What is the purpose of the 'using' statement in C#?",
            options: [
                "To import namespaces",
                "To dispose of resources",
                "To create aliases",
                "All of the above"
            ],
            correct: 3,
            explanation: "The 'using' statement can import namespaces, dispose of resources, and create aliases."
        },
        {
            question: "Which of the following is a C# collection type?",
            options: [
                "List<T>",
                "Dictionary<T>",
                "HashSet<T>",
                "All of the above"
            ],
            correct: 3,
            explanation: "C# provides various collection types including List<T>, Dictionary<T>, and HashSet<T>."
        },
        {
            question: "What is the result of 'Hello' + 'World' in C#?",
            options: [
                "Hello World",
                "HelloWorld",
                "Error",
                "null"
            ],
            correct: 1,
            explanation: "In C#, the + operator concatenates strings, so 'Hello' + 'World' results in 'HelloWorld'."
        },
        {
            question: "Which keyword is used to create an interface in C#?",
            options: [
                "interface",
                "abstract",
                "protocol",
                "contract"
            ],
            correct: 0,
            explanation: "The 'interface' keyword is used to define interfaces in C#."
        },
        {
            question: "What is the purpose of LINQ in C#?",
            options: [
                "Database connectivity",
                "Language Integrated Query",
                "User interface design",
                "Network programming"
            ],
            correct: 1,
            explanation: "LINQ stands for Language Integrated Query and provides a consistent way to query data sources."
        }
    ],
    php: [
        {
            question: "Which symbol is used to start a PHP script?",
            options: [
                "<?php",
                "<?",
                "<%",
                "<script language='php'>"
            ],
            correct: 0,
            explanation: "The correct way to start a PHP script is with '<?php'."
        },
        {
            question: "Which function is used to output text in PHP?",
            options: [
                "print()",
                "echo",
                "output()",
                "Both print() and echo"
            ],
            correct: 3,
            explanation: "Both print() and echo are used to output text in PHP, with echo being slightly faster."
        },
        {
            question: "How do you declare a variable in PHP?",
            options: [
                "var $name;",
                "$name;",
                "variable $name;",
                "declare $name;"
            ],
            correct: 1,
            explanation: "In PHP, variables are declared with a $ sign, like '$name;'."
        },
        {
            question: "Which of the following is a PHP superglobal?",
            options: [
                "$GET",
                "$POST",
                "$_SERVER",
                "All of the above"
            ],
            correct: 3,
            explanation: "PHP has several superglobals including $_GET, $_POST, $_SERVER, etc."
        },
        {
            question: "What is the correct way to connect to a MySQL database in PHP?",
            options: [
                "mysql_connect()",
                "mysqli_connect()",
                "pdo_connect()",
                "Both mysqli_connect() and pdo_connect()"
            ],
            correct: 3,
            explanation: "Both mysqli_connect() and PDO can be used to connect to MySQL databases in modern PHP."
        },
        {
            question: "Which function is used to get the length of a string in PHP?",
            options: [
                "len()",
                "length()",
                "strlen()",
                "size()"
            ],
            correct: 2,
            explanation: "The strlen() function returns the length of a string in PHP."
        },
        {
            question: "What is the result of '5' + '5' in PHP?",
            options: [
                "10",
                "'55'",
                "Error",
                "0"
            ],
            correct: 0,
            explanation: "PHP performs type juggling, so '5' + '5' results in 10 (numeric addition)."
        },
        {
            question: "Which of the following is a PHP array function?",
            options: [
                "array_push()",
                "array_pop()",
                "array_merge()",
                "All of the above"
            ],
            correct: 3,
            explanation: "PHP provides many array functions including array_push(), array_pop(), and array_merge()."
        },
        {
            question: "What is the purpose of the 'include' statement in PHP?",
            options: [
                "To include external files",
                "To include HTML content",
                "To include CSS styles",
                "To include JavaScript code"
            ],
            correct: 0,
            explanation: "The 'include' statement is used to include and evaluate external PHP files."
        },
        {
            question: "Which function is used to start a session in PHP?",
            options: [
                "session_start()",
                "start_session()",
                "begin_session()",
                "init_session()"
            ],
            correct: 0,
            explanation: "The session_start() function is used to start a new session or resume an existing one in PHP."
        }
    ],
    ruby: [
        {
            question: "Which symbol is used for comments in Ruby?",
            options: [
                "//",
                "#",
                "/* */",
                "<!-- -->"
            ],
            correct: 1,
            explanation: "Ruby uses the # symbol for single-line comments."
        },
        {
            question: "What is the result of 2 + 2 * 2 in Ruby?",
            options: [
                "8",
                "6",
                "Error",
                "4"
            ],
            correct: 1,
            explanation: "Ruby follows standard operator precedence, so multiplication is performed before addition: 2 + (2 * 2) = 6."
        },
        {
            question: "Which keyword is used to define a method in Ruby?",
            options: [
                "function",
                "def",
                "method",
                "define"
            ],
            correct: 1,
            explanation: "The 'def' keyword is used to define methods in Ruby."
        },
        {
            question: "What is the correct way to create an array in Ruby?",
            options: [
                "array = []",
                "array = {}",
                "array = ()",
                "array = <>"
            ],
            correct: 0,
            explanation: "Arrays in Ruby are created using square brackets []."
        },
        {
            question: "Which method is used to get the length of a string in Ruby?",
            options: [
                "len()",
                "length()",
                "size()",
                "Both length() and size()"
            ],
            correct: 3,
            explanation: "Both length() and size() methods can be used to get the length of a string in Ruby."
        },
        {
            question: "What is the result of 'hello'.upcase in Ruby?",
            options: [
                "'hello'",
                "'HELLO'",
                "'Hello'",
                "Error"
            ],
            correct: 1,
            explanation: "The upcase method converts all characters in a string to uppercase."
        },
        {
            question: "Which of the following is a Ruby data type?",
            options: [
                "Symbol",
                "Hash",
                "Array",
                "All of the above"
            ],
            correct: 3,
            explanation: "Ruby has various data types including Symbol, Hash, Array, String, Integer, etc."
        },
        {
            question: "What is the purpose of 'yield' in Ruby?",
            options: [
                "To return a value",
                "To execute a block",
                "To raise an exception",
                "To break a loop"
            ],
            correct: 1,
            explanation: "The 'yield' keyword is used to execute a block passed to a method."
        },
        {
            question: "Which method is used to add an element to an array in Ruby?",
            options: [
                "add()",
                "push()",
                "append()",
                "insert()"
            ],
            correct: 1,
            explanation: "The push() method adds elements to the end of an array in Ruby."
        },
        {
            question: "What is the correct way to create a hash in Ruby?",
            options: [
                "hash = {}",
                "hash = []",
                "hash = ()",
                "hash = <>"
            ],
            correct: 0,
            explanation: "Hashes in Ruby are created using curly braces {}."
        }
    ],
    go: [
        {
            question: "Which keyword is used to declare a variable in Go?",
            options: [
                "var",
                "let",
                "const",
                "declare"
            ],
            correct: 0,
            explanation: "The 'var' keyword is used to declare variables in Go."
        },
        {
            question: "What is the entry point function of a Go program?",
            options: [
                "start()",
                "main()",
                "run()",
                "init()"
            ],
            correct: 1,
            explanation: "The main() function is the entry point of a Go program."
        },
        {
            question: "Which symbol is used for comments in Go?",
            options: [
                "// and /* */",
                "#",
                "--",
                "<!-- -->"
            ],
            correct: 0,
            explanation: "Go uses // for single-line comments and /* */ for multi-line comments."
        },
        {
            question: "What is the correct way to declare a constant in Go?",
            options: [
                "const",
                "final",
                "readonly",
                "immutable"
            ],
            correct: 0,
            explanation: "The 'const' keyword is used to declare constants in Go."
        },
        {
            question: "Which of the following is a Go data type?",
            options: [
                "int",
                "string",
                "bool",
                "All of the above"
            ],
            correct: 3,
            explanation: "Go has basic data types including int, string, bool, float64, etc."
        },
        {
            question: "What is the purpose of 'defer' in Go?",
            options: [
                "To delay execution",
                "To handle errors",
                "To create goroutines",
                "To import packages"
            ],
            correct: 0,
            explanation: "The 'defer' statement defers the execution of a function until the surrounding function returns."
        },
        {
            question: "Which keyword is used to create a goroutine in Go?",
            options: [
                "go",
                "goroutine",
                "async",
                "thread"
            ],
            correct: 0,
            explanation: "The 'go' keyword is used to create a goroutine, which is a lightweight thread in Go."
        },
        {
            question: "What is the correct way to import a package in Go?",
            options: [
                "import 'package'",
                "#include <package>",
                "import \"package\"",
                "using package"
            ],
            correct: 2,
            explanation: "Packages are imported in Go using the import statement with double quotes."
        },
        {
            question: "Which of the following is a Go collection type?",
            options: [
                "Array",
                "Slice",
                "Map",
                "All of the above"
            ],
            correct: 3,
            explanation: "Go provides Array, Slice, and Map as collection types."
        },
        {
            question: "What is the purpose of 'panic' in Go?",
            options: [
                "To handle errors",
                "To stop normal execution",
                "To log messages",
                "To create exceptions"
            ],
            correct: 1,
            explanation: "The panic() function stops normal execution of the current goroutine."
        }
    ],
    rust: [
        {
            question: "Which keyword is used to declare a variable in Rust?",
            options: [
                "let",
                "var",
                "const",
                "declare"
            ],
            correct: 0,
            explanation: "The 'let' keyword is used to declare variables in Rust."
        },
        {
            question: "What is the concept that prevents data races in Rust?",
            options: [
                "Garbage collection",
                "Ownership",
                "Reference counting",
                "Mutex locks"
            ],
            correct: 1,
            explanation: "Ownership is Rust's key feature that prevents data races and ensures memory safety."
        },
        {
            question: "Which symbol is used for pattern matching in Rust?",
            options: [
                "if",
                "switch",
                "match",
                "case"
            ],
            correct: 2,
            explanation: "The 'match' keyword is used for pattern matching in Rust."
        },
        {
            question: "What is the correct way to declare a mutable variable in Rust?",
            options: [
                "let mut x = 5;",
                "mutable x = 5;",
                "let x = mut 5;",
                "var mut x = 5;"
            ],
            correct: 0,
            explanation: "Mutable variables are declared with 'let mut' in Rust."
        },
        {
            question: "Which of the following is a Rust data type?",
            options: [
                "i32",
                "String",
                "Vec<T>",
                "All of the above"
            ],
            correct: 3,
            explanation: "Rust has various data types including i32, String, Vec<T>, etc."
        },
        {
            question: "What is the purpose of 'unsafe' in Rust?",
            options: [
                "To disable safety checks",
                "To handle errors",
                "To create threads",
                "To import modules"
            ],
            correct: 0,
            explanation: "The 'unsafe' keyword disables some of Rust's safety checks for specific operations."
        },
        {
            question: "Which method is used to handle errors in Rust?",
            options: [
                "try-catch",
                "Result<T, E>",
                "Option<T>",
                "Both Result<T, E> and Option<T>"
            ],
            correct: 3,
            explanation: "Rust uses Result<T, E> for recoverable errors and Option<T> for optional values."
        },
        {
            question: "What is the correct way to create a vector in Rust?",
            options: [
                "let v = vec![];",
                "let v = Vector::new();",
                "let v = []",
                "let v = Vec::create();"
            ],
            correct: 0,
            explanation: "Vectors are created using the vec! macro in Rust."
        },
        {
            question: "Which concept allows borrowing in Rust?",
            options: [
                "References",
                "Pointers",
                "Addresses",
                "Handles"
            ],
            correct: 0,
            explanation: "References allow borrowing in Rust, enabling multiple accesses to data without taking ownership."
        },
        {
            question: "What is the purpose of 'cargo' in Rust?",
            options: [
                "Package manager",
                "Build tool",
                "Test runner",
                "All of the above"
            ],
            correct: 3,
            explanation: "Cargo is Rust's package manager, build tool, and test runner."
        }
    ],
    swift: [
        {
            question: "Which keyword is used to declare a constant in Swift?",
            options: [
                "let",
                "const",
                "final",
                "immutable"
            ],
            correct: 0,
            explanation: "The 'let' keyword is used to declare constants in Swift."
        },
        {
            question: "What is the correct way to declare a variable in Swift?",
            options: [
                "var name = \"John\"",
                "let name = \"John\"",
                "string name = \"John\"",
                "name := \"John\""
            ],
            correct: 0,
            explanation: "Variables are declared with 'var' in Swift, while 'let' is used for constants."
        },
        {
            question: "Which symbol is used for string interpolation in Swift?",
            options: [
                "$",
                "#",
                "\\()",
                "%"
            ],
            correct: 2,
            explanation: "Swift uses \\() for string interpolation, like \"Hello, \\(name)\"."
        },
        {
            question: "What is the correct way to create an array in Swift?",
            options: [
                "let array = []",
                "let array = Array()",
                "let array: [String] = []",
                "All of the above"
            ],
            correct: 3,
            explanation: "All three methods are valid ways to create an array in Swift."
        },
        {
            question: "Which of the following is a Swift data type?",
            options: [
                "Int",
                "String",
                "Double",
                "All of the above"
            ],
            correct: 3,
            explanation: "Swift has various data types including Int, String, Double, Bool, etc."
        },
        {
            question: "What is the purpose of 'optional' in Swift?",
            options: [
                "To handle missing values",
                "To create optional parameters",
                "To handle errors",
                "To create nullable types"
            ],
            correct: 0,
            explanation: "Optionals in Swift handle the absence of a value, representing either a value or nil."
        },
        {
            question: "Which symbol is used for optional chaining in Swift?",
            options: [
                "?",
                "!",
                "??",
                ":"
            ],
            correct: 0,
            explanation: "The ? operator is used for optional chaining in Swift."
        },
        {
            question: "What is the correct way to create a dictionary in Swift?",
            options: [
                "let dict = [:]",
                "let dict = Dictionary()",
                "let dict: [String: Int] = [:]",
                "All of the above"
            ],
            correct: 3,
            explanation: "All three methods are valid ways to create a dictionary in Swift."
        },
        {
            question: "Which keyword is used to define a function in Swift?",
            options: [
                "function",
                "func",
                "def",
                "fn"
            ],
            correct: 1,
            explanation: "The 'func' keyword is used to define functions in Swift."
        },
        {
            question: "What is the purpose of 'guard' in Swift?",
            options: [
                "To exit early if a condition is not met",
                "To protect variables",
                "To create loops",
                "To handle errors"
            ],
            correct: 0,
            explanation: "The 'guard' statement is used to exit early if a condition is not met, improving code readability."
        }
    ]
};

// Application State
class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswers = [];
        this.timer = null;
        this.timeLeft = 60;
        this.selectedCategory = null;
        this.wrongAnswers = [];
        this.quizHistory = this.loadQuizHistory();
        
        this.initializeElements();
        this.bindEvents();
        this.loadQuizHistory();
    }
    
    initializeElements() {
        // Screens
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.categoryScreen = document.getElementById('category-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.historyScreen = document.getElementById('history-screen');
        this.reviewScreen = document.getElementById('review-screen');
        
        // Welcome Screen Elements
        this.startQuizBtn = document.getElementById('start-quiz-btn');
        this.viewHistoryBtn = document.getElementById('view-history-btn');
        
        // Category Screen Elements
        this.categoryCards = document.querySelectorAll('.category-card');
        this.backToWelcomeBtn = document.getElementById('back-to-welcome-btn');
        
        // Quiz Screen Elements
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.nextBtn = document.getElementById('next-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.timerDisplay = document.getElementById('timer');
        this.progressBar = document.getElementById('progress-bar');
        this.progressText = document.getElementById('progress-text');
        
        // Results Screen Elements
        this.scoreDisplay = document.getElementById('score-display');
        this.percentageDisplay = document.getElementById('percentage-display');
        this.restartBtn = document.getElementById('restart-btn');
        this.newQuizBtn = document.getElementById('new-quiz-btn');
        this.viewHistoryResultsBtn = document.getElementById('view-history-results-btn');
        this.reviewWrongBtn = document.getElementById('review-wrong-btn');
        this.resultExplanation = document.getElementById('result-explanation');
        
        // History Screen Elements
        this.historyList = document.getElementById('history-list');
        this.backToResultsBtn = document.getElementById('back-to-results-btn');
        this.clearHistoryBtn = document.getElementById('clear-history-btn');
        
        // Review Screen Elements
        this.reviewQuestionText = document.getElementById('review-question-text');
        this.reviewOptionsContainer = document.getElementById('review-options-container');
        this.reviewExplanation = document.getElementById('review-explanation');
        this.prevReviewBtn = document.getElementById('prev-review-btn');
        this.nextReviewBtn = document.getElementById('next-review-btn');
        this.backToResultsFromReviewBtn = document.getElementById('back-to-results-from-review-btn');
        this.reviewProgressText = document.getElementById('review-progress-text');
    }
    
    bindEvents() {
        // Welcome Screen Events
        this.startQuizBtn.addEventListener('click', () => this.showCategoryScreen());
        this.viewHistoryBtn.addEventListener('click', () => this.showHistoryScreen());
        
        // Category Screen Events
        this.categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.selectCategory(category);
            });
        });
        this.backToWelcomeBtn.addEventListener('click', () => this.showWelcomeScreen());
        
        // Quiz Screen Events
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.prevBtn.addEventListener('click', () => this.prevQuestion());
        
        // Results Screen Events
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.newQuizBtn.addEventListener('click', () => this.showCategoryScreen());
        this.viewHistoryResultsBtn.addEventListener('click', () => this.showHistoryScreen());
        this.reviewWrongBtn.addEventListener('click', () => this.showReviewScreen());
        
        // History Screen Events
        this.backToResultsBtn.addEventListener('click', () => this.showResultsScreen());
        this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());
        
        // Review Screen Events
        this.prevReviewBtn.addEventListener('click', () => this.prevReviewQuestion());
        this.nextReviewBtn.addEventListener('click', () => this.nextReviewQuestion());
        this.backToResultsFromReviewBtn.addEventListener('click', () => this.showResultsScreen());
    }
    
    // Screen Management
    showScreen(screen) {
        // Hide all screens
        this.welcomeScreen.classList.remove('active');
        this.categoryScreen.classList.remove('active');
        this.quizScreen.classList.remove('active');
        this.resultsScreen.classList.remove('active');
        this.historyScreen.classList.remove('active');
        this.reviewScreen.classList.remove('active');
        
        // Show selected screen
        screen.classList.add('active');
    }
    
    showWelcomeScreen() {
        this.showScreen(this.welcomeScreen);
    }
    
    showCategoryScreen() {
        this.showScreen(this.categoryScreen);
    }
    
    showQuizScreen() {
        this.showScreen(this.quizScreen);
    }
    
    showResultsScreen() {
        this.showScreen(this.resultsScreen);
    }
    
    showHistoryScreen() {
        this.showScreen(this.historyScreen);
        this.displayHistory();
    }
    
    showReviewScreen() {
        this.showScreen(this.reviewScreen);
        this.currentReviewQuestion = 0;
        this.displayReviewQuestion();
    }
    
    // Category Selection
    selectCategory(category) {
        this.selectedCategory = category;
        this.questions = [...quizCategories[category]];
        this.startQuiz();
    }
    
    // Quiz Logic
    startQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswers = [];
        this.wrongAnswers = [];
        this.timeLeft = 60;
        
        this.showQuizScreen();
        this.displayQuestion();
        this.startTimer();
        this.updateProgress();
    }
    
    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        this.questionText.textContent = question.question;
        
        // Clear previous options
        this.optionsContainer.innerHTML = '';
        
        // Create option buttons
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => this.selectAnswer(index));
            
            // Restore previously selected answer if exists
            if (this.selectedAnswers[this.currentQuestion] === index) {
                button.classList.add('selected');
            }
            
            this.optionsContainer.appendChild(button);
        });
        
        // Update navigation buttons
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.textContent = this.currentQuestion === this.questions.length - 1 ? 'Finish' : 'Next';
        
        this.updateProgress();
    }
    
    selectAnswer(answerIndex) {
        // Remove previous selection
        const buttons = this.optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.classList.remove('selected'));
        
        // Add selection to clicked button
        buttons[answerIndex].classList.add('selected');
        
        // Store the selected answer
        this.selectedAnswers[this.currentQuestion] = answerIndex;
    }
    
    nextQuestion() {
        // Check if an answer is selected
        if (this.selectedAnswers[this.currentQuestion] === undefined) {
            alert('Please select an answer before proceeding.');
            return;
        }
        
        // Check if answer is wrong and add to wrong answers list
        const correctAnswer = this.questions[this.currentQuestion].correct;
        if (this.selectedAnswers[this.currentQuestion] !== correctAnswer) {
            this.wrongAnswers.push({
                questionIndex: this.currentQuestion,
                selectedAnswer: this.selectedAnswers[this.currentQuestion],
                correctAnswer: correctAnswer
            });
        }
        
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        } else {
            this.finishQuiz();
        }
    }
    
    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
        }
    }
    
    finishQuiz() {
        this.stopTimer();
        this.calculateScore();
        this.saveQuizResult();
        this.showResultsScreen();
        this.displayResults();
    }
    
    calculateScore() {
        this.score = 0;
        for (let i = 0; i < this.questions.length; i++) {
            if (this.selectedAnswers[i] === this.questions[i].correct) {
                this.score++;
            }
        }
    }
    
    displayResults() {
        const percentage = Math.round((this.score / this.questions.length) * 100);
        this.scoreDisplay.textContent = `${this.score} out of ${this.questions.length}`;
        this.percentageDisplay.textContent = `${percentage}%`;
        
        // Show/hide review button based on wrong answers
        this.reviewWrongBtn.style.display = this.wrongAnswers.length > 0 ? 'block' : 'none';
        
        // Add result explanation
        let explanation = '';
        if (percentage >= 90) {
            explanation = 'Excellent! You have a strong understanding of this programming language.';
        } else if (percentage >= 70) {
            explanation = 'Good job! You have a solid foundation, but there\'s room for improvement.';
        } else if (percentage >= 50) {
            explanation = 'Not bad! You have some knowledge, but consider studying more.';
        } else {
            explanation = 'Keep practicing! Review the concepts and try again.';
        }
        
        this.resultExplanation.textContent = explanation;
    }
    
    // Timer Functions
    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.finishQuiz();
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Add warning class when time is running low
        if (this.timeLeft <= 10) {
            this.timerDisplay.classList.add('warning');
        } else {
            this.timerDisplay.classList.remove('warning');
        }
    }
    
    // Progress Functions
    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
        this.progressText.textContent = `Question ${this.currentQuestion + 1} of ${this.questions.length}`;
    }
    
    // History Functions
    saveQuizResult() {
        const result = {
            date: new Date().toLocaleDateString(),
            category: this.selectedCategory,
            score: this.score,
            total: this.questions.length,
            percentage: Math.round((this.score / this.questions.length) * 100),
            timeTaken: 60 - this.timeLeft
        };
        
        this.quizHistory.push(result);
        localStorage.setItem('quizHistory', JSON.stringify(this.quizHistory));
    }
    
    loadQuizHistory() {
        const stored = localStorage.getItem('quizHistory');
        return stored ? JSON.parse(stored) : [];
    }
    
    displayHistory() {
        this.historyList.innerHTML = '';
        
        if (this.quizHistory.length === 0) {
            this.historyList.innerHTML = '<p>No quiz history available.</p>';
            return;
        }
        
        this.quizHistory.forEach((result, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div class="history-date">${result.date}</div>
                <div class="history-category">${result.category.charAt(0).toUpperCase() + result.category.slice(1)}</div>
                <div class="history-score">${result.score}/${result.total} (${result.percentage}%)</div>
                <div class="history-time">Time: ${result.timeTaken}s</div>
            `;
            this.historyList.appendChild(historyItem);
        });
    }
    
    clearHistory() {
        if (confirm('Are you sure you want to clear all quiz history?')) {
            this.quizHistory = [];
            localStorage.removeItem('quizHistory');
            this.displayHistory();
        }
    }
    
    // Review Functions
    displayReviewQuestion() {
        if (this.wrongAnswers.length === 0) {
            this.reviewQuestionText.textContent = 'No wrong answers to review!';
            this.reviewOptionsContainer.innerHTML = '';
            this.reviewExplanation.textContent = '';
            this.updateReviewProgress();
            return;
        }
        
        const wrongAnswer = this.wrongAnswers[this.currentReviewQuestion];
        const question = this.questions[wrongAnswer.questionIndex];
        
        this.reviewQuestionText.textContent = question.question;
        
        // Clear previous options
        this.reviewOptionsContainer.innerHTML = '';
        
        // Create option buttons
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            
            // Style buttons based on correctness
            if (index === wrongAnswer.correctAnswer) {
                button.classList.add('correct');
            } else if (index === wrongAnswer.selectedAnswer) {
                button.classList.add('wrong');
            }
            
            button.disabled = true;
            this.reviewOptionsContainer.appendChild(button);
        });
        
        // Show explanation
        this.reviewExplanation.textContent = question.explanation || 'No explanation available.';
        
        // Update navigation buttons
        this.prevReviewBtn.disabled = this.currentReviewQuestion === 0;
        this.nextReviewBtn.disabled = this.currentReviewQuestion === this.wrongAnswers.length - 1;
        
        this.updateReviewProgress();
    }
    
    nextReviewQuestion() {
        if (this.currentReviewQuestion < this.wrongAnswers.length - 1) {
            this.currentReviewQuestion++;
            this.displayReviewQuestion();
        }
    }
    
    prevReviewQuestion() {
        if (this.currentReviewQuestion > 0) {
            this.currentReviewQuestion--;
            this.displayReviewQuestion();
        }
    }
    
    updateReviewProgress() {
        const current = this.wrongAnswers.length > 0 ? this.currentReviewQuestion + 1 : 0;
        const total = this.wrongAnswers.length;
        this.reviewProgressText.textContent = `Reviewing ${current} of ${total} wrong answers`;
    }
    
    // Restart Functions
    restartQuiz() {
        if (this.selectedCategory) {
            this.questions = [...quizCategories[this.selectedCategory]];
            this.startQuiz();
        } else {
            this.showCategoryScreen();
        }
    }
}

// Initialize the quiz application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (document.getElementById('quiz-screen').classList.contains('active')) {
        switch(e.key) {
            case 'ArrowLeft':
                if (!document.getElementById('prev-btn').disabled) {
                    document.getElementById('prev-btn').click();
                }
                break;
            case 'ArrowRight':
                if (!document.getElementById('next-btn').disabled) {
                    document.getElementById('next-btn').click();
                }
                break;
            case '1':
            case '2':
            case '3':
            case '4':
                const optionIndex = parseInt(e.key) - 1;
                const optionBtns = document.querySelectorAll('.option-btn');
                if (optionBtns[optionIndex]) {
                    optionBtns[optionIndex].click();
                }
                break;
        }
    }
});
