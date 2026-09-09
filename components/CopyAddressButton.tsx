"use client";

import { useState } from "react";
import { STORE } from "@/lib/site";

export default function CopyAddressButton() {
  const [copied, setCopied] = useState(false);

  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(STORE.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const area = document.createElement("textarea");
      area.value = STORE.address;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={() => void copy()}
      aria-live="polite"
      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-state/40 px-5 text-support font-medium text-ink"
    >
      {copied ? "주소가 복사됐어요" : "주소 복사"}
    </button>
  );
}
