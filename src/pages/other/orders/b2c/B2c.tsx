import { yupResolver } from "@hookform/resolvers/yup";
import delivery_car_icon from "assets/delivery-car-icon.svg";
import profile_filled_icon from "assets/profile_filled_icon.svg";
import {
  Button,
  DatePicker,
  ErrorWrapper,
  Input,
  TimePicker,
} from "components/forms";
import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { b2c_schema } from "validations";
import { OrderContainer } from "../OrderContainer";
import { Calculator } from "./Calculator";

export const B2c: FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const formMethods = useForm({
    resolver: yupResolver(b2c_schema),
    defaultValues: {
      addresses: [{ address: "" }],
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
    name: "addresses",
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
            img: profile_filled_icon,
            text: "Informations du client",
          }}
        >
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
            <div className="flex flex-col gap-[27px]">
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
        </OrderContainer>

        <OrderContainer
          title={{
            img: delivery_car_icon,
            text: "Détails de la livraison",
          }}
        >
          <div className="flex flex-col gap-[3.125rem]">
            <div className="flex flex-wrap gap-[1.625rem_2.1rem]">
              <Input
                parentClassName="w-[35%]"
                {...register("category")}
                placeholder="Catégorie"
                error={errors["category"]?.message}
              />
              <Input
                {...register("weight")}
                placeholder="Poids (kg)"
                error={errors["weight"]?.message}
              />
              <Input
                {...register("vol")}
                placeholder="Volume (L)"
                error={errors["vol"]?.message}
              />
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
            <ErrorWrapper
              error={
                watch("range") === undefined ? errors["range"]?.message : ""
              }
            >
              <ProgressBar onChange={(p) => setValue("range", p)} />
            </ErrorWrapper>
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

const barWidth = 500;
const barHeight = 36;
const pointerWidth = 30;
const ProgressBar: FC<{ onChange?: (percent: number) => void }> = ({
  onChange,
}) => {
  const [mouse, setMouse] = useState({ down: false });
  const [pointer, setPointer] = useState({
    percent: 50,
  });
  const ref = useRef<HTMLDivElement>(null!);
  const mousemoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (mouse.down) {
      if (
        Math.round((Math.round(e.nativeEvent.offsetX) / barWidth) * 100) % 1 ===
        0
      ) {
        setPointer({
          percent: Math.round((e.nativeEvent.offsetX / barWidth) * 100),
        });
        onChange?.(Math.round((e.nativeEvent.offsetX / barWidth) * 100));
      }
    }
  };

  useEffect(() => {
    const mouseDownHandler = () => {
      setMouse((p) => ({ ...p, down: true }));
    };
    const mouseUpHandler = () => {
      setMouse((p) => ({ ...p, down: false }));
    };

    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    return () => {};
  }, []);

  return (
    <div className="flex flex-col gap-7 text-[#111] text-[15px] select-none">
      <div className="flex flex-col gap-4">
        <p>Partage du prix de la livraison</p>
        <p className="text-[#9D9D9D] italic">
          Choissisez de payer une partie ou l’intégralité de la livraison
        </p>
      </div>

      <div className="relative w-fit pt-10">
        <div
          className="absolute inset-0 z-[2]"
          onMouseMove={mousemoveHandler}
          // onMouseDown={() => setMouse((p) => ({ ...p, down: true }))}
          // onMouseUp={() => setMouse((p) => ({ ...p, down: false }))}
          // onMouseLeave={() => setMouse((p) => ({ ...p, down: false }))}
        ></div>
        <div
          className="rounded-[20px] overflow-hidden flex items-center"
          style={{ width: barWidth + "px", height: barHeight + "px" }}
        >
          <div
            className="bg-[var(--green)] h-full text-white flex items-center whitespace-nowrap overflow-ellipsis"
            style={{ width: pointer.percent + "%" }}
          >
            <span className="pl-5">Vous payez</span>
          </div>
          <div
            className="bg-[var(--yellow)] h-full text-white flex items-center whitespace-nowrap overflow-ellipsis"
            style={{ width: 100 - pointer.percent + "%" }}
          >
            <span className="pl-5">Le client paie</span>
          </div>
          <div
            ref={ref}
            style={{
              left: `calc(${pointer.percent + "%"} - ${
                pointerWidth / 2 + "px"
              })`,
              width: pointerWidth + "px",
            }}
            className="bottom-0 absolute"
          >
            <div className="text-[#696969] flex flex-col">
              <span className="leading-3">{pointer.percent}%</span>
              <div className="flex items-center flex-col">
                <span
                  style={{ transform: "rotateX(20deg)" }}
                  className="text-base rounded w-4 h-3 leading-none text-[#B9E6C9]"
                >
                  &#9660;
                </span>
                <div
                  className="w-[2px] bg-[#B9E6C9]"
                  style={{ height: barHeight + "px" }}
                />
              </div>
            </div>
          </div>
          {pointer.percent !== 0 && (
            <div
              style={{ bottom: barHeight + "px" }}
              className="absolute text-[#696969] left-0"
            >
              0%
            </div>
          )}
          {pointer.percent !== 100 && (
            <div
              style={{ bottom: barHeight + "px" }}
              className="absolute text-[#696969] right-0"
            >
              100%
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
