import React from "react";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import cornerstoneTools from "cornerstone-tools";
import Hammer from "hammerjs";
import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";
import * as cornerstoneWodoImageLoader from "cornerstone-wado-image-loader";
import * as dicomParser from "dicom-parser";
// import StackElement from "./stackElement";
import path from 'path';
import rotate from "../../images/rotate.svg"
import aero from "../../images/aero.svg"
import search from "../../images/search.svg"
import LoaderComponent from "../Functional/LoaderComponent"



cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.init();
cornerstoneWodoImageLoader.external.cornerstone = cornerstone;
cornerstoneWodoImageLoader.external.dicomParser = dicomParser;

cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;



  const divStyle = {
    width: "100%",
    height: "100vh",
    position: "relative",
    margin:"20px"
  };

  const mobileDivStyle = {
    backgroundColor: "black",
    color:"green",
     width: "100wh",
     height: "80vh",
    position: "relative",
    margin:"20px"
  };
  
  const bottomLeftStyle = {

    bottom: "5px",
    left: "5px",
    position: "absolute",
    color: "white"
  };
  
  const bottomRightStyle = {
    bottom: "5px",
    right: "5px",
    position: "absolute",
    color: "white"
  };
  
  var bttnStyle ={
    backgroundImage: "url("+ './../../../public/icons/Rect-icon.png'+ ")",
    backgroundColor:"black",
    color:"white",
    fontWeight:600,
    padding:"10px",
    width:"70px",
    height:"40px",
    fontSize:"10px",
    BorderRadius:"15px",
    justifyContent:"center",
    marginRight:"30px"
  } ;

