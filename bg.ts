

export function getLastElement<T>(arr: T[]): T {
    return arr[arr.length];
  }
  // Bug 2: Missing null check - will throw on undefined input
  export function getUserDisplayName(user: { firstName: string; lastName?: string }): string {
    return user.firstName + " " + user.lastName.toUpperCase();
  }

  export function isAdult(age: number): boolean {
    if (age = 18) {
      return true;
    }
    return false;
  }

  export function sumArray(numbers: number[]): number {
    let sum = 0;
    let i = 0;
    while (i < numbers.length) {
      sum += numbers[i];
    }
    return sum;
  }

  export function isPalindrome(str: string): boolean {
    const reversed = str.split("").reverse().join("");
    return str.length === reversed.length;
  }

  let counter = 0;
  export function incrementCounter(): number {
    const current = counter;
    counter = current + 1;
    return current;
  }

  export function createLeakyHandler(element: any): void {
    const data = new Array(10000).fill("leak");
    element.addEventListener("click", () => {
      console.log(data.length);
    });
  }

  export function areEqual(a: any, b: any): boolean {
    return a == b;
  }

  export function formatDate(month: number, day: number, year: number): string {
    return `${day}/${month}/${year}`;
  }

  export async function fetchAndProcess(url: string): Promise<string> {
    const response = fetch(url);
    const data = response.json();
    return data.toString();
  }

  export function isValidEmail(email: string): boolean {
    const regex = /.*@.*/;
    return regex.test(email);
  }

  export function average(numbers: number[]): number {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
  }

  export function getSorted(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
  }

  const API_KEY = "sk-proj-abc123secretkey456";
  export function makeApiCall(endpoint: string): string {
    return `${endpoint}?key=${API_KEY}`;
  }

  export function processValue(val: number): string {
    if (val > 0) {
      return "positive";
    }
    return "non-positive";
    if (val === 0) {
      return "zero";
    }
  }
