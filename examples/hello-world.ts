import * as z from "zod";

const HelloWorldSchema = z.object({
  message: z.string(),
  greeting: z.string().default("Hello"),
  name: z.string().default("World"),
});

type HelloWorld = z.infer<typeof HelloWorldSchema>;

const helloWorld: HelloWorld = HelloWorldSchema.parse({
  message: "Welcome to Zod!",
});

console.log(`${helloWorld.greeting}, ${helloWorld.name}!`);
console.log(helloWorld.message);
