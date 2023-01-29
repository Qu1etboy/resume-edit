import { useEffect, useState } from "react";

export default function ShareModal({
  link,
  setOpenShareModal,
}: {
  link: string;
  setOpenShareModal: (v: boolean) => void;
}) {
  const [text, setText] = useState("copy");

  const handleCopyToClipboard = () => {
    // copy text to clipboard
    navigator.clipboard.writeText(link);
    setText("copied");
  };

  useEffect(() => {
    // delay for 3s then go back to 'copy'
    setTimeout(() => {
      setText("copy");
    }, 3000);
  });

  useEffect(() => {
    window.addEventListener("click", function () {
      //Hide the menus if visible
      setOpenShareModal(false);
    });
  }, []);

  return (
    <div className="fixed flex justify-center items-center inset-0 w-full border border-red-500">
      <div
        className="z-10 relative w-full max-w-md bg-white p-5 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="absolute right-0 top-0 m-5"
          onClick={() => setOpenShareModal(false)}
        >
          X
        </button>
        <h3 className="text-lg font-bold mb-3">
          Share your resume to everyone
        </h3>
        <p className="mb-1">copy the link and share it!</p>
        <div
          className="border px-3 py-2 relative overflow-hidden rounded-md bg-teal-300/30 cursor-pointer group"
          onClick={handleCopyToClipboard}
        >
          <span className="text-sm">{link}</span>
          <div className="absolute right-0 bg-gray-500/90 text-gray-100 px-2 rounded-md top-2 mr-2 hidden group-hover:block">
            {text}
          </div>
        </div>
      </div>
      <div className="fixed bg-black/50 w-full h-screen"></div>
    </div>
  );
}
