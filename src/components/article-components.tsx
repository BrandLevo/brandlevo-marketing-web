import type { ReactNode } from "react";

// 40–60 word direct answer block — the AEO "Answer Capsule"
export function AnswerCapsule({ children }: { children: ReactNode }) {
  return (
    <div className="my-lg border-l-4 border-primary bg-primary/5 rounded-r-xl px-xl py-lg">
      <p className="text-body font-semibold text-ink leading-relaxed">{children}</p>
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-h2 text-ink font-bold mt-xxl mb-md leading-snug">{children}</h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-h3 text-ink font-bold mt-xl mb-sm leading-snug">{children}</h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-body text-slate leading-relaxed mb-lg">{children}</p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-lg space-y-sm pl-md">{children}</ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="mb-lg space-y-sm pl-md list-decimal">{children}</ol>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-sm text-body text-slate leading-relaxed">
      <span className="mt-[6px] w-2 h-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export function OLI({ children }: { children: ReactNode }) {
  return (
    <li className="text-body text-slate leading-relaxed pl-xs">{children}</li>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function Divider() {
  return <hr className="my-xxl border-fog" />;
}

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto mb-lg rounded-xl border border-fog">
      <table className="w-full text-body-sm">{children}</table>
    </div>
  );
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className="bg-snow border-b border-fog">{children}</thead>;
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody className="divide-y divide-fog">{children}</tbody>;
}

export function TR({ children }: { children: ReactNode }) {
  return <tr>{children}</tr>;
}

export function TH({ children }: { children: ReactNode }) {
  return <th className="px-lg py-md text-left font-semibold text-ink">{children}</th>;
}

export function TD({ children }: { children: ReactNode }) {
  return <td className="px-lg py-md text-slate">{children}</td>;
}

export function CodeInline({ children }: { children: ReactNode }) {
  return (
    <code className="bg-primary/10 text-primary text-body-sm px-sm py-[2px] rounded font-mono">
      {children}
    </code>
  );
}

export function Pre({ children }: { children: ReactNode }) {
  return (
    <pre className="bg-snow border border-fog rounded-xl p-lg overflow-x-auto text-body-sm text-slate font-mono mb-lg leading-relaxed">
      {children}
    </pre>
  );
}
