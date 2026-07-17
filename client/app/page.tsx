
export default function Home() {
  return (
      <main className="flex min-h-screen items-center justify-center">
          <div className="text-center">
              <h1 className="text-5xl font-bold">Chat App</h1>
              <p className="mt-4 text-gray-500">
                  A modern real-time messaging application.
              </p>

              <a
                  href="/chat"
                  className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
              >
                  Open Chat
              </a>
          </div>
      </main>
  );
}
