import React, { PureComponent } from 'react'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter';
import '../blog/DentalComplicationsComponent.css';
class SelectedBlog extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            selectBlog: this.props.location.data.b
        }
    }

    render() {
        console.log(this.props.location.data.b)
        return (
            <div className="container-fluid">
                <div>
                    <LandingHeader/>
                </div>
                <h1 className="key-benefits">{this.state.selectBlog.name}</h1>
                <div className="row">
                    <div className="col-sm-5">
                        <img className="dentalcompli-img" src={this.state.selectBlog.img}/>
                    </div>
                    <div className="col-sm-6">
                        <p>{this.state.selectBlog.p}</p>
                    </div>
                    <div className="col-sm-1">
                    </div>
                </div>
                <div>
                    <LandingFooter />
                </div>
            </div>
        )
    }
}

export default SelectedBlog