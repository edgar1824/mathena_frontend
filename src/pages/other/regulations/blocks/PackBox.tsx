import { classes } from "helper";
import { FC } from "react";
import checked_icon from "assets/regulations/checked-icon-light-green.png";
import { Button } from "components/forms";
import { IPack } from "types";

export const PackBox: FC<IPack> = ({
  actives,
  color,
  currency,
  price,
  type,
  isRecommended,
}) => {
  return (
    <div className="relative h-full">
      {isRecommended && (
        <span className="text-xl text-[var(--green)] italic absolute bottom-[calc(100%_+_2px)] left-1/2 -translate-x-1/2">
          Recommandé
        </span>
      )}
      <div className="h-full flex flex-col rounded-md overflow-hidden shadow-md">
        <div
          style={{ backgroundColor: `var(--${color})` }}
          className={classes(
            "py-6 px-3 grid place-content-center uppercase text-white font-bold"
          )}
        >
          {{ sm: "small", md: "medium", lg: "large" }[type]}
        </div>
        <div className="py-6 pl-2.5 pr-1 bg-white flex flex-col gap-7 items-center justify-between h-full">
          <div className="flex flex-col gap-7 items-center">
            <p className="text-[var(--green)]">
              <span className="text-[2.25rem] font-semibold mr-3">{price}</span>
              {currency}/Pack
            </p>
            <div className="flex flex-col gap-5">
              {actives.map((str, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    className="w-[35px] h-[31px]"
                    src={checked_icon}
                    alt="checked-icon"
                  />
                  <span className="text-[rgba(8,_68,_66,_0.50)] text-lg">
                    {str}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Button>ACHETER</Button>
        </div>
      </div>
    </div>
  );
};
