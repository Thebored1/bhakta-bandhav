"use client";

import { useRef, useState } from "react";

interface Props {
  name: string;
  defaultValue?: string;
}

export default function ImageUpload({ name, defaultValue = "" }: Props) {
  const [url, setUrl] = useState(defaultValue);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError("");
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.error) setUploadError(data.error);
      else setUrl(data.url);
    } catch {
      setUploadError("Upload failed — please try again.");
    }
    setUploading(false);
    // reset file input so the same file can be re-selected if needed
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <div className="image-upload">
      <input type="hidden" name={name} value={url} />

      {url && (
        <div className="image-upload-preview">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt="Preview" />
          <button
            type="button"
            className="image-upload-remove"
            onClick={() => setUrl("")}
            title="Remove image"
          >
            ×
          </button>
        </div>
      )}

      <div className="image-upload-row">
        <button
          type="button"
          className="admin-btn-ghost image-upload-btn"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
        >
          {uploading ? "Uploading…" : url ? "Replace" : "Upload image"}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
          style={{ display: "none" }}
          onChange={handleFile}
        />
        <span className="image-upload-or">or</span>
        <input
          type="text"
          className="admin-input image-upload-url"
          placeholder="paste image URL"
          value={url}
          onChange={(e) => { setUrl(e.target.value); setUploadError(""); }}
        />
      </div>

      {uploadError && <p className="admin-error" style={{ marginTop: 6 }}>{uploadError}</p>}
    </div>
  );
}
