"use client";

import { useState } from "react";

export default function QueueProcessorPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleProcessQueue = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/cron/process-queue");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Unknown error");
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📦 Manual Queue Processor</h1>
      <button
        onClick={handleProcessQueue}
        disabled={loading}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "16px",
          cursor: loading ? "not-allowed" : "pointer",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginTop: "1rem",
        }}
      >
        {loading ? "Processing..." : "Process Queue"}
      </button>

      {result && (
        <div style={{ marginTop: "1rem", color: "green" }}>
          ✅ Queue processed successfully!
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "1rem", color: "red" }}>❌ Error: {error}</div>
      )}
    </main>
  );
}
