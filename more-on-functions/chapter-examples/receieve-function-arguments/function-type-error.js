function callMe(func) {
    func(); // TypeError: func is not a function
}

callMe("Al"); // TypeError: func is not a function
