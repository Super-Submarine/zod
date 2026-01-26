import * as z from "zod";

// Define a simple "Hello World" schema
const HelloWorldSchema = z.object({
  message: z.string(),
  greeting: z.string().default("Hello"),
  name: z.string().default("World"),
});

// Infer the TypeScript type from the schema
type HelloWorld = z.infer<typeof HelloWorldSchema>;

// Parse and validate data
const helloWorld: HelloWorld = HelloWorldSchema.parse({
  message: "Hello, World!",
  greeting: "Hello",
  name: "World",
});

console.log(helloWorld.message); // Output: Hello, World!

// Using safeParse for error handling
const result = HelloWorldSchema.safeParse({
  message: "Greetings from Zod!",
});

if (result.success) {
  console.log(`${result.data.greeting}, ${result.data.name}!`);
  console.log(result.data.message);
} else {
  console.error("Validation failed:", result.error.issues);
}
