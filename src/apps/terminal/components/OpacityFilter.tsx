import { FC } from "react";

type OpacityFilterProps = object;

export const OpacityFilter: FC<OpacityFilterProps> = () => {
  return <div className="absolute size-full -z-[1] bg-black opacity-80" />;
};
