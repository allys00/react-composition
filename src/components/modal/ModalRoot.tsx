import { ReactElement } from "react";

interface ModalRootProps {
  children: ReactElement;
}

export const ModalRoot = ({ children }: ModalRootProps): JSX.Element => {
  return (
    <dialog id="my_modal_3" className="modal">
      <form method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        {children}
      </form>
    </dialog>
  );
};
