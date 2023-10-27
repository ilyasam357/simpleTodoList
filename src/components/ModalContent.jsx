export default function ModalContent({ onClose }) {
    return (
      <div className="bg-slate-500 w-80 bottom-1/2 left-1/2 absolute">
        <div>I'm a modal dialog</div>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }
  