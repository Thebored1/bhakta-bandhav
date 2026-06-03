"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface RichTextEditorProps {
  name: string;
  defaultValue?: string;
  placeholder?: string;
}

export default function RichTextEditor({
  name,
  defaultValue = "",
  placeholder = "Write something…",
}: RichTextEditorProps) {
  const hiddenRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (!hiddenRef.current) return;
    hiddenRef.current.value = value;
  }, [value]);

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [2, 3, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "link"],
        ["clean"],
      ],
    }),
    []
  );

  const formats = useMemo(
    () => ["header", "bold", "italic", "underline", "list", "bullet", "blockquote", "link"],
    []
  );

  return (
    <div className="admin-wysiwyg">
      <div className="admin-wysiwyg-shell">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
        />
      </div>
      <input type="hidden" name={name} ref={hiddenRef} value={value} readOnly />
    </div>
  );
}
