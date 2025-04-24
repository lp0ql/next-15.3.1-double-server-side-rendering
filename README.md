# Next.js 15 Double SSR Bug Demonstration Repository

This repository demonstrates a specific bug in Next.js 15 where server components are rendered twice when using client-side navigation with `<Link>` followed by a server-side `redirect()`. The same code in Next.js 14 works correctly with components rendering only once.

## Repository Structure

This repository contains two separate Next.js applications:

- **`/14` directory**: Contains a Next.js 14.2.28 application that demonstrates the correct behavior
- **`/15` directory**: Contains a Next.js 15.3.1 application that demonstrates the bug

Both directories contain identical code structures, allowing for direct comparison of behavior between versions.

## The Bug Being Verified

This repository verifies the following issue:

1. In Next.js 15, when a user navigates to a page using the `<Link>` component (client-side navigation)
2. And that page performs a `redirect()` during server-side rendering
3. The destination page gets server-side rendered **twice**

## How to Run the Demonstrations

### Next.js 14 (Correct Behavior)

```bash
cd 14
npm install
npm run dev
# Access http://localhost:3000
```

### Next.js 15 (With Bug)

```bash
cd 15
npm install
npm run dev
# Access http://localhost:3000
```

## Expected Results

- **Next.js 14**: The server console will show each component being rendered exactly once
- **Next.js 15**: The server console will show destination components being rendered twice when redirected after client-side navigation

## Test Scenarios

Both applications include:

1. **Minimal Reproduction**: A stripped-down test case that clearly shows the issue
2. **Real-World Example**: A practical example with a fruit shop and music shop that demonstrates the bug in a realistic scenario

## Additional Information

For detailed information about each implementation, please refer to the README files within each directory:

- [Next.js 14 README](/14/README.md)
- [Next.js 15 README](/15/README.md)
