import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import createAlert from "../../utils/createAlert";
import Button from "../../components/form/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { type LoginFields, loginSchema } from "../../utils/validator";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router";

const formInputs = [
  { name: "email", placeholder: "Email", type: "email" },
  { name: "password", placeholder: "Password", type: "password" },
];

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm<LoginFields>({
    resolver: yupResolver(loginSchema),
  });
  const { isSubmitting, errors } = formState;

  const login = useAuthStore(state => state.loginWithZustand);

  const onSubmit = async (data: LoginFields) => {
    try {
      const res = await login(data);
      if (res.success) redirectBasedOnRole(res.role!);
      createAlert("success", "Welcome back");
    } catch (error: any) {
      console.log(error);
      createAlert("error", error.message)
    }
  };

  const redirectBasedOnRole = (role: string) => {
    navigate(role === "ADMIN" ? "/admin" : "/user");
  }

  return (
    <div className="flex w-full h-full justify-center">
      {/* Card */}
      <div className="border border-pink-800 w-80 h-full p-4 m-4 rounded-md">
        <h1 className="font-bold text-center mb-2">Login</h1>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {formInputs.map((input) => (
            <FormInput<LoginFields>
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
            label="Login"
            loadingText="Logging in..."
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
