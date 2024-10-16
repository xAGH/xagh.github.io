import { ChangeEvent, FC, MutableRefObject, useState } from "react";

export type CommandInputProps = {
  inputRef: MutableRefObject<HTMLLabelElement | null>;
};

export const CommandInput: FC<CommandInputProps> = ({
  inputRef,
}: CommandInputProps) => {
  const [command, setCommand] = useState("");
  const [caretPosition, setCaretPosition] = useState(0);

  const handleChange = (element: ChangeEvent<HTMLTextAreaElement>) => {
    const value = element.target.value;
    setCommand(value);
    setCaretPosition(1.125 * value.length);
  };

  return (
    <label
      ref={inputRef}
      htmlFor="input"
      className="text-primary relative w-full grow mr-4"
    >
      <textarea
        id="input"
        className="bg-transparent border-none outline-none text-[inherit] caret-transparent w-full resize-none overflow-hidden text-primary h-auto"
        onChange={handleChange}
        autoFocus
        rows={1}
      >
        {command}
      </textarea>
      <div
        className="top-0 absolute h-3/4 w-4 bg-white animate-blink"
        style={{ left: `${caretPosition}rem` }}
      />
    </label>
  );
};
