import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginValues, LoginValuesSchema } from "./LoginForm.def";
import Input from "../components/inputText";
import { Button } from "../components/button/Button";

export const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(LoginValuesSchema),
  });
  const onSubmit: SubmitHandler<LoginValues> = async (data) => {
    await new Promise((res) => {
      setTimeout(res, 2000);
    });
    console.log("Data", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-theme="light"
      className="flex flex-col w-1/2 m-auto py-16 px-8 rounded"
    >
      <Input.Root>
        <>
          <Input.Label label="Email" />
          <Input.Input placeholder="You're email here" {...register("email")} />
          <Input.Helper text={errors.email?.message ?? ""} />
        </>
      </Input.Root>

      <Input.Root>
        <>
          <Input.Label label="Password" />
          <Input.Input
            placeholder="You're password here"
            type="password"
            {...register("password")}
          />
          <Input.Helper text={errors.password?.message ?? ""} />
        </>
      </Input.Root>
      <Button type="submit" disabled={isSubmitting} label="Login" />
    </form>
  );
};
