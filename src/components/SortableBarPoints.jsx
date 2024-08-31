import { useSortable } from '@dnd-kit/sortable';
import draggableImageSrc from '@svgs/draggableImage.svg';

function SortableBarPoints({ listItem, setBarPointsData,deleteBarPoint }) {
  const {
    attributes, 
    listeners, 
    setNodeRef, 
    transform, 
    transition
  } = useSortable({ id: listItem.id });

  const style = {
    transform: transform ? `translate3d(0, ${transform.y}px, 0)` : undefined,
    transition
  };

  return (
    <div  style={style} className="list">
      <img
        ref={setNodeRef}
        {...attributes} {...listeners} 
        className="list__draggableImage"
        src={draggableImageSrc}
        alt="draggableImage"
      />
      <input
        onChange={(e) => setBarPointsData(e.target.value, listItem.id)}
        type="text"
        className="list__data"
        value={listItem.data}
      />
      <button onClick={() => deleteBarPoint(listItem.id)} className="list__deleteButton"></button>
    </div>
  );
}

export default SortableBarPoints