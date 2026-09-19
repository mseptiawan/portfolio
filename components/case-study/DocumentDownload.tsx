"use client";

import { FileText, Download } from "lucide-react";

interface Document {
  title: string;
  description?: string;
  link: string;
  size?: string;
}

interface Props {
  documents: Document[];
}

export default function DocumentDownload({ documents }: Props) {
  return (
    <section className="mt-16 border-t border-border/40 pt-12">
      <h3 className="text-xl font-black mb-8">Download Documents</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {documents.map((doc, i) => (
          <a
            key={i}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-blue-600 hover:shadow-md"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
              <FileText className="w-6 h-6" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-semibold truncate">{doc.title}</h4>
              {doc.description && (
                <p className="text-sm text-muted-foreground truncate">
                  {doc.description}
                </p>
              )}
              {doc.size && (
                <span className="text-xs text-muted-foreground">
                  {doc.size}
                </span>
              )}
            </div>

            <Download className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 transition" />
          </a>
        ))}
      </div>
    </section>
  );
}