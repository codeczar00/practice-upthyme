import { useDrop } from "react-dnd"


const DropZone = ({ onDrop }) => {

    const [{ isOver }, dropref] = useDrop(() => ({
        accept: 'item',
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))

    return (
        <div
            ref={dropref}
            style={{
                border: `1px dashed ${isOver ? 'green' : 'black'}`,
                padding: '10px',
            }}>
            Drop here
        </div>
    )
}

export default DropZone
