import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useShiftStore = create(persist((set) => ({
  shifts: [],
  addShift: (newShift) =>
    set((state) => ({
      shifts: [...state.shifts, newShift],
    })),
}),
    {
      name: 'shift-storage', 
    }
));

export default useShiftStore;