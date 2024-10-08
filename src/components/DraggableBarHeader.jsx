/* eslint-disable react/prop-types */
import draggableImageSrc from '@svgs/draggableImage.svg'
import dropdownIconSrc from '@svgs/arrowImage.svg'
import { useContext,  } from 'react'
import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { ClickContext } from './ClickContext'

function DraggableBarHeader({imgSource,title,children,barName}){
  const {isClicked,setIsClicked} = useContext(ClickContext)


  const toggleClick = () =>{
    setIsClicked(prevStates =>({
      ...prevStates,
      [barName]: !prevStates[barName],
    }))
  }
  const {
    attributes, 
    listeners, 
    setNodeRef, 
    transform, 
    transition
  } = useSortable({ id: barName });

  const style = {
    transform: transform ? `translate3d(0, ${transform.y}px, 0)` : undefined,
    transition
  };

   const barListChild = React.Children.map(children, (child) =>
    React.cloneElement(child, { active:isClicked[barName] })
  );
  return<>
    <div style={style} onClick={toggleClick} className="formBar--draggable">
      <div className='formBar--draggable__iconContainer'>
      <img ref={setNodeRef} {...attributes} {...listeners} src={draggableImageSrc} alt="DraggableIcon" className='draggableImage' />
      <img src={imgSource} alt="Icon" className='formBar__icon' />
      <p className="formBar__title">{title}</p>
      <img src={dropdownIconSrc} className={isClicked[barName]?'formBar__dropdownArrow--active':'formBar__dropdownArrow'} alt="dropdownArrowIcon"  />

      </div>
      {barListChild}
    </div>
  </>
}

export default DraggableBarHeader