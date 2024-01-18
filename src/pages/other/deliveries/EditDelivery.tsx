import { FC } from "react";
import fake_img from "assets/trash/delivery-img.png";
import { Button } from "components/forms";

export const EditDelivery: FC = () => {
  return (
    <div className="bg-white shadow-md rounded-md pt-5 pb-[4.5rem] px-[3.875rem] w-full flex flex-col gap-8">
      <p className="text-[1.775rem] font-medium text-[var(--green)]">
        Commande #03484
      </p>
      <div className="flex flex-col gap-[3.5rem]">
        <div className="flex justify-between gap-5 w-[min(100%,_790px)]">
          <div className="flex flex-col gap-2">
            <p className="mb-12">
              <span className="font-semibold">Effectuée le :</span> 12/11/2023
            </p>
            <p>
              <span className="font-semibold">Client :</span>
              NOM prénom
            </p>
            <p>
              <span className="font-semibold">Adresse :</span>
              adresse du client 75000 Ville
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-semibold">Date de livraison prévue : </span>{" "}
              12/11/2023
            </p>
            <p>
              <span className="font-semibold">Heure de livraison :</span>
              15h30
            </p>
            <p>
              <span className="font-semibold">Mode de livraison :</span>
              voiture
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="font-semibold">Article(s) vendu(s) :</p>
          <div className="flex flex-col gap-11">
            <ImageBox />
            <ImageBox />
          </div>
        </div>
        <div className="flex gap-12">
          <p className="mb-12">
            <span className="font-semibold">Coût de la livraison : </span>
            <span className="text-[1.33rem] font-semibold"> 7 € TTC </span>
          </p>
          <div className="flex flex-col gap-2">
            <p>Pris en charge par le client : 7 € TTC</p>
            <p>Pris en charge par mon commerce : 0 € TTC</p>
          </div>
        </div>
      </div>

      <Button size="lg" bg="yellow" className="self-end">
        MODIFIER LA LIVRAISON
      </Button>
    </div>
  );
};

const ImageBox: FC = () => {
  return (
    <div className="flex gap-7">
      <img
        className="w-[112px] h-[112px] rounded-[10px]"
        src={fake_img}
        alt="article-image"
      />
      <div className="flex flex-col gap-1">
        <span className="font-semibold">Nom de l’article</span>
        <p>Description de l’article commandé</p>
      </div>
    </div>
  );
};
