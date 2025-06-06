import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useShiftStore = create(persist((set) => ({
  shifts: [],

  setShifts: (newShifts) => set({ shifts: newShifts }),

  addShift: (newShift) =>
    set((state) => ({
      shifts: [...state.shifts, newShift],
    })),

  updateShift: (id, updatedFields) =>
    set((state) => ({
      shifts: state.shifts.map((shift) =>
        shift.id === id ? { ...shift, ...updatedFields } : shift
      ),
    })),

  deleteShift: (id) =>
    set((state) => ({
      shifts: state.shifts.filter((shift) => shift.id !== id),
    })),
})));

export default useShiftStore;
