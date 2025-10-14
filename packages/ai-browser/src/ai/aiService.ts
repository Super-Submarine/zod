export interface AIMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface AIResponse {
  content: string;
  model: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export class AIService {
  private apiKey: string | null = null;
  private provider: "openai" | "anthropic" | "local" = "openai";

  constructor(provider: "openai" | "anthropic" | "local" = "openai") {
    this.provider = provider;
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  async chat(_messages: AIMessage[]): Promise<AIResponse> {
    throw new Error("AI service not yet implemented");
  }

  async summarize(content: string): Promise<string> {
    const messages: AIMessage[] = [
      {
        role: "system",
        content: "You are a helpful assistant that summarizes web content concisely.",
      },
      {
        role: "user",
        content: `Please summarize the following content:\n\n${content}`,
      },
    ];

    const response = await this.chat(messages);
    return response.content;
  }

  async analyzeContent(content: string, query: string): Promise<string> {
    const messages: AIMessage[] = [
      {
        role: "system",
        content: "You are a helpful assistant that analyzes web content and answers questions.",
      },
      {
        role: "user",
        content: `Content:\n${content}\n\nQuestion: ${query}`,
      },
    ];

    const response = await this.chat(messages);
    return response.content;
  }

  async categorizeTabs(tabs: { title: string; url: string }[]): Promise<Record<string, string[]>> {
    const tabInfo = tabs.map((tab, i) => `${i}: ${tab.title} (${tab.url})`).join("\n");

    const messages: AIMessage[] = [
      {
        role: "system",
        content: "You are a helpful assistant that categorizes browser tabs into logical groups.",
      },
      {
        role: "user",
        content: `Please categorize these tabs into groups:\n\n${tabInfo}`,
      },
    ];

    const response = await this.chat(messages);
    return response.content ? { [response.content]: [] } : {};
  }
}
