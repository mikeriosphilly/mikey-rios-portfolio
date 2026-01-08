import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "../components/Button";

function Section({ title, children }) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        <h1>{title}</h1>
        <div className="mt-6 space-y-6 text-muted">{children}</div>
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/40 p-6">
      {children}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface/30 px-3 py-1 text-sm text-text">
      {children}
    </span>
  );
}

function ButtonAnchor({
  href,
  children,
  variant = "secondary",
  newTab = false,
  download = false,
}) {
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:opacity-90"
      : "border border-border bg-surface/20 text-text hover:bg-surface/40";

  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition";

  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer noopener" : undefined}
      download={download ? true : undefined}
    >
      {children}
    </a>
  );
}

function Input({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="text-sm text-text">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-surface/20 px-4 py-2.5 text-text placeholder:text-muted/70 outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

function Textarea({ label, name, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="text-sm text-text">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={6}
        className="mt-2 w-full resize-y rounded-xl border border-border bg-surface/20 px-4 py-2.5 text-text placeholder:text-muted/70 outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function onChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // For now: no backend. This builds a mailto link so it "works" without wiring anything.
  const subject = encodeURIComponent("Portfolio inquiry");
  const body = encodeURIComponent(
    `Hi Mikey,\n\nMy name is ${form.name || "[your name]"}.\n\n${
      form.message || "[your message]"
    }\n\nReply to: ${form.email || "[your email]"}\n`
  );

  return (
    <main className="bg-bg">
      <Section title="Contact">
        <p className="max-w-3xl text-lg text-muted">
          Thank you for taking the time to reach out!
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge>Front-end + UX</Badge>
          <Badge>Clear communication</Badge>
          <Badge>Accessibility-minded</Badge>
          <Badge>Creative technologist energy</Badge>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Form */}
          <Card>
            <h2 className="text-xl font-semibold text-text">Send a message</h2>
            <p className="mt-2 text-sm text-muted">
              This form opens your email app.
            </p>

            <div className="mt-6 space-y-4">
              <Input
                label="Your name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="What should I call you?"
              />
              <Input
                label="Your email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="So I can reply"
              />
              <Textarea
                label="Message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="What are we building, fixing, or untangling?"
              />

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  href={`mailto:michaelrios@gmail.com?subject=${subject}&body=${body}`}
                  variant="primary"
                >
                  Send email
                </Button>

                <Button
                  href="/MichaelRios_Resume_2026.pdf"
                  variant="secondary"
                  newTab
                  download
                >
                  Download resume
                </Button>
              </div>
            </div>
          </Card>

          {/* Direct links */}
          <div className="space-y-6">
            <Card>
              <h2 className="text-xl font-semibold text-text">Direct</h2>
              <p className="mt-2 text-sm text-muted">
                Prefer a quick link? You got it!
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Button href="mailto:michaelrios@gmail.com" variant="secondary">
                  <span className="flex items-center gap-2">
                    <Mail size={16} />
                    Email me
                  </span>
                </Button>

                <Button
                  href="https://www.linkedin.com/in/your-profile"
                  variant="secondary"
                  newTab
                >
                  <span className="flex items-center gap-2">
                    <Linkedin size={16} />
                    LinkedIn
                  </span>
                </Button>

                <Button
                  href="https://github.com/your-username"
                  variant="secondary"
                  newTab
                >
                  <span className="flex items-center gap-2">
                    <Github size={16} />
                    GitHub
                  </span>
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted">
                Swap those links for your actual profiles.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
