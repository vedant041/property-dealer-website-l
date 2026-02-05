import { useState } from "react";

export default function useToast() {

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  function open(msg) {
    setMessage(msg);
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 4000);
  }

  function close() {
    setShow(false);
  }

  return {
    show,
    message,
    open,
    close,
  };
}
