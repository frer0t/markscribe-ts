# Markscribe TS

A TypeScript CLI tool for generating markdown templates with GitHub and
Hackatime integration.

## Description

Markscribe TS is the TypeScript version of markscribe, a tool that helps you
create dynamic markdown content using templates. It integrates with GitHub API
and Hackatime (Wakatime) to pull in data like contributions, pull requests,
coding statistics, and more.

## Installation

```bash
# Using pnpm (recommended)
pnpm install

# Build the project
pnpm run build
```

## Usage

Set up your environment variables:

```bash
export GITHUB_TOKEN=your_github_token
export HACKATIME_API_KEY=your_hackatime_key
```

Run the CLI:

```bash
node dist/cli.js [template-file]
```

## Features

- **GitHub Integration**: Pull data like recent contributions, pull requests,
  stars, followers, gists, sponsors, and repository info.
- **Hackatime Integration**: Get coding statistics, category bars, and today's
  coding time.
- **Template Helpers**: Humanize dates, format numbers, chunk arrays, and more.
- **CLI with Commander.js**: Easy argument parsing and help.
