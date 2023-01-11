
export default function Card(props) {

    return (
    <div className="render-section">
    <div className="row">
    <div className="col-2"></div>
    <div className="col-10">
            <div className="card mb-3" style={{maxWidth:"90%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                     <img src={props.image_url} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">
                            <i class="bi bi-geo-alt-fill" style={{color: 'red' ,paddingRight : "1%"}} ></i>
                            {props.location}<small className="text-muted" style={{paddingLeft: "2%"}}>
                            <a href={props.google_maps} style= {{ color :"grey"}}> View on Google Map</a>
                            </small>
                            </p>
                            <h5 className="card-title">{props.title}</h5>
                            <p className="date-area">{props.start_date}-{props.end_date}</p>
                            <p className="card-text">{props.description}</p>
                            
                        </div>
                    </div>
                </div>
        </div>
        <hr></hr>
        </div>
        
        </div>
     </div>
    )
    
}