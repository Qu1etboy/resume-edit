import isHotkey from "is-hotkey";
import { useCallback, useState } from "react";
import {
  Editor,
  Transforms,
  createEditor,
  Element as SlateElement,
  BaseEditor,
} from "slate";
import { Slate, Editable, withReact, useSlate, ReactEditor } from "slate-react";
import Icon from "./Icon";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const HOTKEYS: any = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];

export default function RichTextEditor({ value }: { value: string }) {
  const [editor] = useState(() => withReact(createEditor()));
  const renderElement = useCallback((props: any) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);

  return (
    <div className="border rounded-md">
      <Slate
        editor={editor}
        value={
          [
            {
              type: "paragraph",
              children: [{ text: value }],
            },
          ] as any
        }
        onChange={(value) => {
          console.log(value);
        }}
      >
        <Toolbar />
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          spellCheck
          autoFocus={true}
          placeholder="Description"
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event as any)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
          className="p-2.5"
        />
      </Slate>
    </div>
  );
}

function Element({ attributes, children, element }: any) {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "bulleted-list":
      return (
        <ul className="list-disc ml-6" style={style} {...attributes}>
          {children}
        </ul>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol className="list-decimal ml-6" style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
}

function Leaf({ attributes, children, leaf }: any) {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
}

function Toolbar() {
  return (
    <div className="inline-block border-b w-full bg-slate-100">
      <MarkButton icon="format_bold" format="bold" />
      <MarkButton icon="format_italic" format="italic" />
      <MarkButton icon="format_underline" format="underline" />
      <BlockButton format="numbered-list" icon="format_list_numbered" />
      <BlockButton format="bulleted-list" icon="format_list_bulleted" />
    </div>
  );
}

function MarkButton({ icon, format }: { icon: string; format: string }) {
  const editor = useSlate();

  return (
    <button
      type="button"
      className={`${
        isMarkActive(editor, format) ? "font-semibold" : "text-gray-400"
      } p-3`}
      onMouseDown={(e) => {
        e.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon icon={icon} />
    </button>
  );
}

function BlockButton({ format, icon }: { format: string; icon: string }) {
  const editor = useSlate();
  return (
    <button
      type="button"
      className={`${
        isBlockActive(editor, format) ? "font-semibold" : "text-gray-400"
      } p-3`}
      onMouseDown={(e) => {
        e.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon icon={icon} />
    </button>
  );
}

function isBlockActive(editor: any, format: any) {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n["type"] === format,
    })
  );

  return !!match;
}

function isMarkActive(editor: any, format: string) {
  const marks: any = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}

function toggleMark(editor: any, format: string) {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
}

function toggleBlock(editor: any, format: any) {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type),
    split: true,
  });
  let newProperties: Partial<SlateElement> = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };

  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
}
