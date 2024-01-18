import { FC } from "react";
import bg_image from "assets/auth/auth-bg-image.jpg";
import person_circle_image from "assets/auth/auth-person-circle.svg";
import { AuthInput } from "./AuthInput";
import profile_icon from "assets/auth/profile-white-filled.svg";
import lock_icon from "assets/auth/lock-icon.svg";
import { Button } from "components/forms";

export const Login: FC = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col w-[min(100%,_523px)] shadow-md overflow-hidden rounded-md">
        <img className="w-full" src={bg_image} alt="bg-image" />
        <div className="flex flex-col bg-white">
          <img
            className="w-[min(100%,_117px)] self-center relative mt-[-58px] h-[min(100%,_117px)] overflow-hidden rounded-full "
            src={person_circle_image}
            alt="person-circle-image"
          />
          <form className="pb-[4.0625rem] pt-10 px-10 self-center w-[max(80%,_300px)] flex flex-col gap-10">
            <AuthInput
              label="Identifiant"
              input={{ placeholder: "Adresse e-mail" }}
              img={profile_icon}
            />
            <AuthInput
              label="Mot de passe"
              input={{ placeholder: "**********", type: "password" }}
              img={lock_icon}
            />
            <Button type="submit" className="mt-5 self-center">
              SE CONNECTER
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
