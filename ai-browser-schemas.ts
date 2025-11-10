/**
 * AI Browser Configuration Schemas using Zod
 * 
 * This file demonstrates how to use Zod for validating AI browser configurations,
 * including AI providers, browser automation settings, and security configurations.
 */

import { z } from './src/v4/classic/external';


/**
 * Supported AI provider types
 */
export const AIProviderType = z.enum([
  'openai',
  'anthropic',
  'google',
  'ollama',
  'lmstudio',
  'azure',
  'custom'
]);

export type AIProviderType = z.infer<typeof AIProviderType>;

/**
 * Base configuration for all AI providers
 */
export const BaseProviderConfig = z.object({
  type: AIProviderType,
  name: z.string().min(1).max(100),
  enabled: z.boolean().default(true),
  apiKey: z.string().optional(),
  baseURL: z.string().url().optional(),
  timeout: z.number().int().positive().default(30000),
  maxRetries: z.number().int().min(0).max(10).default(3),
});

/**
 * OpenAI-specific configuration
 */
export const OpenAIConfig = BaseProviderConfig.extend({
  type: z.literal('openai'),
  model: z.string().default('gpt-4-turbo-preview'),
  temperature: z.number().min(0).max(2).default(0.7),
  maxTokens: z.number().int().positive().optional(),
  topP: z.number().min(0).max(1).optional(),
  frequencyPenalty: z.number().min(-2).max(2).optional(),
  presencePenalty: z.number().min(-2).max(2).optional(),
  organization: z.string().optional(),
});

export type OpenAIConfig = z.infer<typeof OpenAIConfig>;

/**
 * Anthropic Claude configuration
 */
export const AnthropicConfig = BaseProviderConfig.extend({
  type: z.literal('anthropic'),
  model: z.string().default('claude-3-5-sonnet-20241022'),
  temperature: z.number().min(0).max(1).default(0.7),
  maxTokens: z.number().int().positive().default(4096),
  topP: z.number().min(0).max(1).optional(),
  topK: z.number().int().positive().optional(),
});

export type AnthropicConfig = z.infer<typeof AnthropicConfig>;

/**
 * Google AI (Gemini) configuration
 */
export const GoogleAIConfig = BaseProviderConfig.extend({
  type: z.literal('google'),
  model: z.string().default('gemini-pro'),
  temperature: z.number().min(0).max(2).default(0.7),
  topP: z.number().min(0).max(1).optional(),
  topK: z.number().int().positive().optional(),
  maxOutputTokens: z.number().int().positive().optional(),
});

export type GoogleAIConfig = z.infer<typeof GoogleAIConfig>;

/**
 * Ollama (local models) configuration
 */
export const OllamaConfig = BaseProviderConfig.extend({
  type: z.literal('ollama'),
  model: z.string().default('llama2'),
  baseURL: z.string().url().default('http://localhost:11434'),
  temperature: z.number().min(0).max(2).default(0.7),
  numCtx: z.number().int().positive().optional(),
  numGpu: z.number().int().min(0).optional(),
  numThread: z.number().int().positive().optional(),
});

export type OllamaConfig = z.infer<typeof OllamaConfig>;

/**
 * LM Studio configuration
 */
export const LMStudioConfig = BaseProviderConfig.extend({
  type: z.literal('lmstudio'),
  model: z.string(),
  baseURL: z.string().url().default('http://localhost:1234/v1'),
  temperature: z.number().min(0).max(2).default(0.7),
  maxTokens: z.number().int().positive().optional(),
});

export type LMStudioConfig = z.infer<typeof LMStudioConfig>;

/**
 * Azure OpenAI configuration
 */
export const AzureOpenAIConfig = BaseProviderConfig.extend({
  type: z.literal('azure'),
  deploymentName: z.string().min(1),
  apiVersion: z.string().default('2024-02-15-preview'),
  temperature: z.number().min(0).max(2).default(0.7),
  maxTokens: z.number().int().positive().optional(),
});

export type AzureOpenAIConfig = z.infer<typeof AzureOpenAIConfig>;

/**
 * Custom provider configuration
 */
export const CustomProviderConfig = BaseProviderConfig.extend({
  type: z.literal('custom'),
  endpoint: z.string().url(),
  headers: z.record(z.string()).optional(),
  requestFormat: z.enum(['openai', 'anthropic', 'custom']).default('openai'),
});

export type CustomProviderConfig = z.infer<typeof CustomProviderConfig>;

/**
 * Union of all provider configurations
 */
export const AIProviderConfig = z.discriminatedUnion('type', [
  OpenAIConfig,
  AnthropicConfig,
  GoogleAIConfig,
  OllamaConfig,
  LMStudioConfig,
  AzureOpenAIConfig,
  CustomProviderConfig,
]);

