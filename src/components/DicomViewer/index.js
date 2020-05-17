import React from "react"
import CornerstoneElement from "../Viewer/index"

class DicomViewer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            valid: true
        }
    }
    render() {
        return (
            <div className="dicom_viewer_wrapper">
                <div className="text-center">
                    <span className="plockr_viewer_heading">Plunes Plockr Viewer</span>
                </div>
                <div className="cornerstone_wrapper_mobile-view">
                    <CornerstoneElement
                        mobile_view={true}
                        stack={[]}
                    />
                </div>


            </div>
        )
    }
}

export default DicomViewer  