"use client";
import { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Alerts = ({ message, type }: { message: string; type: "success" | "error" | "warning" | "info" }) => {
  useEffect(() => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else if (type === "warning") {
      toast.warning(message);
    } else if (type === "info") {
      toast.info(message);
    }
  }, [message, type]);

  return (
    <>
      <div className="z-[99999999999999999999999999999999999999999!important]">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
          className="asdkflsadjfsadkf"
        />
      </div>
    </>
  );
};

export default Alerts;
