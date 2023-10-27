import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        open
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.getElementById("modal")
      )}
    </>
  );
}
