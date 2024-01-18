import { Button, SearchInput, SearchSelect } from "components/forms";
import fake_img from "assets/trash/delivery-img.png";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const SingleClient: FC = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-12">
      <SearchSelect
        className="self-end shadow-md"
        placeholder="Rechercher un client"
      />
      <div className="bg-[var(--dark-green)] flex flex-col gap-[3.2rem] px-[4rem] py-[2.75rem] rounded-md">
        <div className="flex justify-between gap-4 w-full">
          <div className="flex flex-col gap-4 text-[var(--green)]">
            <p className="text-[1.9rem]">Prénom NOM</p>
            <p>
              Adresse du client <br /> 75000 Ville
            </p>
            <p>06 00 00 00 00</p>
            <p>client@gmail.Com</p>
          </div>
          <Button to={`/clients/${id}/edit`}>
            MODIFIER LES INFORMATIONS CLIENT
          </Button>
        </div>
        <div className="bg-white shadow-md rounded-md flex flex-col gap-[2.3125rem] px-9 py-8">
          <p className="font-semibold">Commandes effectuées</p>
          <div className="flex flex-col gap-5 w-full">
            <ClientOrder />
            <ClientOrder />
            <ClientOrder />
          </div>
        </div>

        <Button className="self-end">Effectuer une nouvelle commande</Button>
      </div>
    </div>
  );
};

const ClientOrder: FC = () => {
  return (
    <div className="w-full flex gap-4 justify-between">
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
      <span className="font-semibold">Date</span>
      <span className="font-semibold">Mode de livraison</span>
      <span className="font-semibold">Coût</span>
    </div>
  );
};
