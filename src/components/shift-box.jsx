import { useDrag } from 'react-dnd';
import persons from '../assets/persons.png'

const ShiftBox = ({ entry, spotIndex, date, user }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'SHIFT',
        item: { entry, spotIndex, date, user },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className='w-full h-auto pl-3 rounded-[10px] flex flex-col border-[1.5px] border-l-[4px]'
            style={{
                borderColor: entry.color,
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}
            title={`${entry.shiftTitle} - ${entry.job}`}
        >
            <div className="flex items-center gap-2">
                <div className="font-bold text-[#3F4648] text-[12px]">
                    {`${entry.timeFrom.slice(0, entry.timeFrom.indexOf(':'))}${entry.timeFrom.slice(-2)} - ${entry.timeEnd.slice(0, entry.timeEnd.indexOf(':'))}${entry.timeEnd.slice(-2)}`}
                </div>
                <div><img src={persons} alt="bande" /></div>
            </div>
            <div className="text-[#3F4648] text-[12px]">{entry.job}</div>
        </div>
    );
};

export default ShiftBox;
