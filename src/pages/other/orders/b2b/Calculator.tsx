import bicycle_img from "assets/orders/bicycle.png";
import bicycle_simple_img from "assets/orders/bicycle_simple.png";
import car_img from "assets/orders/car.png";
import fourgon_img from "assets/orders/fourgon.png";
import attention_img from "assets/orders/icon-park-outline_attention.svg";
import { Checkbox, ErrorWrapper, Radio, Textarea } from "components/forms";
import { classes } from "components/forms/datePicker/parts/utils";
import { FC, MouseEventHandler } from "react";
import { useFormContext } from "react-hook-form";

interface IDeliveryMethod {
  type: string;
  img: string;
  title: string;
  weight: number;
  vol: number;
}

const deliveryItems: IDeliveryMethod[] = [
  {
    type: "bicycle_simple",
    img: bicycle_simple_img,
    title: "Vélo",
    weight: 20,
    vol: 30,
  },
  {
    type: "car",
    img: car_img,
    title: "Voiture",
    weight: 20,
    vol: 30,
  },
  {
    type: "bicycle",
    img: bicycle_img,
    title: "Vélo cargo",
    weight: 20,
    vol: 30,
  },
  {
    type: "fourgon",
    img: fourgon_img,
    title: "Camionnette",
    weight: 20,
    vol: 30,
  },
];

export const Calculator: FC = () => {
  const formMethods = useFormContext();
  return (
    <>
      <div className="rounded-[20px] bg-white px-[1.8rem] py-12 flex flex-col gap-[2.125rem]">
        <ErrorWrapper
          error={
            formMethods.formState.errors["deliveryMethod"]
              ?.message as unknown as string
          }
          errorClassName="text-center"
        >
          <div className="grid grid-cols-2 gap-[1.5rem_2.5rem]">
            {deliveryItems.map((method, i) => (
              <DeliveryMethod
                active={formMethods.watch("deliveryMethod") === method.type}
                onClick={() =>
                  formMethods.setValue("deliveryMethod", method.type)
                }
                key={i}
                {...method}
              />
            ))}
          </div>
        </ErrorWrapper>
        <p>Nous préconisons le vélo cargo.</p>
        <div className="flex flex-col gap-3 text-[#111]">
          <span className="text-[15px]">Coût de la course : </span>
          <p className="text-[15px] font-semibold">
            Total TTC : <span className="text-xl font-semibold">6,50 €</span>
          </p>
        </div>
        <Checkbox
          {...formMethods.register("isItemBreakable")}
          text="Votre colis est-il fragile ?"
          error={
            formMethods.formState.errors["isItemBreakable"]
              ?.message as unknown as string
          }
        />
        {!!formMethods.watch("isItemBreakable") && <BreakableWarning />}
      </div>
      <Textarea
        {...formMethods.register("message")}
        placeholder="Message (optionnel)"
        error={
          formMethods.formState.errors["message"]?.message as unknown as string
        }
      />
    </>
  );
};

const DeliveryMethod: FC<
  {
    active: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
  } & IDeliveryMethod
> = ({ active, img, title, vol, weight, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classes(
        "text-[#9D9D9D] select-none flex items-center border-[3px] border-transparent gap-8 rounded-[5px] px-9 py-3 cursor-pointer",
        active && "!border-dashed !border-[#B9E6C9]"
      )}
    >
      <img
        className="w-[110px] h-[100px] object-contain"
        src={img}
        alt="title"
      />
      <div className="flex flex-col gap-4">
        <p className="text-base font-medium">{title}</p>
        <div className="flex flex-col gap-2">
          <p className="text-base">
            Poids
            <span className="font-semibold">
              {"<"} {weight} kg
            </span>
          </p>
          <p className="text-base">
            Volume
            <span className="font-semibold">
              {"<"} {vol} m3
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const BreakableWarning = () => {
  const formMethods = useFormContext();
  return (
    <div className="flex flex-col gap-11 text-[#111]">
      <div className="flex gap-7">
        <img src={attention_img} alt="warning" />
        <div className="flex flex-col gap-5 text-[15px] text-[#111]">
          <p>
            Vous avez indiqué que le colis est fragile, souhaitez-vous passer à
            la catégorie supérieure ?
          </p>
          <ErrorWrapper
            error={
              formMethods.formState.errors["warningAccepted"]
                ?.message as unknown as string
            }
          >
            <div className="flex items-center gap-12">
              <Radio
                {...formMethods.register("warningAccepted")}
                value={"yes"}
                title="Oui"
              />
              <Radio
                {...formMethods.register("warningAccepted")}
                value={"no"}
                title="Non"
              />
            </div>
          </ErrorWrapper>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[15px]">
          La livraison de votre colis se fera dorénavant en voiture. Le coût de
          la course est de :{" "}
        </p>
        <p className="font-semibold text-[15px]">
          Total : <span className="text-xl">15,50 € TTC</span>
        </p>
      </div>
    </div>
  );
};
