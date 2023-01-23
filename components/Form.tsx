import React, { useEffect, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import RichTextEditor from "./richtext/RichTextEditor";

export default function Form({
  form,
  currValue,
  handleChangeData,
  handleRemoveData,
}: any) {
  const [value, setValue] = useState(currValue);
  const [openForm, setOpenForm] = useState(false);

  const handleChangeEditor = (richText: any, name: string) => {
    setValue({ ...value, [name]: richText });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // every time state change set data back to parent component
    handleChangeData(value, form.name);
  }, [value]);

  const title = value[form.fields[0].name];

  return (
    <div className="flex items-start group mb-3">
      <div className="w-full border hover:border-blue-500 group rounded-md duration-300">
        <button
          type="button"
          className="w-full text-left cursor-pointer p-5"
          onClick={() => setOpenForm(!openForm)}
        >
          {title !== undefined && title !== "" ? title : "Untitled"}
          <span className="float-right group-hover:text-blue-500">
            <svg
              fill="#000000"
              height="12"
              width="12"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
            >
              {openForm ? (
                <path
                  id="XMLID_224_"
                  d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
    l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
    C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
                />
              ) : (
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              )}
            </svg>
          </span>
        </button>
        {openForm && (
          <div className="mt-3 mb-5 px-5">
            {form.fields.map((field: any, idx: number) => (
              <div key={idx}>
                <label className="text-gray-500 text-sm">{field.label}</label>
                {field.type === "text" ? (
                  <input
                    placeholder={field.placeHolder}
                    name={field.name}
                    onChange={handleChangeInput}
                    className="p-2.5 bg-gray-50 mb-3 border rounded-md w-full"
                    value={value[field.name]}
                  />
                ) : (
                  <RichTextEditor
                    value={value[field.name]}
                    name={field.name}
                    onChange={handleChangeEditor}
                  />
                )}
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
