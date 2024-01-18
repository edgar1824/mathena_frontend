import { FC } from "react";
import { ErrorWrapper } from "..";
import { Calendar } from "./parts/Calendar";
import { Icon } from "./parts/Icon";
import { Input } from "./parts/Input";
import { Provider } from "./parts/Provider";
import { Props } from "./parts/types";
import { classes } from "./parts/utils";

const Component: FC<Props> = ({
  classNames,
  separator,
  error,
  format = "dd-mm-yyyy",
  ...props
}) => {
  return (
    <ErrorWrapper error={error}>
      <Provider
        {...{
          classNames,
          format,
          separator,
          error,
          ...props,
        }}
      >
        {({ setShow, calendarRef }) => (
          <>
            <div
              ref={calendarRef}
              className={classes(
                classNames?.parent,
                "w-[300px] h-fit min-h-[2.5rem] relative rounded-[20px] overflow-hidden bg-white flex flex-col gap-2"
              )}
            >
              <div
                onClick={() => setShow((p) => !p)}
                className="relative px-5 py-2 w-full flex items-center gap-2"
              >
                <Input />
                <Icon />
              </div>
              <Calendar />
            </div>
          </>
        )}
      </Provider>
    </ErrorWrapper>
  );
};

export type { IDate } from "./parts/types";

export const DatePicker = Object.assign(Component, {});
