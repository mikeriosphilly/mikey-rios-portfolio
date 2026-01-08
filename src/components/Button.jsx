import { Link } from "react-router-dom";

export function Button({
  to,
  href,
  children,
  variant = "primary",
  newTab = false,
  download = false,
}) {
  const base = "btn";
  const styles = variant === "primary" ? "btn-primary" : "btn-secondary";

  const className = `${base} ${styles}`;

  // Internal link
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  // External / anchor
  return (
    <a
      href={href}
      className={className}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer noopener" : undefined}
      download={download ? true : undefined}
    >
      {children}
    </a>
  );
}