class CornerstoneElement extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
     // stack:{StackElement},
      viewport: cornerstone.getDefaultViewport(null,undefined),
      imageId: null,
      isEnableAnnotEvent:false,
      isEnablePanEvent:false,
      isEnableRectangleEvent:false,
      isEnableMagnifyEvent:false,
      isEnableRotateEvent:false,
      isEnableScrollEvent:false,
      //switchPanHandlar: this.switchPanHandlar.bind(this)
    };
  }

  componentDidMount() {
    if(!!!this.props.mobile_view){
      if(this.props.imageId){
        this.loadCornerstone(this.props.imageId)
      }
    }else{
      this.setState({
        laoding:true
      })
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('fileId')
      if(id){
        this.loadMobileCornerStone(id)
      }else{
        this.setState({
          invalidImage:true
        })
      }
    }
  }

  componentWillReceiveProps(nextProps){
   if(!this.props.mobile_view){
    if(nextProps.imageId !==this.props.imageId){
      localStorage.setItem("dicomId",nextProps.imageId)
      this.loadCornerstone(nextProps.imageId)
  }
   }
}

  loadCornerstone = (imageUrl) =>{
     
      
    const element = document.querySelector('.viewportElement');
    // Enable the DOM Element for use with Cornerstone
     cornerstone.enable(element);
    // Load the first image in the stack
    const ext = path.extname(imageUrl);
    var url =imageUrl;
    if(ext.slice(0, 4) ==='.dcm'){
      url ='wadouri:'+imageUrl
    }
   // url ='wadouri:'+imageUrl;
   
    cornerstone.loadImage(url).then(image => {
      // Display the first image
      cornerstone.displayImage(element, image);
      let data  = this.props.stack
      let stackElements = []
      data.forEach(item=>{
        stackElements.push(item.reportUrl)
    })
    let stack =  {
            imageIds: stackElements,
            currentImageIdIndex: 0
    }

    //   const stack = {StackElement};
      cornerstoneTools.addStackStateManager(element, ['stack']);
      cornerstoneTools.addToolState(element, 'stack', stack);
    });
    const WwwcTool = cornerstoneTools.WwwcTool;
    const PanTool = cornerstoneTools.PanTool;
    const PanMultiTouchTool = cornerstoneTools.PanMultiTouchTool;
    const ZoomTool = cornerstoneTools.ZoomTool;
    const ZoomTouchPinchTool = cornerstoneTools.ZoomTouchPinchTool;
    const ZoomMouseWheelTool = cornerstoneTools.ZoomMouseWheelTool;
    const ArrowAnnotateTool = cornerstoneTools.ArrowAnnotateTool;
    const RotateTool = cornerstoneTools.RotateTool;
    const MagnifyTool = cornerstoneTools.MagnifyTool;
    const RectangleRoiTool = cornerstoneTools.RectangleRoiTool;
    const StackScrollTool = cornerstoneTools.StackScrollTool;
    // Add them

    cornerstoneTools.addTool(PanTool);
    cornerstoneTools.addTool(ZoomTool);
    cornerstoneTools.addTool(WwwcTool);
    cornerstoneTools.addTool(PanMultiTouchTool);
    cornerstoneTools.addTool(ZoomTouchPinchTool);
    cornerstoneTools.addTool(ZoomMouseWheelTool);
    cornerstoneTools.addTool(ArrowAnnotateTool);
    cornerstoneTools.addTool(RotateTool);
    cornerstoneTools.addTool(MagnifyTool);
    cornerstoneTools.addTool(RectangleRoiTool);
    cornerstoneTools.addTool(StackScrollTool);
    cornerstoneTools.setToolActive("Zoom", { mouseButtonMask: 1}); // Right
    cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 4}); // Left & Touch
    cornerstoneTools.setToolActive("PanMultiTouch", {});
    //cornerstoneTools.setToolActive("ZoomMouseWheel", {});
    cornerstoneTools.setToolActive("ZoomTouchPinch", {});
  }


  loadMobileCornerStone = (imageUrl) =>{
    const element = document.querySelector('.mobile_viewportElement');
    cornerstone.enable(element);
    const ext = path.extname(imageUrl);
    var url =imageUrl;
    if(ext.slice(0, 4) ==='.dcm'){
      url ='wadouri:'+imageUrl
    }
    cornerstone.loadImage(url).then(image => {
      this.setState({
        laoding:false
      })
      cornerstone.displayImage(element, image);
      
      let data  = this.props.stack
      let stackElements = []
      data.forEach(item=>{
        stackElements.push(item.reportUrl)
    })
    let stack =  {
            imageIds: [image],
            currentImageIdIndex: 0
    }
      cornerstoneTools.addStackStateManager(element, ['stack']);
      cornerstoneTools.addToolState(element, 'stack', stack);
    });
    const WwwcTool = cornerstoneTools.WwwcTool;
    const PanTool = cornerstoneTools.PanTool;
    const PanMultiTouchTool = cornerstoneTools.PanMultiTouchTool;
    const ZoomTool = cornerstoneTools.ZoomTool;
    const ZoomTouchPinchTool = cornerstoneTools.ZoomTouchPinchTool;
    const RotateTool = cornerstoneTools.RotateTool;
    cornerstoneTools.addTool(PanTool);
    cornerstoneTools.addTool(ZoomTool);
    cornerstoneTools.addTool(PanMultiTouchTool);
    cornerstoneTools.addTool(ZoomTouchPinchTool);
    cornerstoneTools.addTool(RotateTool);
    cornerstoneTools.setToolActive("PanMultiTouch", {});
    cornerstoneTools.setToolActive("ZoomTouchPinch", {});
  }



  switchAnnotationHandlar=()=>{
     this.setState(
         prevState=>({isEnableAnnotEvent:!prevState.isEnableAnnotEvent}));
  }
  switchPanHandlar=()=>{
     this.setState(prevState=>({isEnablePanEvent:!prevState.isEnablePanEvent}));
  }

  switchMagnifyHandlar=()=>{
    this.setState(prevState=>({isEnableMagnifyEvent:!prevState.isEnableMagnifyEvent}));
  }
 
  switchRectangularHandlar=()=>{
     this.setState(prevState=>({isEnableRectangleEvent:!prevState.isEnableRectangleEvent}));
  }

  switchRotateHandlar=()=>{
     this.setState(prevState=>({isEnableRotateEvent:!prevState.isEnableRotateEvent}));
  }

 switchScrollHandlar=()=>{
     this.setState(prevState=>({isEnableScrollEvent:!prevState.isEnableScrollEvent})); 
  }

  render() {
      console.log(this.props,"props in Viewer")
      console.log(this.state," this.state in Viewer")
      if(!!this.props.mobile_view){
        return (
          <div>
             <div className="mobile_viewportElement"  style={mobileDivStyle}>
             {this.state.loading &&  <div style={{height:'100vh',width:'auto',position:'relative'}}>
                  <LoaderComponent />
          </div>}
              <div style={bottomRightStyle}>Zoom: {this.state.viewport.scale}</div>
              <div style={bottomLeftStyle}> 
                WW/WC: {this.state.viewport.voi.windowWidth} /{" "}
                {this.state.viewport.voi.windowCenter}
              </div>
              </div>
          </div>
        )
      }
    return (
      <div>

<div className="annonate_header">
                    <ul>
                        <li className="image_size b-relative-3"><i className ="fa fa-plus cursor-pointer" onClick={this.switchPanHandlar} ></i><span className ={this.state.isEnablePanEvent?"pan active-green b-relative-5":'pan  b-relative-5'}>Pan</span></li>
                        <li className="image_size"  onClick={this.switchMagnifyHandlar}><img src={search} className="cursor-pointer" /><span className ={this.state.isEnableMagnifyEvent?"pan active-green":'pan'}>Magnify</span></li>
                        <li className="image_size"  onClick={this.switchRotateHandlar}><img src={rotate} className="cursor-pointer" /><span className ={this.state.isEnableRotateEvent?"pan active-green":'pan'}>Rotate</span></li>
                        <li className="image_size"  onClick={this.switchScrollHandlar}><img src={aero} className="cursor-pointer" /><span className ={this.state.isEnableScrollEvent?"pan active-green":'pan'}>Scroll</span></li>
                        {/* <li className="image_size"  onClick={this.switchAnnotationHandlar}><img src={annote} className ={this.state.isEnableAnnotEvent?"cursor-pointer active-green":'cursor-pointer'}/><span className ={this.state.isEnableAnnotEvent?"pan active-green":'pan'}>Annotate</span></li> */}
                        {/* <li className="image_size"  onClick={this.switchRectangularHandlar}><img src={rectangle} className="cursor-pointer" /><span className ={this.state.isEnableRectangleEvent?"pan active-green":'pan'}>Rectangular</span></li> */}
                    </ul>
                    {this.state.isEnablePanEvent ? cornerstoneTools.setToolActive("Pan", { mouseButtonMask: 1}) :cornerstoneTools.setToolDisabled("Pan", { mouseButtonMask: 1}) }
                    {this.state.isEnableMagnifyEvent? cornerstoneTools.setToolActive('Magnify', { mouseButtonMask: 1 }) :cornerstoneTools.setToolDisabled("Magnify", { mouseButtonMask: 1}) }
                    {this.state.isEnableScrollEvent? cornerstoneTools.setToolActive('StackScrollTool', { mouseButtonMask: 1 }) :cornerstoneTools.setToolDisabled('StackScrollTool', { mouseButtonMask: 1 })  }
                    {this.state.isEnableRotateEvent? cornerstoneTools.setToolActive('Rotate', { mouseButtonMask: 1 }) :cornerstoneTools.setToolDisabled('Rotate', { mouseButtonMask: 1 }) }
                    {/* {this.state.isEnableAnnotEvent ? cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 }) :cornerstoneTools.setToolDisabled('ArrowAnnotate', { mouseButtonMask: 1 }) } */}
                    {/* {this.state.isEnableRectangleEvent? cornerstoneTools.setToolActive('RectangleRoi', { mouseButtonMask: 1 }) :cornerstoneTools.setToolDisabled('RectangleRoi', { mouseButtonMask: 1 }) } */}
                        </div>

         {/* <div className="share_but">
          <img src={share} />
          <span className="shre_intr"><text className="" > Share Internaly</text></span>
         </div> */}
        <div className="viewportElement"  style={divStyle}>
            <div style={bottomRightStyle}>Zoom: {this.state.viewport.scale}</div>
            <div style={bottomLeftStyle}> 
               WW/WC: {this.state.viewport.voi.windowWidth} /{" "}
               {this.state.viewport.voi.windowCenter}
             </div>
        </div>

      </div>
    );
  }
}

export default CornerstoneElement;

