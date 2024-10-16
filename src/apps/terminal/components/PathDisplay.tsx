import { FC } from "react";

export type PathDisplayProps = {
  path: string[];
};

export const PathDisplay: FC<PathDisplayProps> = ({
  path,
}: PathDisplayProps) => {
  return (
    <>
      <span className="text-folder">~{path.join("/")}</span>
      <span className="text-success_separator font-semibold mx-6">❯</span>
    </>
  );
};
