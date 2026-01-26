import * as z from "zod";

const HelloWorldSchema = z.object({
  message: z.string(),
  timestamp: z.number(),
});

type HelloWorld = z.infer<typeof HelloWorldSchema>;

const helloWorld: HelloWorld = {
  message: "Hello, World!",
  timestamp: Date.now(),
};

const result = HelloWorldSchema.safeParse(helloWorld);

if (result.success) {
  console.log("Parsed successfully:", result.data);
} else {
  console.error("Validation failed:", result.error.issues);
}
