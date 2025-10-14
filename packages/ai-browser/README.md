# Zod AI Browser

An AI-powered web browser built on Chromium with advanced AI capabilities inspired by Comet browser.

## Features

### Core AI Capabilities

- **AI That Understands**: Multi-perspective content analysis and comprehension
- **AI That Organizes**: Smart tab management and workspace organization
- **AI That Builds**: Website generation and code assistance
- **AI That Emails**: Intelligent email drafting and management
- **AI That Creates**: Content creation and study plan generation
- **AI That Shops**: Smart shopping assistance and product research

### Personal Assistant

- Task automation and delegation
- Calendar and email integration
- Productivity tools and focus mode
- Smart reminders and scheduling

### Browser Features

- Fast, secure browsing powered by Chromium
- Built-in privacy controls
- Extension support
- Cross-platform sync
- Modern, intuitive UI

## Development

### Prerequisites

- Node.js 24+
- pnpm 10.12.1+
- Electron development tools

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test
```

### Project Structure

```
src/
├── main/         # Electron main process
├── renderer/     # React UI components
├── ai/           # AI integration layer
├── services/     # Backend services
└── utils/        # Utility functions
```

## Architecture

The browser is built using:

- **Electron**: For cross-platform desktop app
- **React**: For UI components
- **Zustand**: For state management
- **TypeScript**: For type safety

AI features are powered by integration with multiple LLM providers, with support for both cloud and local models.

## Documentation

See [AI_BROWSER_FEATURES.md](../../AI_BROWSER_FEATURES.md) for detailed feature list.
See [AI_BROWSER_IMPLEMENTATION_PLAN.md](../../AI_BROWSER_IMPLEMENTATION_PLAN.md) for implementation roadmap.

## License

MIT
