import { useEffect, useState } from "react";

export default function Form({
  form,
  currValue,
  handleChangeData,
  handleRemoveData,
}: any) {
  const [value, setValue] = useState(currValue);
  const [openForm, setOpenForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // every time state change set data back to parent component
    handleChangeData(value, form.name);
  }, [value]);

  const title = value[form.fields[0].name];

  return (
    <div className="flex items-start group">
      <div className="w-full border hover:border-blue-500 group rounded-md duration-300">
        <button
          type="button"
          className="w-full text-left cursor-pointer p-5"
          onClick={() => setOpenForm(!openForm)}
        >
          {title !== undefined && title !== "" ? title : "Untitled"}
          <span className="float-right group-hover:text-blue-500">v</span>
        </button>
        {openForm && (
          <div className="mt-3 mb-5 px-5">
            {form.fields.map((field: any, idx: number) => (
              <div key={idx}>
                <label>{field.label}</label>
                <input
                  placeholder={field.placeHolder}
                  name={field.name}
                  onChange={handleChange}
                  className="p-2 mb-3 border rounded-md w-full"
                  value={value[field.name]}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        className="ml-2 mt-6 invisible group-hover:visible"
        type="button"
        onClick={() => handleRemoveData(value.id, form.name)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 30 30"
          className="hover:fill-red-500 duration-300"
        >
          <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
        </svg>
      </button>
    </div>
  );
}
