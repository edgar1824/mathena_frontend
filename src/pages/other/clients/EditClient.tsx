import { Button, Input } from "components/forms";
import profile_filled_icon from "assets/profile_filled_icon.svg";
import { FC } from "react";
import { client_edit_schema } from "validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";

export const EditClient: FC = () => {
  const formMethods = useForm({
    resolver: yupResolver(client_edit_schema),
    defaultValues: {
      addresses: [{ address: "" }],
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;
  const { fields, append } = useFieldArray({
    control,
    name: "addresses",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[var(--dark-green)] flex flex-col gap-[3.2rem] px-[4rem] py-[2.75rem] rounded-md"
    >
      <div className="bg-[rgba(255,_255,_255,_0.80)] shadow-md rounded-md flex flex-col gap-[2.25rem] px-9 py-8">
        <div className="flex items-center gap-4">
          <img
            src={profile_filled_icon}
            className="w-[3.5rem] h-[3.5rem]"
            alt="profile-filled-icon"
          />
          <p className="text-[var(--green)] font-semibold">
            Informations du client
          </p>
        </div>
        <div className="flex gap-[4.4rem]">
          <div className="grid grid-cols-2 gap-[27px_23px] h-fit">
            <Input
              {...register("name")}
              placeholder="Nom"
              error={errors["name"]?.message}
            />
            <Input
              {...register("lastname")}
              placeholder="Prénom"
              error={errors["lastname"]?.message}
            />
            <Input
              {...register("email")}
              placeholder="E-mail"
              error={errors["email"]?.message}
            />
            <Input
              {...register("tel")}
              placeholder="Téléphone"
              error={errors["tel"]?.message}
            />
          </div>
          <div className="flex flex-col gap-[27px] flex-[1]">
            {fields.map((field, index) => (
              <Input
                key={field.id}
                placeholder="Adresse"
                {...register(`addresses.${index}.address`)}
                error={
                  errors?.addresses?.[index]?.address
                    ?.message as unknown as string
                }
              />
            ))}
            <p
              onClick={() => append({ address: "" })}
              className="flex items-center gap-2 cursor-pointer text-[var(--gray)] h-10"
            >
              <span className="text-[2rem] leading-[10px]">+</span>
              <span className="text-[15px]">Ajouter une adresse</span>
            </p>
          </div>
        </div>
      </div>
      <Button type="submit" className="self-center">
        MODIFIER
      </Button>
    </form>
  );
};
