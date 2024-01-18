import { yupResolver } from "@hookform/resolvers/yup";
import delivery_car_icon from "assets/delivery-car-icon.svg";
import {
  Button,
  DatePicker,
  Input,
  Select,
  TimePicker,
} from "components/forms";
import { FC, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { b2b_schema } from "validations";
import { OrderContainer } from "../OrderContainer";
import { Calculator } from "./Calculator";

export const B2b: FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const formMethods = useForm({
    resolver: yupResolver(b2b_schema),
    defaultValues: {
      collections: [{ address: "", category: "", vol: "", weight: "" }],
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = formMethods;
  const { fields, append } = useFieldArray({
    control,
    name: "collections",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[var(--dark-green)] p-[2.75rem] pb-[4rem] rounded-md flex flex-col gap-[44px]"
      >
        <OrderContainer
          title={{
            img: delivery_car_icon,
            text: "Détails de la livraison",
          }}
        >
          <div className="flex flex-col gap-[3.75rem]">
            {/* <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px, 1fr))] gap-[27px_23px] h-fit">
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
            </div> */}
            <div className="flex flex-col gap-[27px] w-full">
              {fields.map((field, index) => (
                <div key={field.id} className="flex flex-col gap-4">
                  <p>Point de collecte n°{index + 1}</p>
                  <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-[27px] w-full">
                    <Select
                      placeholder="Adresse"
                      onChange={(v) => {
                        setValue(
                          `collections.${index}.address`,
                          v.value as string
                        );
                      }}
                      error={
                        !watch(`collections.${index}.address`)
                          ? (errors?.collections?.[index]?.address
                              ?.message as unknown as string)
                          : ""
                      }
                      options={[{ label: "none", value: "1" }]}
                    />
                    <Input
                      placeholder="Catégorie"
                      {...register(`collections.${index}.category`)}
                      error={
                        errors?.collections?.[index]?.category
                          ?.message as unknown as string
                      }
                    />
                    <Input
                      placeholder="Poids (kg)"
                      {...register(`collections.${index}.weight`)}
                      error={
                        errors?.collections?.[index]?.weight
                          ?.message as unknown as string
                      }
                    />
                    <Input
                      placeholder="Volume (L)"
                      {...register(`collections.${index}.vol`)}
                      error={
                        errors?.collections?.[index]?.vol
                          ?.message as unknown as string
                      }
                    />
                  </div>
                </div>
              ))}
              <Button
                onClick={() =>
                  append({ address: "", category: "", vol: "", weight: "" })
                }
                className="w-fit !rounded-[0.625rem] flex items-center gap-2 cursor-pointer text-[var(--gray)] h-10"
              >
                <span className="text-[2rem] leading-[10px]">+</span>
                <span className="text-[13px]">
                  Ajouter un point de collecte
                </span>
              </Button>
            </div>

            <div className="flex flex-wrap gap-[1.625rem_2.1rem]">
              <DatePicker
                onValidChange={(d) => {
                  setValue("deliverDate", d.date);
                }}
                hideOtherMonthDays
                classNames={{ parent: "w-full max-w-[300px]" }}
                inputProps={{ placeholder: "Date de livraison" }}
                error={
                  !watch("deliverDate") ? errors["deliverDate"]?.message : ""
                }
              />
              <TimePicker
                onValidChange={(d) => {
                  if (d.hours && d.minutes) setValue("deliverTime", d.time);
                }}
                classNames={{ parent: "w-full max-w-[300px]" }}
                inputProps={{ placeholder: "Heure de la livraison" }}
                error={
                  !watch("deliverTime") ? errors["deliverTime"]?.message : ""
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-[3.125rem]">
            <Button
              onClick={() => setShowCalculator((p) => !p)}
              className="w-fit"
            >
              CALCULER LE PRIX
            </Button>
            {showCalculator && <Calculator />}
          </div>
        </OrderContainer>

        <Button type="submit" className="w-fit self-center">
          VALIDER
        </Button>
      </form>
    </FormProvider>
  );
};
