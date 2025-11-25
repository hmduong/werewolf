import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl py-16 px-6">
        <section className="mx-auto text-center sm:text-left">
          <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
            About
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            This is a simple About page to demonstrate routing with the Next
            App Router.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="rounded-md border border-black px-4 py-2 text-sm font-medium"
            >
              Back home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
