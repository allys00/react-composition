import "./App.css";
import { LoginForm } from "./loginForm/LoginForm";
import Modal from "./modal";

function App() {
  return (
    <div>
      <LoginForm />
      <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        open modal
      </button>

      <Modal.Root>
        <>
          <Modal.Title text="New Modal" />
          <Modal.Content>
            <p>Ola</p>
          </Modal.Content>
        </>
      </Modal.Root>
    </div>
  );
}

export default App;