export type AIProviderConfig = z.infer<typeof AIProviderConfig>;


/**
 * Browser action types
 */
export const BrowserActionType = z.enum([
  'navigate',
  'click',
  'type',
  'scroll',
  'screenshot',
  'extract',
  'wait',
  'evaluate',
  'select',
  'hover',
  'press_key',
]);

export type BrowserActionType = z.infer<typeof BrowserActionType>;

/**
 * Element selector types
 */
export const SelectorType = z.enum([
  'css',
  'xpath',
  'text',
  'aria-label',
  'placeholder',
  'id',
  'class',
]);

export type SelectorType = z.infer<typeof SelectorType>;

/**
 * Element selector
 */
export const ElementSelector = z.object({
  type: SelectorType.default('css'),
  value: z.string().min(1),
  timeout: z.number().int().positive().default(5000),
});

export type ElementSelector = z.infer<typeof ElementSelector>;

/**
 * Navigate action
 */
export const NavigateAction = z.object({
  type: z.literal('navigate'),
  url: z.string().url(),
  waitUntil: z.enum(['load', 'domcontentloaded', 'networkidle']).default('load'),
});

/**
 * Click action
 */
export const ClickAction = z.object({
  type: z.literal('click'),
  selector: ElementSelector,
  clickCount: z.number().int().positive().default(1),
  button: z.enum(['left', 'right', 'middle']).default('left'),
});

/**
 * Type action
 */
export const TypeAction = z.object({
  type: z.literal('type'),
  selector: ElementSelector,
  text: z.string(),
  delay: z.number().int().min(0).default(0),
  clearFirst: z.boolean().default(false),
});

/**
 * Screenshot action
 */
export const ScreenshotAction = z.object({
  type: z.literal('screenshot'),
  fullPage: z.boolean().default(false),
  selector: ElementSelector.optional(),
  format: z.enum(['png', 'jpeg']).default('png'),
  quality: z.number().int().min(0).max(100).optional(),
});

/**
 * Extract action
 */
export const ExtractAction = z.object({
  type: z.literal('extract'),
  selector: ElementSelector.optional(),
  attribute: z.string().optional(),
  multiple: z.boolean().default(false),
});

/**
 * Wait action
 */
export const WaitAction = z.object({
  type: z.literal('wait'),
  condition: z.enum(['time', 'selector', 'navigation', 'function']),
  value: z.union([z.number(), z.string()]),
  timeout: z.number().int().positive().default(30000),
});

/**
 * Union of all browser actions
 */
export const BrowserAction = z.discriminatedUnion('type', [
  NavigateAction,
  ClickAction,
  TypeAction,
  ScreenshotAction,
  ExtractAction,
  WaitAction,
]);

export type BrowserAction = z.infer<typeof BrowserAction>;

/**
 * Browser automation task
 */
export const AutomationTask = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(200),
  description: z.string().optional(),
  actions: z.array(BrowserAction).min(1),
  maxDuration: z.number().int().positive().default(300000),
  retryOnFailure: z.boolean().default(true),
  maxRetries: z.number().int().min(0).max(5).default(2),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type AutomationTask = z.infer<typeof AutomationTask>;


/**
 * Encryption algorithm
 */
export const EncryptionAlgorithm = z.enum([
  'aes-256-gcm',
  'aes-256-cbc',
  'chacha20-poly1305',
]);

export type EncryptionAlgorithm = z.infer<typeof EncryptionAlgorithm>;

/**
 * Credential storage configuration
 */
export const CredentialStorageConfig = z.object({
  enabled: z.boolean().default(true),
  encryptionAlgorithm: EncryptionAlgorithm.default('aes-256-gcm'),
  keyDerivationIterations: z.number().int().min(10000).default(100000),
  autoLock: z.boolean().default(true),
  autoLockTimeout: z.number().int().positive().default(900000),
  requireMasterPassword: z.boolean().default(true),
});

export type CredentialStorageConfig = z.infer<typeof CredentialStorageConfig>;

/**
 * Privacy settings
 */
export const PrivacySettings = z.object({
  blockThirdPartyCookies: z.boolean().default(true),
  blockTrackers: z.boolean().default(true),
  blockFingerprinting: z.boolean().default(true),
  httpsOnly: z.boolean().default(true),
  clearDataOnExit: z.boolean().default(false),
  doNotTrack: z.boolean().default(true),
  disableTelemetry: z.boolean().default(true),
  localAIProcessing: z.boolean().default(true),
});

export type PrivacySettings = z.infer<typeof PrivacySettings>;

/**
 * Data retention policy
 */
