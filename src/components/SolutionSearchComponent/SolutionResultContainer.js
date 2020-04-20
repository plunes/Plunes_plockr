import React from 'react';
import PreloaderComponent from '../PreloaderComponent/PreloaderComponent';
import ProfileComponent from '../ProfileComponent/ProfileComponent'

class SolutionResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.root = props.root
    console.log(this.root.doctorList, 'doctorlistssssssssss');

        this.state = {
            // searchQueryInput: this.props.searchInputQuery,
            loading: false,
            data: []
        }

    }
    componentDidMount() {
            if(!this.root.doctorList){  //  refresh , direct url hit
                //  get the data from locat storage
                //  //    let bidId = viewBids.user[0]._id
    //    let viewBidsOfProcedures = await this.viewBidsProcedures(bidId);
    //    let listOfDoc = viewBidsOfProcedures.user.data;


            }
            let docArray = [];
            let profileData = this.root.doctorList.map((item) => {
            let originalPrice = Number(item.original_price);
            let newPrice = Number(item.new_price);
  
            let discount = (originalPrice - newPrice)/originalPrice;
            let savePercent = discount * 100;
            let obj = {
               'name' : item.professional_name,
               'diagnostic' : item.diagnostic,
               'distance': item.distance,
               'imgUrl' : item.professional_image,
               'save' :  savePercent + ' %',
               'professionalId' : item.professional_id,
               'location' : item.location,
               'actualPrice' : originalPrice,
               'finalPrice' : newPrice
            }
          //   this.state.data.push(obj);
          docArray.push(obj)
        })
        
        // this.root.doc

        this.setState({
            data : docArray
        })
    }

    render() {

        const { loading } = this.state;
        if (loading) {
            return <div>
                <PreloaderComponent />
            </div>
        }

        return <div className='container-fluid'>
            <div>
                Anshul
            </div>
                {
                    this.state.data.map((pdata) => {
                        return <ProfileComponent key={pdata.name} data={pdata} root = {this.root} />
                    })
                }
        </div>
    }
}
export default SolutionResultContainer;