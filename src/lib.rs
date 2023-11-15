use wasm_bindgen::prelude::*;

// Import the PWRJS functions
#[wasm_bindgen(module = "/src/t/build2/release.js")]
extern "C" {
    // Expose the PWRJS functions you want to use
    pub fn fib(n: i32) -> i32;
}

// Rust code that uses the PWRJS library
#[wasm_bindgen]
pub fn calculate_fibonacci(n: i32) -> i32 {
    // Call the PWRJS function to calculate Fibonacci
    fib(n)
}

// Unit tests for the code above
#[cfg(test)]
mod tests {
    use super::*; // Import everything from the outer module
    use wasm_bindgen_test::*;

    #[wasm_bindgen_test]
    fn test_calculate_fibonacci() {
        assert_eq!(calculate_fibonacci(5), 5); // Replace with the actual expected value
        // Add more tests for other cases
    }

    // You can add more test functions here
}