export const DataRetentionPolicy = z.object({
  historyRetentionDays: z.number().int().min(0).max(365).default(90),
  cacheRetentionDays: z.number().int().min(0).max(30).default(7),
  cookieRetentionDays: z.number().int().min(0).max(365).default(30),
  downloadHistoryRetentionDays: z.number().int().min(0).max(365).default(90),
  autoDeleteEnabled: z.boolean().default(false),
});

export type DataRetentionPolicy = z.infer<typeof DataRetentionPolicy>;


/**
 * MCP tool definition
 */
export const MCPTool = z.object({
  name: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
  parameters: z.record(z.object({
    type: z.string(),
    description: z.string().optional(),
    required: z.boolean().default(false),
    default: z.any().optional(),
  })),
  handler: z.string(),
});

export type MCPTool = z.infer<typeof MCPTool>;

/**
 * MCP server configuration
 */
export const MCPServerConfig = z.object({
  enabled: z.boolean().default(false),
  port: z.number().int().min(1024).max(65535).default(3000),
  host: z.string().default('localhost'),
  name: z.string().default('aibrowser'),
  version: z.string().regex(/^\d+\.\d+\.\d+$/).default('1.0.0'),
  tools: z.array(MCPTool).default([]),
  authentication: z.object({
    enabled: z.boolean().default(false),
    token: z.string().optional(),
  }).default({}),
  cors: z.object({
    enabled: z.boolean().default(true),
    origins: z.array(z.string()).default(['*']),
  }).default({}),
});

export type MCPServerConfig = z.infer<typeof MCPServerConfig>;


/**
 * Browser appearance settings
 */
export const AppearanceSettings = z.object({
  theme: z.enum(['light', 'dark', 'system']).default('system'),
  accentColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/).default('#0066FF'),
  fontSize: z.number().int().min(8).max(24).default(14),
  showBookmarksBar: z.boolean().default(true),
  compactMode: z.boolean().default(false),
});

export type AppearanceSettings = z.infer<typeof AppearanceSettings>;

/**
 * AI agent settings
 */
export const AIAgentSettings = z.object({
  enabled: z.boolean().default(true),
  autoExecute: z.boolean().default(false),
  confirmBeforeAction: z.boolean().default(true),
  maxActionsPerTask: z.number().int().min(1).max(100).default(20),
  visionEnabled: z.boolean().default(true),
  contextWindowSize: z.number().int().positive().default(10),
  saveHistory: z.boolean().default(true),
  historyRetentionDays: z.number().int().min(0).max(365).default(30),
});

export type AIAgentSettings = z.infer<typeof AIAgentSettings>;

/**
 * Update settings
 */
export const UpdateSettings = z.object({
  autoUpdate: z.boolean().default(true),
  checkFrequency: z.enum(['daily', 'weekly', 'monthly']).default('daily'),
  updateChannel: z.enum(['stable', 'beta', 'dev']).default('stable'),
  downloadInBackground: z.boolean().default(true),
  notifyOnUpdate: z.boolean().default(true),
});

export type UpdateSettings = z.infer<typeof UpdateSettings>;

/**
 * Complete AI browser configuration
 */
