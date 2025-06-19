import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import axios from "axios";
import createAlert from "../../utils/createAlert";

const formInputs = [
  { name: "email", placeholder: "Email", type: "email" },
  { name: "name", placeholder: "Name", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
  { name: "confirm_password", placeholder: "Confirm Password", type: "password" },
];

function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post("http://localhost:8000/auth/register", data);
      console.log(res);
    } catch (error: any) {
      createAlert('error', error.message)
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="border w-64 h-full p-4 m-4 rounded-md">
        <h1 className="font-bold text-center">Register</h1>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {formInputs.map((input) => (
            <FormInput 
              key={input.name}
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
              register={register}
            />
          ))}
          <button
            type="submit"
            className="bg-pink-700 text-white rounded-md px-4 py-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
