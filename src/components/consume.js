
import travelData from "./data";
import Card from "./card";


export default function Consume () {

    const travels = travelData.map( travel => 
        <Card 
            title ={travel.title}
            location ={travel.location}
            google_maps ={travel.google_maps}
            start_date ={travel.start_date}
            end_date ={travel.end_date}
            image_url ={travel.image_url}
            description ={travel.description}
        /> )

    return  (
        <div>
            {travels}
        </div>
    )
}