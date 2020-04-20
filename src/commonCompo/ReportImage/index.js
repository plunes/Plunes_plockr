import React from "react"
import docstockimage from "../../images/dummy-doctor.jpg"

const ReportImage = React.memo((props) => {
    console.log(props,"props in ReportImage")
    return (
        <div  style={{position:'relative'}} className='fileList ' key={Math.random().toString()}>
            <li className='headTab trendingBox' key={Math.random().toString()} data-url={props.b.reportUrl} data-filename={props.b.reportName} data-id={props._id} onClick={(e)=>props.handleClick(e,props.b)}>
                <img className={props.index/2==0?'file-report-img img_change':'file-report-img '} src={props.b.reportUrl + '.thumbnail.png'} height='112' width='150' onError={(e) => { e.target.onerror = null; e.target.src = "/screenshot.svg" }}></img>
                <div className={props.index/2==0?'overlay overlay2':'overlay'}>
                <div class="text">
                {/* <p className='fileName'>{b.reportName}</p>     */}
                </div>
                </div>
            </li>
        </div>
    )
})

export default ReportImage