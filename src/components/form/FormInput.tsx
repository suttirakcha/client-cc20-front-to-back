import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  name: Path<T> | string;
  register: UseFormRegister<T>;
  placeholder?: string;
  type?: string;
  errors: FieldErrors<T>;
}

function FormInput<T extends FieldValues>({
  name,
  register,
  placeholder,
  type = "text",
  errors,
}: FormInputProps<T>) {
  const error = errors[name];
  return (
    <div className="space-y-1">
      <input
        className="border w-full rounded-md border-gray-400 p-2"
        placeholder={placeholder}
        type={type}
        {...register(name as any)}
      />
      {error && typeof error.message === "string" && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}

export default FormInput;
