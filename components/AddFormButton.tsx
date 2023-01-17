export default function AddFormButton({
  text,
  name,
  handleAdd,
}: {
  text: string;
  name: string;
  handleAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      type="button"
      className="w-full mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      name={name}
      onClick={handleAdd}
    >
      {text}
    </button>
  );
}
