export default function Toast({ show, message }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-border bg-surface/90 px-4 py-3 text-sm text-text shadow-lg backdrop-blur">
      {message}
    </div>
  );
}
