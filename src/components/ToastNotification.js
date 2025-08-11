import React, { useState, useEffect } from "react";
import {
  FaPizzaSlice,
  FaCheck,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";
import "./ToastNotification.css";

// Toast Container
let toastId = 0;
let setToastsGlobal = null;

const ToastNotification = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    setToastsGlobal = setToasts;

    // Hoş geldin mesajı
    const timer = setTimeout(() => {
      showPizzaToast("Teknolojik Yemekler'e hoş geldiniz! 🍕");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          onClick={() => removeToast(toast.id)}
        >
          <div className="toast-content">
            <div className="toast-icon">{toast.icon}</div>
            <span className="toast-message">{toast.message}</span>
            <FaTimes
              className="toast-close"
              onClick={() => removeToast(toast.id)}
            />
          </div>
          <div className="toast-progress">
            <div className="toast-progress-bar"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Toast fonksiyonları
const addToast = (type, message, icon) => {
  if (setToastsGlobal) {
    const id = ++toastId;
    const toast = { id, type, message, icon };

    setToastsGlobal((prev) => [...prev, toast]);

    // 3 saniye sonra otomatik silme
    setTimeout(() => {
      setToastsGlobal((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }
};

export const showSuccessToast = (message) => {
  addToast("success", message, <FaCheck />);
};

export const showPizzaToast = (message) => {
  addToast("pizza", message, <FaPizzaSlice />);
};

export const showWarningToast = (message) => {
  addToast("warning", message, <FaExclamationTriangle />);
};

export const showErrorToast = (message) => {
  addToast("error", message, <FaExclamationTriangle />);
};

export default ToastNotification;
