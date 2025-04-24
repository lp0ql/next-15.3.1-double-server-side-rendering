# Next.js 14 - Correct SSR Behavior Demonstration

This is a comparison repository that demonstrates the **correct behavior** in Next.js 14, showing that the double rendering bug only exists in Next.js 15. In this directory, server components are correctly rendered **only once** when using client-side navigation with `<Link>` followed by a server-side `redirect()`.

## Repository Creation

This repository was created using the following command:

```
npx create-next-app@14.2.28
```

With the following options selected:

```
✔ What is your project named? … 14
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
```

## Implementation Details

After creating the repository:

- Only the code under the `src/` directory has been modified
- No configuration files (next.config.js, tailwind.config.js, etc.) have been edited
- The same code structure as the Next.js 15 version is used, allowing for direct comparison

## Important Note

**This Next.js 14 version demonstrates the correct behavior:**

- Server components are rendered exactly once when redirected
- No double rendering occurs in the server console logs
- This confirms that the issue is specific to Next.js 15

## Running the Demo

To run the demonstration locally:

1. Navigate to this directory (`14/`)
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
5. Follow the same steps as in the Next.js 15 demo, but observe that server components are rendered only once

## Comparing with Next.js 15

For the best comparison:

1. Run this Next.js 14 version
2. Run the Next.js 15 version (in the `15/` directory)
3. Compare the server console outputs to see the difference in behavior
4. Notice that the destination page is rendered twice in Next.js 15, but only once in Next.js 14
