interface ModalTitleProps {
  text: string;
}

export const ModalTitle = ({ text }: ModalTitleProps): JSX.Element => (
  <h3 className="font-bold text-lg">{text}</h3>
);
