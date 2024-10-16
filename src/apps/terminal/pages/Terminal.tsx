import image from "@assets/astronaut-on-a-float.webp";
import { BackgroundImage } from "@terminal/components/BackgroundImage";
import { CommandInput } from "@terminal/components/CommandInput";
import { PathDisplay } from "@terminal/components/PathDisplay";
import { Timer } from "@terminal/components/Timer";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { OpacityFilter } from "../components/OpacityFilter";

type TerminalProps = object;

const Terminal: FC<TerminalProps> = () => {
  const inputRef = useRef<HTMLLabelElement | null>(null);
  const [path] = useState([]);

  const handleFocus = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const handleKeydown = useCallback((keyDownEvent: KeyboardEvent) => {
    if (keyDownEvent.key == "Tab") {
      keyDownEvent.preventDefault();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleFocus);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("click", handleFocus);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleFocus, handleKeydown]);

  return (
    <>
      <div className="h-screen w-full relative">
        <OpacityFilter />
        <BackgroundImage image={image} />
        <div className="p-4 flex text-3xl">
          <div className="flex w-full">
            <PathDisplay path={path} />
            <CommandInput inputRef={inputRef} />
            <Timer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
