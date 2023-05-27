import create from "zustand";

interface ControlState {
  showNotif: boolean;
  setShowNotif: (showNotif: boolean) => void;
  showNotifType: string;
  setShowNotifType: (showNotifType: string) => void;
}

const ControlStore = create<ControlState>((set) => ({
  showNotif: false,
  setShowNotif: (showNotif) =>
    set((state) => ({
      ...state,
      showNotif
    })),
    showNotifType: "",
    setShowNotifType: (showNotifType) =>
      set((state) => ({
        ...state,
        showNotifType
      }))
}));

export default ControlStore;