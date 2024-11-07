export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">404 - Page Not Found</h2>
        <p className="mb-8 text-slate-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
