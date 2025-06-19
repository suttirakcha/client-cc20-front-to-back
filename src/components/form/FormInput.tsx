import type { FieldValues, UseFormRegister } from "react-hook-form";

interface FormInputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  placeholder?: string;
  type?: string;
}

function FormInput({
  name,
  register,
  placeholder,
  type
}: FormInputProps) {
  return (
    <input
      className="border w-full rounded-md border-gray-400 p-2"
      placeholder={placeholder}
      type={type}
      {...register(name)}
    />
  );
}

export default FormInput;
