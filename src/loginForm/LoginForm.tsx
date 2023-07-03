import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginValues, LoginValuesSchema } from "./LoginForm.def";

export const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(LoginValuesSchema),
  });
  const onSubmit: SubmitHandler<LoginValues> = (data) => console.log(data);
  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-1/2 m-auto"
    >
      <div className="form-control w-full max-w-xs mb-4">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          {...register("email")}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs mb-4">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          {...register("password")}
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button
        disabled={isSubmitting}
        onClick={handleSubmit((data) => console.log(data))}
        className="btn btn-neutral"
      >
        Login
      </button>
    </form>
  );
};
