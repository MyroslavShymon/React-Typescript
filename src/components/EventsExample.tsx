import * as React from "react";

interface EventsExampleProps {}

const EventsExample: React.FC<EventsExampleProps> = () => {
  const [value, setValue] = React.useState<string>("");
  const [isDrag, setIsDrag] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("control", value);
    console.log("non control", inputRef.current?.value);
  };

  const onDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("dropHandler");
    setIsDrag(false);
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("leaveHandler");
    e.preventDefault();
    setIsDrag(false);
  };
  const dragWithParentHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("dragWithParentHandler");
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="управлякмый"
      />
      <input ref={inputRef} type="text" placeholder="не управлякмый" />
      <button onClick={clickHandler}>Log</button>
      <div
        draggable
        onDrag={onDragHandler}
        style={{ width: 200, height: 200, background: "green" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithParentHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
