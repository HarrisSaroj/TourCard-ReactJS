

import Card from "./Card";

function Tours({tours, removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Us</h2>
            </div>
            <div className="cards"> 
            {/* map ke help se hum 7 card ke data ki fetch kr sakte hai (multiple) */}
                {
                    tours.map((tour) =>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );

}

export default Tours;