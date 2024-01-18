import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { Clock } from "./Clock";
import { Head } from "./Head";
import { useTimePickerContext } from "./Provider";
import { classes } from "./utils";

export const Picker: FC = () => {
  const { show, isReverse } = useTimePickerContext();
  return (
    <>
      {show && (
        <div
          className={classes(
            "flex flex-col items-center inherit p-1 rounded",
            isReverse
              ? "origin-[50%_100%] bottom-[calc(100%_+_6px)]"
              : "origin-[50%_0%] top-[calc(100%_+_6px)]"
          )}
        >
          <Head />
          <Clock />
        </div>
      )}
    </>
  );
};

// <AnimatePresence>
// {show && (
//   <motion.div
//     initial={{ opacity: 1, scale: 1 }}
//     exit={{ opacity: 0, scale: 0.95 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.2 }}
//     className={classes(
//       "absolute flex flex-col items-center bg-slate-200 p-1 rounded shadow-md",
//       isReverse
//         ? "origin-[50%_100%] bottom-[calc(100%_+_6px)]"
//         : "origin-[50%_0%] top-[calc(100%_+_6px)]"
//     )}
//   >
//     <Head />
//     <Clock />
//   </motion.div>
// )}
// </AnimatePresence>
