import { FC } from "react";
import { Dates } from "./Dates";
import { Head } from "./Head";
import { useDatePickerContext } from "./Provider";
import { Years } from "./Years";
import { classes } from "./utils";

export const Calendar: FC = () => {
  const { classNames, showYears, show } = useDatePickerContext();

  return (
    <>
      {show && (
        <div
          className={classes(
            classNames?.calendar,
            "w-full max-w-[250px] flex flex-col gap-3 bg-white self-center overflow-hidden px-5 pt-3 pb-9"
          )}
        >
          <Head />
          {!showYears ? <Dates /> : <Years />}
        </div>
      )}
    </>
  );
};

// <AnimatePresence>
// {show && (
//   <motion.div
//     // initial={{ opacity: 1, scale: 1 }}
//     exit={{ opacity: 0, scale: 0.95, dur: 0.2 }}
//     animate={{ opacity: 1, scale: 1, dur: 0.2 }}
//     className={classes(
//       classNames?.calendar,
//       "max-w-[300px] flex flex-col absolute bg-slate-200 shadow-md w-full overflow-hidden",
//       isReverse
//         ? "bottom-[calc(100%_+_6px)] origin-[50%_95%]"
//         : "top-[calc(100%_+_6px)] origin-[50%_5%]"
//     )}
//   >
//     <Head />
//     {!showYears ? <Dates /> : <Years />}
//   </motion.div>
// )}
// </AnimatePresence>
