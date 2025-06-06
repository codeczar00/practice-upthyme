import { useDrop } from 'react-dnd';
import useShiftStore from './Store';

const ShiftDropCell = ({ user, date, children }) => {
    const updateShift = useShiftStore((state) => state.updateShift);

    const [, drop] = useDrop(() => ({
        accept: 'SHIFT',
        drop: (item) => {
            const { entry } = item;
            updateShift(entry.id, {
                user: user.name ?? 'Unassigned Shifts',
                date,
            });
        },
    }));

    return (
        <div ref={drop} className='group w-full flex flex-col gap-1 items-center min-h-[60px]'>
            {children}
        </div>
    );
};

export default ShiftDropCell;
