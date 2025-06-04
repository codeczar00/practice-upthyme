import { useForm } from "react-hook-form";
import useShiftStore from './Store.js'

const AddShiftForm = ({ visible, onClose }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const addShift = useShiftStore((state) => state.addShift)

    const onSubmit = (data) => {
        addShift(data);          
        console.log(data);     
        reset();                 
        onClose();               
    };

    return (
        <div
            className={`fixed top-0 right-0 flex flex-col gap-0 h-full overflow-y-auto w-[400px] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${visible ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <form className="pt-8 pr-8 pl-8 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-8 items-center">
                    <div>Job Title:</div>
                    <input {...register("jobTitle", { required: true })} className="border border-gray-400 rounded-md p-2" placeholder="Job Title" />
                    {errors.jobTitle && <span className="text-red-500">Required</span>}
                </div>

                {/* <div className="flex gap-7 items-center">
                    <div>BG Color:</div>
                    <input {...register("bgColor", { required: true })} className="border border-gray-400 rounded-md p-2" placeholder="Background Color" />
                    {errors.bgColor && <span className="text-red-500">Required</span>}
                </div> */}

                <div className="flex flex-col gap-1">
                    <label>Time From:</label>
                    <input type="number" max={12} {...register("fromTime", { required: true, max: 12 })} className="border border-gray-400 rounded-md p-2" placeholder="Hour (1-12)" />
                    <div className="flex gap-4">
                        <label><input type="radio" name='time' value="AM" {...register("fromPeriod", { required: true })} /> AM</label>
                        <label><input type="radio" name='time' value="PM" {...register("fromPeriod", { required: true })} /> PM</label>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label>Time To:</label>
                    <input type="number" max={12} {...register("toTime", { required: true, max: 12 })} className="border border-gray-400 rounded-md p-2" placeholder="Hour (1-12)" />
                    <div className="flex gap-4">
                        <label><input type="radio" name='time' value="AM" {...register("toPeriod", { required: true })} /> AM</label>
                        <label><input type="radio" name='time' value="PM" {...register("toPeriod", { required: true })} /> PM</label>
                    </div>
                </div>

                <select defaultValue="" {...register("day", { required: true })} className="border border-gray-300 rounded-md p-2">
                    <option value="" disabled>Select Day</option>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>

                <select defaultValue="" {...register("employee", { required: true })} className="border border-gray-300 rounded-md p-2">
                    <option value="" disabled>Select Employee</option>
                    {['All', 'Fadhilah Puspasari', 'Fauni Ambarsari', 'Lili Hugton', 'Rao Rabi'].map(emp => (
                        <option key={emp} value={emp}>{emp}</option>
                    ))}
                </select>

                <button type="submit" className="cursor-pointer px-4 py-2 my-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
            </form>

            <button onClick={onClose} className="cursor-pointer absolute top-4 left-4 text-xl font-bold text-gray-600">×</button>
        </div>
    );
};

export default AddShiftForm;
