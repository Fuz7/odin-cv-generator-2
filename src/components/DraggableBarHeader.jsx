/* eslint-disable react/prop-types */
import draggableImageSrc from '@svgs/draggableImage.svg'
import dropdownIconSrc from '@svgs/arrowImage.svg'
import { useState } from 'react'

function DraggableBarHeader({imgSource,title}){
  const [isClicked,setIsClicked] = useState(false)

  const toggleClick = () =>{
    setIsClicked(!isClicked)
  }

  return<>
    <div onClick={toggleClick} className="formBar--draggable">
      <img src={draggableImageSrc} alt="DraggableIcon" className='draggableImage' />
      <img src={imgSource} alt="Icon" className='formBar__icon' />
      <p className="formBar__title">{title}</p>
      <img src={dropdownIconSrc} className={isClicked?'formBar__dropdownArrow--active':'formBar__dropdownArrow'} alt="dropdownArrowIcon"  />
    </div>
  </>
}

export default DraggableBarHeader