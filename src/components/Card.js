import { useState } from "react";


function Card({id, image, info, price, name, removeTour}){

    // UI pr read more or showless update krna hai toh
    const [readmore, setReadMore] = useState(false);

    // agar readmore True(click hua) hai toh Pura Info dikhao, false (click showless) hai toh half info dikhao 
    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readmoreHandler(){

        // Agar ternary operator true(readmore) hai toh usse false krega(readless) and vice-versa

        setReadMore(!readmore);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Show More`}
                    </span>
                </div>
            </div>
            {/* App.js mai Click ka function hai */}
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );

}

export default Card;