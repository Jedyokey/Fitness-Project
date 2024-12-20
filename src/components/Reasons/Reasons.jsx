import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className="left">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" /> 
            <img src={image4} alt="" />
        </div>
        {/* left section end */}
        
        <div className="right">
            <span>some reasons</span>

            <div>
                <span className='stroke-text'>why</span>
                <span> choose us?</span>
            </div>

            <div className='right-details'>
                <div>
                    <img src={tick} alt="" />
                    <span>over 140+ expert coaches</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>train smarter and faster than before</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 free program for new member</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>reliable partners</span>
                </div>
            </div>
            {/* right-details end */}

            <span style={{color: "var(--gray)", fontWeight: "normal"}}>OUR PARTNERS</span>

            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
        {/* right div section */}
    </div> 
    // Reason end here
  )
}

export default Reasons
