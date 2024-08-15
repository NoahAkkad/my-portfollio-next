import { useState } from "react";

type FormErrors<T> = Partial<Record<keyof T, string>>;

function useForm<T>(initialState: T) {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit =
    (callback: () => void) => (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (validate()) {
        callback();
      }
    };

  const validate = (): boolean => {
    const newErrors: FormErrors<T> = {};

    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        if (!values[key as keyof T]) {
          newErrors[key as keyof T] = "This field is required";
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
