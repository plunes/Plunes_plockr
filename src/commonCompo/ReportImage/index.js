import React from "react"
import docstockimage from "../../images/dummy-doctor.jpg"
import { InfoCircle, BoxArrowUp, XCircle } from 'react-bootstrap-icons'

const style = {
    svg: {
        display: "inline-block",
        padding: "0 3px 0 3px",
        cursor: 'pointer'
    }
}

const ReportImage = React.memo((props) => {
    console.log(props, "props in ReportImage")
    return (
        <div  className='fileList ' key={Math.random().toString()}>
            <div className='headTab trendingBox' key={Math.random().toString()} data-url={props.b.reportUrl} data-filename={props.b.reportName} data-id={props._id} onClick={(e) => props.handleClick(e, props.b)}>
                <img
                 className={props.index / 2 == 0 ? 'file-report-img img_change' : 'file-report-img '} 
                 src={props.b.reportThumbnail}  width='100%' 
                 onError={(e) => { e.target.onerror = null; e.target.src = "/screenshot.svg" }}
                 style={{height:'10rem'}}
                 ></img>
                <div className='overlay'>
                    <div class="text">
                       <p className='fileName'>{!!props.b.reportDisplayName?props.b.reportDisplayName.slice(0, 31) + (props.b.reportDisplayName.charAt(32) ? '...' : ''):''}</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div style={style.svg}>
                            <InfoCircle onClick={e => props.showDetails(e, props.b)} />
                        </div>
                        {/* {props.showShare ?
                            <div style={style.svg}>
                                <BoxArrowUp onClick={e => props.handleShare(e, props.b)} />
                            </div>
                            : ''} */}
                        <div style={style.svg}>
                            <XCircle onClick={e => props.handleDelete(e, props.b)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ReportImage