import arrow from '../assets/arrow.png'
import calendar from '../assets/cal-icon.png'
import clock from '../assets/clock-icon.png'
import down from '../assets/dropdown.png'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import useShiftStore from './Store.js'
import { colors, users } from './users.js';

const AddShiftForm = ({ visible, onClose }) => {

    const [enabled, setEnabled] = useState(false);
    const [showColors, setShowColors] = useState(false); //For toggling btw list
    const [selectedColor, setSelectedColor] = useState(colors[0]); //For toggling btw colors list
    const [spotValue, setSpotValue] = useState(1)

    const { setValue, register, handleSubmit, reset, formState: { errors } } = useForm();

    const addShift = useShiftStore((state) => state.addShift)

    const onSubmit = (data) => {
        const { spot, user, ...rest } = data;
        const totalSpots = parseInt(spot);

        const shiftsToAdd = [];

        for (let i = 0; i < totalSpots; i++) {
            shiftsToAdd.push({
                id: crypto.randomUUID(), // Unique ID for each shift
                ...rest,
                user: i === 0 && user ? user : users.find(u => u.name === 'Unassigned Shifts').name,
            });
        }

        shiftsToAdd.forEach(shift => addShift(shift));

        setSpotValue(1);
        setSelectedColor(colors[0]);
        setEnabled(false);

        reset({
            date: '',
            timeFrom: '',
            timeEnd: '',
            shiftTitle: '',
            job: '',
            spot: 1,
            color: colors[0],
            user: ''
        });

        onClose();
    };

    useEffect(() => {
        setValue("spot", spotValue);
    }, [spotValue, setValue]);

    useEffect(() => {
        setValue("color", selectedColor);
    }, [selectedColor, setValue]);

    return (
        <div
            className={`fixed top-2 right-2 flex flex-col gap-0 h-full overflow-y-auto w-[500px] 
                bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out rounded-md 
                ${visible ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className='text-center text-[#3F4648] m-4'>Friday, Aug 30, 2024</div>
            <hr className="mx-4 my-1 border-gray-300" />
            <div className='text-center text-[#002C76] mt-2 font-bold'>Shift Details</div>
            <hr className="mx-4 my-1 border-black-300" />

            <form className="flex flex-col gap-6 p-4" onSubmit={handleSubmit(onSubmit)}>

                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <div><img className='w-6 mr-2' src={calendar} alt="calendar" /></div>
                        <div className='text-[#505759] font-bold'>Date</div>
                        <input
                            type="date"
                            {...register("date", { required: "Date is required" })}
                            className="border border-gray-300 rounded-[100px] px-2 py-1"
                        />
                        {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                    </div>
                    <div onClick={() => setEnabled(!enabled)}
                        className={`cursor-pointer w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300 
                      ${enabled ? 'bg-blue-800' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform 
                      duration-300 ${enabled ? 'translate-x-6' : 'translate-x-0'}`}
                        />
                    </div>
                </div>

                <div className='ml-1 flex items-center gap-2.5'>
                    <div><img className='pr-2 inline' src={clock} alt="clock" /></div>
                    <div className='text-[#505759] font-bold'>Start</div>
                    <input className='w-20 mr-3 border border-gray-300 rounded-[12px] px-2 py-1'
                        type="text"
                        placeholder="9:00am"
                        {...register("timeFrom", {
                            required: "Time is required",
                            pattern: {
                                value: /^(1[0-2]|0?[1-9]):[0-5][0-9](am|pm)$/i,
                                message: "Time Format - 9:00am"
                            }
                        })}
                    />
                    {errors.time && <p>{errors.timeFrom.message}</p>}
                    <div className='text-[#505759] font-bold'>End</div>
                    <input className='w-20 border border-gray-300 rounded-[12px] px-2 py-1'
                        type="text"
                        placeholder="9:00am"
                        {...register("timeEnd", {
                            required: "Time is required",
                            pattern: {
                                value: /^(1[0-2]|0?[1-9]):[0-5][0-9](am|pm)$/i,
                                message: "Time Format - 9:00am"
                            }
                        })}
                    />
                    {errors.time && <p>{errors.timeEnd.message}</p>}
                </div>
                <hr className="mx-4 border-gray-300" />
                <div className='flex items-center gap-8'>
                    <div className='text-[#505759] font-bold'>Shift Title</div>
                    <input className='border border-gray-300 rounded-[12px] px-2 py-1 w-[350px] h-10' type="text"
                        {...register("shiftTitle", { required: "Shift Title is required" })} />

                </div>
                <div className='flex items-center gap-20'>
                    <div className='text-[#505759] font-bold'>Job</div>
                    <div className='flex gap-1.5'>
                        <select
                            className='border border-gray-300 rounded-[12px] px-2 py-1 w-[290px] h-10'
                            {...register("job", { required: "Job is required" })}>
                            <option value="" disabled>Select Job</option>
                            <option value="Mazdoor">Mazdoor</option>
                            <option value="Sales Associate">Sales Associate</option>
                            <option value="Developer">Developer</option>
                        </select>

                        <div onClick={() => setShowColors(prev => !prev)}
                            className="cursor-pointer flex items-center gap-1 border border-[#8B939C66] rounded-full px-2 py-1">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: selectedColor }} />
                            <img src={down} alt="dropdown" className="w-4 h-4" />
                        </div>
                        {/* Dropdown */}
                        {showColors && (
                            <div
                                className="absolute w-[100px] min-h-[120px] bottom-28 right-8 rounded-xl p-2
                            grid grid-cols-3 bg-white shadow-[0px_3px_16px_1px_rgba(47,47,45,0.14)] z-50">
                                {colors.map((color, index) => (
                                    <div key={index} onClick={() => {
                                        setSelectedColor(color);
                                        setValue("color", color)
                                        setShowColors(false);
                                    }}
                                        className="px-2 py-1 cursor-pointer hover:bg-gray-100">
                                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <input type="hidden"  {...register("color", { required: true })} />
                </div>

                <div className='relative flex items-center gap-18'>
                    <div className='text-[#505759] font-bold'>Spot</div>
                    <div className='flex items-center justify-between border border-gray-300 rounded-[12px] px-2 py-1 w-[350px] h-10'>
                        <div>{spotValue}</div>
                        <div className='flex items-center gap-2'>
                            <div onClick={() => setSpotValue(prev => prev + 1)} className='cursor-pointer'><img src={plus} alt="plus" /></div>
                            <div onClick={() => {
                                if (spotValue > 1) setSpotValue(prev => prev - 1);
                            }} className='cursor-pointer'><img src={minus} alt="minus" /></div>
                        </div>
                    </div>
                    <input type="hidden" {...register("spot", { required: true })} />
                </div>

                <div className='relative flex items-center gap-18'>
                    <div className='text-[#505759] font-bold'>User</div>
                    <select
                        className='border border-gray-300 rounded-[12px] px-2 py-1 w-[350px] h-10'
                        {...register("user")}>
                        <option value="">Select User</option>
                        {users
                            .filter(user => user.name !== 'Unassigned Shifts')
                            .map((user, index) => (
                                <option key={index} value={user.name}>
                                    {user.name}
                                </option>
                            ))}
                    </select>
                </div>
                <hr className="mx-4 border-gray-300" />
                <button type='submit' className='cursor-pointer w-30 h-[35px] rounded-[100px] bg-[#002C76] text-white font-bold'>
                    Publish
                </button>

            </form>

            <div onClick={onClose} className="cursor-pointer absolute top-4 left-4 text-xl font-bold text-gray-600">
                <img className='w-4' src={arrow} alt="close" />
            </div>
        </div>
    );
};

export default AddShiftForm;
