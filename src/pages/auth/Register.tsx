import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import createAlert from "../../utils/createAlert";
import Button from "../../components/form/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { type RegisterFields, registerSchema } from "../../utils/validator";
import { actionRegister } from "../../api/auth";

const formInputs = [
  { name: "email", placeholder: "Email", type: "email" },
  { name: "name", placeholder: "Name", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
  { name: "confirmPassword", placeholder: "Confirm Password", type: "password" },
];

function Register() {
  const { register, handleSubmit, formState, reset } = useForm<RegisterFields>({
    resolver: yupResolver(registerSchema)
  });
  const { isSubmitting, errors } = formState;

  const onSubmit = async (data: any) => {
    try {
      const res = await actionRegister(data);
      createAlert('success', res.data.message);
      reset();
    } catch (error: any) {
      console.log(error);
      createAlert('error', error.response?.data?.message);
    }
  }

  return (
    <div className="flex w-full h-full justify-center">
      {/* Card */}
      <div className="border border-pink-800 w-80 h-full p-4 m-4 rounded-md">
        <h1 className="font-bold text-center mb-2">Register</h1>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {formInputs.map((input) => (
            <FormInput<RegisterFields> 
              key={input.name}
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
              errors={errors}
              register={register}
            />
          ))}
          <Button 
            isSubmitting={isSubmitting}
            label="Register"
            loadingText="Registering..."
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
