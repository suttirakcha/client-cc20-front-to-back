import { Loader } from "lucide-react";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  className?: string;
  isSubmitting?: boolean;
  label: string;
  loadingText?: string;
  type?: ButtonType;
}

function Button({
  className,
  isSubmitting,
  loadingText,
  label,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={`bg-pink-700 hover:bg-pink-600 cursor-pointer text-white rounded-md px-4 py-2 flex items-center gap-2 justify-center ${className}`}
      type={type}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Loader className="animate-spin h-5 w-5" />
          {loadingText || label}
        </>
      ) : (
        label
      )}
    </button>
  );
}

export default Button;
