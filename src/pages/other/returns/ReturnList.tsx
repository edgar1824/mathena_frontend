import edit_icon from "assets/edit-icon.svg";
import trash_icon from "assets/trash-icon.svg";
import fake_product_img from "assets/trash/fake_table_img.png";
import download_icon from "assets/download-icon.svg";
import { SearchInput, SearchSelect } from "components/forms";
import { NumberPicker } from "components/forms/NumberPicker";
import { Badge, Table } from "components/reusable";
import { FC } from "react";

const rndm = (max: number, min: number = 0) =>
  Math.floor(Math.random() * max + min);

const fakeTableData = Array.from({ length: 15 }).map(() => ({
  _id: "#45169",
  name: "Téléphone",
  img: fake_product_img,
  client: "Lou Brossard",
  createdAt: "15/06/2023",
  price: 4.5,
  currency: "€",
  refundState: false,
  status: ["pending", "delivered"][rndm(2)],
  returnMethod: ["OUI", "NON"][rndm(2)],
  source: "Magasin",
}));

export const ReturnList: FC = () => {
  return (
    <div className="flex flex-col gap-9">
      {/* <SearchInput
        placeholder="Rechercher un retour"
        iconClassName="left-6"
        className="self-end shadow-md !rounded-[32px] overflow-hidden !px-3"
      /> */}
      <SearchSelect
        className="self-end shadow-md"
        placeholder="Rechercher un retour"
      />
      <Table
        data={fakeTableData}
        trClassName="items-center"
        filterNode={
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-white text-xs font-medium font-rat">
                Montrer
              </span>
              <NumberPicker />
            </div>
            <div className="text-white text-xs font-medium font-rat">
              <select
                defaultValue=""
                className="border-none bg-transparent"
                name=""
                id=""
              >
                <option value="" disabled>
                  Filtrer par
                </option>
              </select>
            </div>
          </div>
        }
        cols={[
          { render: ({ _id }) => _id, title: "Commande n°", col: 3 },
          {
            col: 4,
            render: ({ img, name }) => (
              <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-[8px]" src={img} alt={name} />
                <span>{name}</span>
              </div>
            ),
            title: "Produit",
            filterArrows: true,
          },
          {
            col: 4,
            render: ({ client }) => client,
            title: "Client",
            filterArrows: true,
          },
          {
            col: 4,
            render: ({ createdAt }) => createdAt,
            title: "Date du retour",
            filterArrows: true,
          },
          {
            tdClassName: "w-full justify-center",
            col: 5,
            render: ({ price, currency }) => (
              <span>{price + " " + currency}</span>
            ),
            title: "Montant livraison retour",
          },
          {
            col: 4,
            render: ({ returnMethod }) => returnMethod,
            title: "Remboursement",
          },
          {
            col: 4,
            render: ({ source }) => source,
            title: "Provenance",
          },
          {
            col: 4,
            render: ({ status }) => (
              <Badge
                className="w-full text-center"
                color={
                  {
                    pending: "yellow" as const,
                    delivered: "green" as const,
                    canceled: "red" as const,
                  }[status]
                }
              >
                {
                  {
                    pending: "En cours",
                    delivered: "Délivrée",
                    canceled: "Annulée",
                  }[status]
                }
              </Badge>
            ),
            title: "Statut",
            filterArrows: true,
          },
          {
            thClassName: "!justify-center",
            tdClassName: "!justify-center",
            col: 4,
            render: ({}) => (
              <div className="flex items-center gap-2">
                <img
                  className="cursor-pointer"
                  src={edit_icon}
                  alt="edit-icon"
                />
                <img
                  className="cursor-pointer"
                  src={trash_icon}
                  alt="trash-icon"
                />
              </div>
            ),
            title: "Action",
          },
        ]}
      />

      <a
        href="#"
        download={"#"}
        className="cursor-pointer flex items-center gap-3 self-end"
      >
        <img
          className="w-10 h-10 object-contain"
          src={download_icon}
          alt="download-icon"
        />
        <span>Télécharger au format CSV</span>
      </a>
    </div>
  );
};
