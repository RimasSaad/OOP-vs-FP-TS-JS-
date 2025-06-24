// FP.ts
// Pure function: same imout produce the same output
function add(a, b) {
    return a + b;
}
// Currying: breaking down a function into multiple functions
function curryAdd(a) {
    return function (b) {
        return a + b;
    };
}
var add5 = curryAdd(5);
console.log("5 + 3 =", add5(3));
console.log("2 + 12 =", curryAdd(2)(12));
// Higher-order function that adds authentication check
var isLoggedIn = true;
function withAuth(action) {
    return function () {
        if (isLoggedIn) {
            console.log("Access granted");
            action(); // Run the function
        }
        else {
            console.log("Access denied. Please log in.");
        }
    };
}
// A function that only runs if the user is logged in
function viewProfile() {
    console.log("Viewing user profile...");
}
var protectedViewProfile = withAuth(viewProfile);
protectedViewProfile();
