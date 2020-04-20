import React, { Component } from 'react';
// import logger from 'logging-library';
import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Downloader from 'js-file-downloader';
import share from "../../images/share.svg"
import "./index.css"

// const file = 'https://plunes.co/v4/public/1577708993524-MedicalReport-20191230_4.pdf'
// const type = 'pdf'

class MyComponent extends Component {

  constructor(props) {
    super(props)
    // console.log(props.data)
    this.state = {
      file: props.data.url,
      type: props.data.type
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  render() {
    // console.log(this.props.data, 'data');
    // const file = this.state
    // console.log("render",this.state)
    if(this.state.type === 'doc'){
      new Downloader({
        url: this.state.file
    })
    }

    return (
      <div className="plocer_Magnify">
      <div className="share_but">
          <img src={share} />
          <span className="shre_intr"><text className="" > Share Internaly</text></span>
       </div>
       <FileViewer
        fileType={this.state.type}
        filePath={this.state.file}
      />
     </div>
     
    );
  }
}

export default withRouter(MyComponent);