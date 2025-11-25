import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl py-16 px-6">
        <section className="mx-auto text-center sm:text-left">
          <div className="mt-6 flex gap-3 justify-center sm:justify-start">
            <Link
              href="/join"
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Join
            </Link>
            <Link
              href="/create"
              className="rounded-md border border-black px-4 py-2 text-sm font-medium"
            >
              Create
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
