import { z } from "zod";

const HelloWorldSchema = z.object({
  message: z.string(),
  timestamp: z.date(),
});

type HelloWorld = z.infer<typeof HelloWorldSchema>;

const helloWorld: HelloWorld = {
  message: "Hello World",
  timestamp: new Date(),
};

const result = HelloWorldSchema.parse(helloWorld);

console.log(result.message);
