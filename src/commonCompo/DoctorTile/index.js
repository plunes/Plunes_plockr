import React from "react"
import docstockimage from "../../images/dummy-doctor.jpg"
import { Link } from 'react-router-dom'
import './index.css'


const DoctorTile = (props) => {
    console.log(props,"props in DoctorTIle")
    
    return (
        <div className="col-lg-4 col-md-4 col-12 mobile_pd">
                <div className="dr_report">
                  <img src={!!props.data.imageUrl?props.data.imageUrl:docstockimage}/>
                    <div className="dr_content">
                    <Link key={props.index} to={{
                        pathname: '/prescription-dashboard',
                        state: {
                            docDetails: props.data,
                            }
                    }}>
    <h4>{!!props.data.name?props.data.name:"Not Available"}</h4>
    </Link>
                        <h5>{!!props.data.designation?props.data.designation:"Not Available"}</h5></div>
              </div>  
                </div>
    )
}

export default DoctorTile