import React from 'react'
import  './Tooltip.css'


const Tooltip = ( {position="top", triggerText="Hover over me", tooltipFontWeightStyle="",  toolTriggerFontSize=""}) => {
  return (
    <>    
    <div className="tooltip-trigger">        
        <span className={`${toolTriggerFontSize}`}> {triggerText}</span>
        <hr/>
        <div className={`tooltip  tooltip-${position}  ${tooltipFontWeightStyle}`} >
            Tooltip Text
        </div>
    </div>
    </>
  )  
}

export default Tooltip
