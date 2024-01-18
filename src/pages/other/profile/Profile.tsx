import { Button } from "components/forms";
import { FC, PropsWithChildren } from "react";
import profile_magazin from "assets/trash/profile_magazin.jpg";
import profile_pic from "assets/trash/profile_pic.png";

export const Profile: FC = () => {
  return (
    <div className="flex flex-col gap-[4.4rem]">
      <Container
        title="Mon commerce"
        to="/profile/edit"
        className="flex gap-[2.625rem]"
      >
        <img
          src={profile_magazin}
          className="w-[300px] h-[220px] object-contain"
          alt="profile-magazin"
        />
        <div className="flex flex-col gap-5">
          <p className="text-[1.3rem] font-medium">Nom du commerce</p>
          <div className="flex flex-col gap-1">
            <p>Adresse du commerce 75000 Ville</p>
          </div>
        </div>
      </Container>
      <Container
        title="Mon commerce"
        to="/profile/edit"
        className="flex flex-col gap-[2.4rem]"
      >
        <div className="flex gap-[2.625rem]">
          <img
            src={profile_pic}
            className="w-[204px] h-[204px] object-contain rounded-full"
            alt="profile-magazin"
          />
          <div className="flex flex-col gap-5">
            <p className="text-[1.3rem] font-medium">Nom prénom</p>
            <div className="flex flex-col gap-3">
              <p>adressse@email.Com</p>
              <p>0645369034</p>
            </div>
          </div>
        </div>
        <p>
          Compte créé le <span className="font-bold">14/11/2023</span>
        </p>
      </Container>
    </div>
  );
};

interface IContainerProps extends PropsWithChildren {
  title: string;
  to: string;
  className?: string;
}
const Container: FC<IContainerProps> = ({ children, to, title, className }) => {
  return (
    <div className="rounded-[20px] shadow-md py-[2.4rem] px-[3.75rem] flex flex-col gap-[2.4rem]">
      <p className="text-[var(--green)] text-[1.775rem] font-medium">{title}</p>
      <div className={className}>{children}</div>
      <Button className="self-start" to={to}>
        Modifier les informations
      </Button>
    </div>
  );
};
