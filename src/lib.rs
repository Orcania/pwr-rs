use wasm_bindgen::prelude::*;

// Import the PWRJS functions
#[wasm_bindgen(module = "t/build/release.js")]
extern "C" {
    // Expose the PWRJS functions you want to use
    pub fn fib(n: i32) -> i32;
}

// Rust code that uses the PWRJS library
#[wasm_bindgen]
pub fn calculate_fibonacci(n: i32) -> i32 {
    // Call the PWRJS function to calculate Fibonacci
    unsafe { fib(n) }
}

