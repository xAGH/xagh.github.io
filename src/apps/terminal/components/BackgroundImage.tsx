import { FC } from "react";

export type BackgroundImageProps = {
  image: string;
};

export const BackgroundImage: FC<BackgroundImageProps> = ({
  image,
}: BackgroundImageProps) => {
  return (
    <div className="absolute size-full -z-[2] bg-black">
      <img
        className="absolute t-0 l-0 size-full object-contain"
        src={image}
        alt="astronaut-on-a-float"
      />
    </div>
  );
};
