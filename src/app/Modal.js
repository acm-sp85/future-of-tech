import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 rounded p-2 text-white"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-6">
            <h2 className="text-lg">This is a Modal</h2>
            <button
              onClick={closeModal}
              className="bg-red-500 mt-4 rounded p-2 text-white"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
