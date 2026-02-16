'use client'

import ReactMarkdown from 'react-markdown'

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="text-4xl font-semibold text-black mb-6 mt-8">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-semibold text-black mb-4 mt-8">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-semibold text-black mb-3 mt-6">{children}</h3>,
          p: ({ children }) => <p className="text-lg text-zinc-800 leading-relaxed mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside text-zinc-800 mb-4 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside text-zinc-800 mb-4 space-y-2">{children}</ol>,
          li: ({ children }) => <li className="text-zinc-800">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-black">{children}</strong>,
          a: ({ href, children }) => (
            <a href={href} className="text-blue-600 hover:underline">
              {children}
            </a>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
