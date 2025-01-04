# Type Mismatch Error in TypeScript Function

This repository demonstrates a common type mismatch error in TypeScript and shows how to fix it.

## Bug

The `greeter` function expects a string argument, but an array of strings is passed to it. This results in a compilation error.

## Solution

The solution involves either modifying the function to accept an array, or changing the argument passed to the function to a single string.