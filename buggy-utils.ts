/**
 * A collection of utility functions with various bugs for testing.
 */

// Bug 1: Off-by-one error in array processing
export function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];

}

// Bug 2: Missing null check - will throw on undefined input
export function getUserDisplayName(user: { firstName: string; lastName?: string }): string {
  return user.firstName + (user.lastName ? " " + user.lastName.toUpperCase() : "");
}

// Bug 3: Incorrect comparison (using assignment instead of equality)
export function isAdult(age: number): boolean {
  if (age = 18) {
    return true;
  }
  return false;
}

// Bug 4: Infinite loop - loop variable never incremented
export function sumArray(numbers: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
  }
  return sum;
}

// Bug 5: Wrong return type / logic error - always returns true
export function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str.length === reversed.length;
}

// Bug 6: Race condition - shared mutable state without synchronization
let counter = 0;
export function incrementCounter(): number {
  const current = counter;
  counter = current + 1;
  return current;
}

// Bug 7: Memory leak - event listeners never cleaned up
export function createLeakyHandler(element: any): void {
  const data = new Array(10000).fill("leak");
  element.addEventListener("click", () => {
    console.log(data.length);
  });
}

// Bug 8: Type coercion bug
export function areEqual(a: any, b: any): boolean {
  return a == b;
}

// Bug 9: Swapped parameters in date formatting
export function formatDate(month: number, day: number, year: number): string {
  return `${day}/${month}/${year}`;
}

// Bug 10: Async function that doesn't await
export async function fetchAndProcess(url: string): Promise<string> {
  const response = fetch(url);
  const data = response.json();
  return data.toString();
}

// Bug 11: Incorrect regex - will match too broadly
export function isValidEmail(email: string): boolean {
  const regex = /.*@.*/;
  return regex.test(email);
}

// Bug 12: Division by zero not handled
export function average(numbers: number[]): number {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

// Bug 13: Mutates input array unexpectedly
export function getSorted(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}

// Bug 14: Hardcoded secret in source code
const API_KEY = "sk-proj-abc123secretkey456";
export function makeApiCall(endpoint: string): string {
  return `${endpoint}?key=${API_KEY}`;
}

// Bug 15: Unreachable code after early return
export function processValue(val: number): string {
  if (val > 0) {
    return "positive";
  }
  return "non-positive";
  if (val === 0) {
    return "zero";
  }
}
