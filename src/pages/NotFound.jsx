import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-widest text-muted">404</p>

      <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-accent">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-muted">
        The page you’re looking for doesn’t exist, or it may have moved.
      </p>

      <Link to="/" className="btn btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
