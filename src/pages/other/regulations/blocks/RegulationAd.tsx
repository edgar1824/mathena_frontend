import { FC } from "react";
import piggy_bank_img from "assets/regulations/piggy-bank.svg";

export const RegulationAd: FC = () => {
  return (
    <div className="bg-[var(--green)] rounded-md text-white pt-[2.625rem] pb-[2.75rem] px-[2.6rem] relative flex items-center gap-[2.7rem]">
      <img
        className="w-[4.625rem] h-[4.625rem] object-contain"
        src={piggy_bank_img}
        alt="piggy-bank-img"
      />
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-semibold">
          Economisez en souscrivant à un Pack !
        </p>
        <p className="text-[1.33rem] ">
          Vous auriez pu économiser --€ sur votre facture en souscrivant à un
          pack Small
        </p>
      </div>

      {/* green background on right */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-[30%] absolute right-0 top-0 bottom-0 object-fill"
        viewBox="0 0 402 204"
        fill="none"
      >
        <path
          d="M0 204L146.841 0.000183105L402 0V204H0Z"
          fill="white"
          fillOpacity="0.1"
        />
      </svg>
    </div>
  );
};
