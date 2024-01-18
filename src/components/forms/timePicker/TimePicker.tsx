import { FC } from "react";
import { ErrorWrapper } from "..";
import { Icon } from "./parts/Icon";
import { Input } from "./parts/Input";
import { Picker } from "./parts/Picker";
import { Provider } from "./parts/Provider";
import { Props } from "./parts/types";
import { classes } from "./parts/utils";

export const TimePicker: FC<Props> = ({
  classNames,
  error,
  format = "hh:mm",
  ...props
}) => {
  return (
    <ErrorWrapper error={error}>
      <Provider {...{ ...props, error, classNames, format }}>
        {({ contentRef, setShow }) => (
          <div
            ref={contentRef}
            className={classes(
              classNames?.parent,
              "w-[300px] h-fit min-h-[2.5rem] relative rounded-[20px] bg-white flex flex-col gap-2"
            )}
          >
            <div
              onClick={() => setShow((p) => !p)}
              className="relative px-5 py-2 w-full flex items-center gap-2"
            >
              <Input />
              <Icon />
            </div>
            <Picker />
          </div>
        )}
      </Provider>
    </ErrorWrapper>
  );
};

export type { ITimeFormat } from "./parts/types";
