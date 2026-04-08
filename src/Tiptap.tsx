import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic, List, Heading2, Quote } from "lucide-react";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import {
  Underline as UnderlineIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { useEffect } from "react";

export default function RichTextEditor({ value = "", onChange }: any) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value || "<p>Tulis sesuatu...</p>",
    editorProps: {
      attributes: {
        // 🔥 lebih rapat lagi
        class: "focus:outline-none min-h-[200px] text-[14px] leading-[1.3]",
      },
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
  });

  if (!editor) return null;

  const buttonClass = (active: any) =>
    `p-2 rounded-lg transition ${
      active ? "bg-black text-white" : "hover:bg-gray-100"
    }`;

  useEffect(() => {
    if (!editor) return;

    if (value !== editor.getHTML()) {
      editor.commands.setContent(value || "<p></p>");
    }
  }, [value, editor]);

  return (
    <div className="border rounded-2xl bg-white shadow-sm">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 border-b sticky top-0 bg-white z-10">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={buttonClass(editor.isActive("bold"))}
        >
          <Bold size={16} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={buttonClass(editor.isActive("italic"))}
        >
          <Italic size={16} />
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={buttonClass(editor.isActive("heading", { level: 2 }))}
        >
          <Heading2 size={16} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={buttonClass(editor.isActive("bulletList"))}
        >
          <List size={16} />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={buttonClass(editor.isActive("blockquote"))}
        >
          <Quote size={16} />
        </button>

        {/* Underline */}
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={buttonClass(editor.isActive("underline"))}
        >
          <UnderlineIcon size={16} />
        </button>

        {/* Align Left */}
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={buttonClass(editor.isActive({ textAlign: "left" }))}
        >
          <AlignLeft size={16} />
        </button>

        {/* Align Center */}
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={buttonClass(editor.isActive({ textAlign: "center" }))}
        >
          <AlignCenter size={16} />
        </button>

        {/* Align Right */}
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={buttonClass(editor.isActive({ textAlign: "right" }))}
        >
          <AlignRight size={16} />
        </button>
      </div>

      {/* Editor */}
      <div className="p-4">
        {/* 🔥 spacing lebih kecil + quote lebih soft */}
        <div
          className="prose prose-sm max-w-none
          [&_p]:my-[2px]
          [&_ul]:my-1
          [&_li]:my-0
          [&_h1]:my-2
          [&_h2]:my-1
          [&_blockquote]:my-1
          [&_blockquote]:border-l-2
          [&_blockquote]:border-gray-300
          [&_blockquote]:pl-3
          [&_blockquote]:text-gray-500
          [&_blockquote]:italic
          [&_blockquote]:bg-gray-50
          [&_blockquote]:py-1
          [&_blockquote]:rounded-sm
        "
        >
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
}
