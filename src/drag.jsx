import { useDrag } from "react-dnd"

const DragItem = ({ name }) => {

    const [{ isDragging }, dragref] = useDrag(() => ({
        type: 'item',
        item: { name },
        collect: (monitor) => ({
            isdragging: monitor.isDragging()
        })
    }))

    return (

        <div
            ref={dragref}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
                margin: '5px',
                backgroundColor: 'lightblue',
            }}>
            {name}
        </div>

    )
}

export default DragItem