import React, { ChangeEvent, FC } from "react";

interface Props {
  name?: string;
  max?: number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const NumberPicker: FC<Props> = ({ name = "", max = 10, onChange }) => {
  return (
    <div className="px-2 py-2">
      <select
        className="w-min border-none h-9 rounded-[8px]"
        onChange={onChange}
        name={name}
        id=""
      >
        {Array.from({ length: max }).map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};
