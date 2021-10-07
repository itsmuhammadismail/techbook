import { useEffect, useRef } from "react";
import styles from "../styles/modal.module.css";

const Modal = ({ modalStyle, show, onClose, backdropStyle }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);
  return (
    <>
      <div
        ref={modalRef}
        style={backdropStyle}
        className={`${styles.modal__wrap}`}
        onClick={onClose}
      >
        <div style={modalStyle} className={styles.modal}>
          <div className="bg-[#ED1818] w-[3rem] h-[3rem] rounded-full flex justify-center items-center absolute right-[-1.2rem] top-[-1.2rem] cursor-pointer" onClick={onClose}>
            <img src="/cross.svg" alt="" className="h-[1.1rem]" />
          </div>
          <img src="/modalBack.png" alt="" className="w-full" />
          <div className="absolute top-[-2.3rem] flex justify-center w-full">
            <img src="/modalPlan.svg" alt="" className="h-[10rem]" />
          </div>
          <div className="flex flex-col justify-center items-center mt-[-4.5rem]">
            <h1 className="text-[3.5rem]">Thank You!</h1>
            <p className="text-xs max-w-[35rem] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
