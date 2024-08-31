/* eslint-disable react/prop-types */
import draggableImageSrc from '@svgs/draggableImage.svg'
import dropdownIconSrc from '@svgs/arrowImage.svg'
import { useState } from 'react'
import React from 'react'
import { useSortable } from '@dnd-kit/sortable'

function DraggableBarHeader({imgSource,title,children,barName}){
  const [isClicked,setIsClicked] = useState(false)

  const toggleClick = () =>{
    setIsClicked(!isClicked)
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
    React.cloneElement(child, { active:isClicked })
  );
  return<>
    <div style={style} onClick={toggleClick} className="formBar--draggable">
      <div className='formBar--draggable__iconContainer'>
      <img ref={setNodeRef} {...attributes} {...listeners} src={draggableImageSrc} alt="DraggableIcon" className='draggableImage' />
      <img src={imgSource} alt="Icon" className='formBar__icon' />
      <p className="formBar__title">{title}</p>
      <img src={dropdownIconSrc} className={isClicked?'formBar__dropdownArrow--active':'formBar__dropdownArrow'} alt="dropdownArrowIcon"  />

      </div>
      {barListChild}
    </div>
  </>
}

export default DraggableBarHeader