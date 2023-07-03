import { ReactElement } from "react";

interface ModalContentProps {
  children: ReactElement;
}

export const ModalContent = ({ children }: ModalContentProps): JSX.Element => (
  <div className="content">{children}</div>
);
