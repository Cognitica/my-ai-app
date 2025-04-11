"use client";

interface CodeBlockProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: any;
  inline: boolean;
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export function CodeBlock({
  inline,
  className,
  children,
  ...props
}: CodeBlockProps) {
  if (!inline) {
    return (
      <div className="not-prose flex flex-col">
        <pre
          {...props}
          className={`text-sm w-full overflow-x-auto bg-[var(--code-bg)] p-4 border border-[var(--border)] rounded-xl text-[var(--foreground)]`}
        >
          <code className="whitespace-pre-wrap break-words">{children}</code>
        </pre>
      </div>
    );
  } else {
    return (
      <code
        className={`${className} text-sm bg-[var(--code-inline-bg)] py-0.5 px-1 rounded-md text-[var(--foreground)]`}
        {...props}
      >
        {children}
      </code>
    );
  }
}
