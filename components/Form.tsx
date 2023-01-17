import { useEffect, useState } from "react";
import FormLayout from "./FormLayout";

export default function Form({ form, currValue, handleChangeData }: any) {
  const [value, setValue] = useState(currValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // every time state change set data back to parent component
    handleChangeData(value, form.name);
  }, [value]);

  return (
    <FormLayout title={value[form.fields[0].name]}>
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
    </FormLayout>
  );
}