export const AIBrowserConfig = z.object({
  version: z.string().regex(/^\d+\.\d+\.\d+$/).default('1.0.0'),
  
  aiProviders: z.array(AIProviderConfig).min(1),
  defaultProvider: z.string().min(1),
  
  appearance: AppearanceSettings.default({}),
  privacy: PrivacySettings.default({}),
  dataRetention: DataRetentionPolicy.default({}),
  
  agent: AIAgentSettings.default({}),
  
  credentialStorage: CredentialStorageConfig.default({}),
  
  mcpServer: MCPServerConfig.default({}),
  
  updates: UpdateSettings.default({}),
  
  advanced: z.object({
    enableExperimentalFeatures: z.boolean().default(false),
    debugMode: z.boolean().default(false),
    logLevel: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
    maxConcurrentTasks: z.number().int().min(1).max(10).default(3),
  }).default({}),
  
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type AIBrowserConfig = z.infer<typeof AIBrowserConfig>;


/**
 * Validate AI browser configuration with detailed error messages
 */
export function validateBrowserConfig(config: unknown): {
  success: boolean;
  data?: AIBrowserConfig;
  errors?: string[];
} {
  const result = AIBrowserConfig.safeParse(config);
  
  if (result.success) {
    return { success: true, data: result.data };
  }
  
  const errors = result.error.errors.map(err => 
    `${err.path.join('.')}: ${err.message}`
  );
  
  return { success: false, errors };
}

/**
 * Validate AI provider configuration
 */
export function validateProviderConfig(config: unknown): {
  success: boolean;
  data?: AIProviderConfig;
  errors?: string[];
} {
  const result = AIProviderConfig.safeParse(config);
  
  if (result.success) {
    return { success: true, data: result.data };
  }
  
  const errors = result.error.errors.map(err => 
    `${err.path.join('.')}: ${err.message}`
  );
  
  return { success: false, errors };
}

/**
 * Validate automation task
 */
export function validateAutomationTask(task: unknown): {
  success: boolean;
  data?: AutomationTask;
  errors?: string[];
} {
  const result = AutomationTask.safeParse(task);
  
  if (result.success) {
    return { success: true, data: result.data };
  }
  
  const errors = result.error.errors.map(err => 
    `${err.path.join('.')}: ${err.message}`
  );
  
  return { success: false, errors };
}


/**
 * Example: Basic OpenAI configuration
 */
export const exampleOpenAIConfig: OpenAIConfig = {
  type: 'openai',
  name: 'OpenAI GPT-4',
  enabled: true,
  apiKey: 'sk-...',
  model: 'gpt-4-turbo-preview',
  temperature: 0.7,
  timeout: 30000,
  maxRetries: 3,
};

/**
 * Example: Ollama local model configuration
 */
export const exampleOllamaConfig: OllamaConfig = {
  type: 'ollama',
  name: 'Local Llama 2',
  enabled: true,
  baseURL: 'http://localhost:11434',
  model: 'llama2',
  temperature: 0.7,
  timeout: 60000,
  maxRetries: 2,
};

/**
 * Example: Complete browser configuration
 */
export const exampleBrowserConfig: AIBrowserConfig = {
  version: '1.0.0',
  aiProviders: [exampleOpenAIConfig, exampleOllamaConfig],
  defaultProvider: 'OpenAI GPT-4',
  appearance: {
    theme: 'dark',
    accentColor: '#0066FF',
    fontSize: 14,
    showBookmarksBar: true,
    compactMode: false,
  },
  privacy: {
    blockThirdPartyCookies: true,
    blockTrackers: true,
    blockFingerprinting: true,
    httpsOnly: true,
    clearDataOnExit: false,
    doNotTrack: true,
    disableTelemetry: true,
    localAIProcessing: true,
  },
  dataRetention: {
    historyRetentionDays: 90,
    cacheRetentionDays: 7,
    cookieRetentionDays: 30,
    downloadHistoryRetentionDays: 90,
    autoDeleteEnabled: false,
  },
  agent: {
    enabled: true,
    autoExecute: false,
    confirmBeforeAction: true,
    maxActionsPerTask: 20,
    visionEnabled: true,
    contextWindowSize: 10,
    saveHistory: true,
    historyRetentionDays: 30,
  },
  credentialStorage: {
    enabled: true,
    encryptionAlgorithm: 'aes-256-gcm',
    keyDerivationIterations: 100000,
    autoLock: true,
    autoLockTimeout: 900000,
    requireMasterPassword: true,
  },
  mcpServer: {
    enabled: true,
    port: 3000,
    host: 'localhost',
    name: 'aibrowser',
    version: '1.0.0',
    tools: [],
    authentication: {
      enabled: false,
    },
    cors: {
      enabled: true,
      origins: ['*'],
    },
  },
  updates: {
    autoUpdate: true,
    checkFrequency: 'daily',
    updateChannel: 'stable',
    downloadInBackground: true,
    notifyOnUpdate: true,
  },
  advanced: {
    enableExperimentalFeatures: false,
    debugMode: false,
    logLevel: 'info',
    maxConcurrentTasks: 3,
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

/**
 * Example: Browser automation task
 */
export const exampleAutomationTask: AutomationTask = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  name: 'Search and Extract Product Info',
  description: 'Navigate to e-commerce site, search for product, and extract details',
  actions: [
    {
      type: 'navigate',
      url: 'https://example.com',
      waitUntil: 'load',
    },
    {
      type: 'type',
      selector: {
        type: 'css',
        value: 'input[name="search"]',
        timeout: 5000,
      },
      text: 'laptop',
      delay: 100,
      clearFirst: true,
    },
    {
      type: 'click',
      selector: {
        type: 'css',
        value: 'button[type="submit"]',
        timeout: 5000,
      },
      clickCount: 1,
      button: 'left',
    },
    {
      type: 'wait',
      condition: 'selector',
      value: '.product-list',
      timeout: 10000,
    },
    {
      type: 'screenshot',
      fullPage: false,
      format: 'png',
    },
    {
      type: 'extract',
      selector: {
        type: 'css',
        value: '.product-title',
        timeout: 5000,
      },
      multiple: true,
    },
  ],
  maxDuration: 300000,
  retryOnFailure: true,
  maxRetries: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
};
