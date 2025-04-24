# Next.js 15 Double SSR Bug Demonstration

This is a demonstration repository for reproducing a bug in Next.js 15 where server components are rendered twice when using client-side navigation with `<Link>` followed by a server-side `redirect()`.

## Repository Creation

This repository was created using the following command:

```
npx create-next-app@15.3.1
```

With the following options selected:

```
✔ What is your project named? … 15
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack for `next dev`? … Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No
```

## Implementation Details

After creating the repository:

- Only the code under the `src/` directory has been modified
- No configuration files (next.config.js, tailwind.config.js, etc.) have been edited
- The bug reproduction code was added without any dependencies beyond what comes with a standard Next.js 15 installation

## Running the Demo

To run the demonstration locally:

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
5. Follow the instructions on the homepage to reproduce the bug

## Bug Demonstration

The repository includes two demonstrations:

- A minimal reproduction that shows the core issue
- A real-world example that demonstrates the issue in a more practical context

Visit the homepage at [http://localhost:3000](http://localhost:3000) to access both demonstrations.
