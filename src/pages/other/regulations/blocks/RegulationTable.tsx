import { Button } from "components/forms";
import { FC } from "react";

export const RegulationTable: FC = () => {
  return (
    <div className="flex flex-col gap-8 px-[3.5rem] py-10 bg-white shadow-md">
      <p className="text-[var(--green)] text-[1.9rem]">Janvier 2024</p>
      <table className="text-[1.325rem]">
        <thead className="border-b border-black">
          <tr>
            <th className="text-start py-4" colSpan={4}>
              Nombre de livraisons effectuées
            </th>
            <th className="text-start py-4" colSpan={3}>
              Total HT
            </th>
            <th className="text-start py-4" colSpan={3}>
              Total TTC
            </th>
            <th className="text-start py-4" colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4} className="py-4">
              34
            </td>
            <td colSpan={3} className="py-4">
              48,00€
            </td>
            <td colSpan={3} className="py-4">
              55,00€
            </td>
            <td colSpan={2} className="py-4 text-end">
              <Button>PAYER</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
