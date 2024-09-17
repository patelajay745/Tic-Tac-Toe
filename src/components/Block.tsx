interface BlockProps {
  value?: string;
  onClick?: () => void;
}

export const Block: React.FC<BlockProps> = (props) => {
  return (
    <>
      <div onClick={props.onClick} className="block">
        {props.value}
      </div>
    </>
  );
};
