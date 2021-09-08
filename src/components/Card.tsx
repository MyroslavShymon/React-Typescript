import * as React from "react";

export enum CardBorderVariant {
  solid = "solid",
  dashed = "dashed",
}

interface CardProps {
  width: string;
  height: string;
  border?: string;
  borderVariant: CardBorderVariant;
  children?: React.ReactChild | React.ReactNode;
  onClick: (number: number) => void;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  border,
  children,
  borderVariant,
  onClick,
}) => {
  const [state, setstate] = React.useState(0);

  return (
    <div
      onClick={() => onClick(state)}
      style={{
        width,
        height,
        borderStyle:
          borderVariant === CardBorderVariant.solid
            ? CardBorderVariant.solid
            : CardBorderVariant.dashed,
        border: border ? `1px solid ${border}` : `1px solid red`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
