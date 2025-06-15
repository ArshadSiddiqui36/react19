import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastNotification() {
  const showToast = () => {
    toast.success("This is a success message!", {
      autoClose: 5000, // 5 seconds delay
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ToastNotification;