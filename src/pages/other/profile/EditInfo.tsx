import gallery_add_icon from "assets/profile/gallery-add.svg";
import { Button, Input, Select } from "components/forms";
import { classes } from "helper";
import { FC, useEffect, useId, useState } from "react";

export const EditInfo: FC = () => {
  return (
    <>
      <form className="flex flex-col gap-[4.75rem] max-w-[930px]">
        <div className="flex flex-col gap-6">
          <p className="text-[1.775rem]">Profil</p>
          <div className="flex flex-col gap-[3.825rem]">
            <ImagePicker onChange={(file) => console.log(file)} />
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[2.125rem_5.625rem]">
              <Input placeholder="Nom complet" />
              <Input placeholder="E-mail" />
              <Input placeholder="Téléphone" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-[1.775rem]">Commerce</p>
          <div className="flex flex-col gap-[3.825rem]">
            <ImagePicker
              className="w-[min(100%,_351px)]"
              onChange={(file) => console.log(file)}
            />
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[2.125rem_5.625rem]">
              <Input placeholder="Nom du commerce" />
              <Input placeholder="Numéro Siret" />
              <Select
                placeholder="Activité"
                options={[{ label: "value", value: 1 }]}
              />
            </div>
          </div>
        </div>
        <Button className="self-start">Mettre à jour</Button>
      </form>
    </>
  );
};

interface ImagePickerProps {
  className?: string;
  img?: string;
  onChange?: (file: File) => void;
}

const ImagePicker: FC<ImagePickerProps> = ({ className, img, onChange }) => {
  const [file, setFile] = useState<File>(null!);
  const uniqueId = useId();
  useEffect(() => {
    if (!!file) onChange?.(file);
  }, [file]);
  return (
    <label
      htmlFor={uniqueId}
      className={classes(
        "w-[195px] h-[198px] cursor-pointer overflow-hidden self-start rounded-[18px] flex flex-col items-center justify-evenly border border-dashed border-[var(--green)] bg-white",
        className
      )}
    >
      <input
        id={uniqueId}
        type="file"
        hidden
        onChange={(e) => {
          if (e.target?.files?.[0]) setFile(e.target?.files?.[0]);
        }}
      />
      {file === null && !img ? (
        <>
          <img src={gallery_add_icon} alt="gallery-add-icon" />
          <span className="text-[#737373] text-xs font-medium text-center max-w-[75%]">
            Téléchargez votre photo
          </span>
        </>
      ) : (
        <img
          className="w-full h-full object-contain"
          src={file ? URL.createObjectURL(file) : img}
          alt="profile-image"
        />
      )}
    </label>
  );
};
