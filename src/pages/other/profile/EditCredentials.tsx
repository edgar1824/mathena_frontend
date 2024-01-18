import { Button, Input } from "components/forms";
import { FC, PropsWithChildren } from "react";

export const EditCredentials: FC = () => {
  return (
    <>
      <form className="flex flex-col gap-[4.75rem] max-w-[930px]">
        <div className="flex flex-col gap-6">
          <p className="text-[1.775rem]">Modifier son mot de passe</p>
          <div className="flex flex-col gap-[3.825rem]">
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[2.125rem_5.625rem]">
              <LabelWrapper label="Mot de passe actuel">
                <Input />
              </LabelWrapper>
              <LabelWrapper label="Nouveau mot de passe">
                <Input />
              </LabelWrapper>
              <LabelWrapper label="Confirmer le mot de passe">
                <Input />
              </LabelWrapper>
            </div>
          </div>
        </div>

        <Button className="self-start">Enregistrer les changements</Button>
      </form>
    </>
  );
};

const LabelWrapper: FC<PropsWithChildren & { label: string }> = ({
  children,
  label,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span>{label}</span>
      {children}
    </div>
  );
};
