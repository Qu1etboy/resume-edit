export default function RichTextRenderer({ text }: any) {
  return (
    <>
      {Array.isArray(text) &&
        text?.map((block: any, idx: number) => {
          switch (block.type) {
            case "paragraph":
              return <Paragraph key={idx} blockChildren={block.children} />;
            case "numbered-list":
              return <NumberedList key={idx} blockChildren={block.children} />;
            case "bulleted-list":
              return <UnorderedList key={idx} blockChildren={block.children} />;
          }
        })}
    </>
  );
}

function Paragraph({ blockChildren }: any) {
  return (
    <p>
      {blockChildren.map((child: any, idx: number) => (
        <Block key={idx} child={child} />
      ))}
    </p>
  );
}

function NumberedList({ blockChildren }: any) {
  return (
    <ol className="list-decimal ml-3">
      {blockChildren.map((child: any, idx: number) => (
        <li key={idx}>
          {child.children.map((grandson: any, idx: number) => (
            <Block key={idx} child={grandson} />
          ))}
        </li>
      ))}
    </ol>
  );
}

function UnorderedList({ blockChildren }: any) {
  return (
    <ul className="list-disc ml-3">
      {blockChildren.map((child: any, idx: number) => (
        <li key={idx}>
          {child.children.map((grandson: any, idx: number) => (
            <Block key={idx} child={grandson} />
          ))}
        </li>
      ))}
    </ul>
  );
}

function Block({ child }: any) {
  return (
    <span
      className={`${child.bold ? "font-bold" : ""} ${
        child.italic ? "italic" : ""
      } ${child.underline ? "underline" : ""}`}
    >
      {child.text}
    </span>
  );
}
