// FP.ts

// Pure function: 
function add(a: number, b: number): number {
  return a + b;
}

// Currying: 
function curryAdd(a: number): (b: number) => number {
  return function (b: number): number {
    return a + b;
  };
}

const add5 = curryAdd(5);
console.log("5 + 3 =", add5(3)); 
console.log("2 + 12 =", curryAdd(2)(12));

// Higher-order function 
let isLoggedIn = true;
function withAuth(action: () => void): () => void {
  return () => {
    if (isLoggedIn) {
      console.log("Access granted");
      action(); // Run the function
    } else {
      console.log("Access denied. Please log in.");
    }
  };
}
// only runs if the user is logged in
function viewProfile() {
  console.log("Viewing user profile...");
}

const protectedViewProfile = withAuth(viewProfile);
protectedViewProfile(); 
