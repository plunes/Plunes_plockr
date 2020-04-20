import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import data from '../data/data.json';
import Helmet from 'react-helmet';
import '../blog/BlogComponent.css';
import LandingHeader from '../LandingComponent/LandingHeader.js';
import LandingFooter from '../LandingComponent/LandingFooter.js';
import BlogMonthComponent from './BlogMonthComponent'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants'

class BlogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newdata: [],
      monthBlogs: [],
      page: 1,
      showNext: false
    };
    this.handleMonth = this.handleMonth.bind(this)
  }

  handleMonth(select) {
    // console.log(select, 'month')
    let blogs = data.filter((d) => {
      if (d.month === select) {
        return true
      } else {
        return false
      }
    })
    this.setState({
      monthBlogs: blogs
    })
  }

  getData(page) {
    if (!page) page = 1
    axios.get(API_URL + "blog/getPosts/" + page).then(res => {
      console.log(res.data, (parseInt(page) * 20))
      if (res.data.count > (parseInt(page) * 20)) {
        this.setState({
          monthBlogs: res.data.posts,
          page: parseInt(page),
          showNext: true
        })
      } else {
        this.setState({
          monthBlogs: res.data.posts,
          page: page,
          showNext: false
        })
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match.params.page)
    this.getData(nextProps.match.params.page);
  }

  componentDidMount() {
    console.log(this.props.match.params.page)
    this.getData(this.props.match.params.page)
  }

  render() {
    return (
      <div>
        <LandingHeader />
        <Helmet>
          <link rel="canonical" href="https://www.plunes.com/blog" />
          <title>Plunes | Blog</title>
          <meta name='keywords' content="Looking for Hospitals/Doctors Near you? Check out India's First Uitility Network, Book an appointment, with free Consultation.  Download the Free app Plunes." />
          <meta name="description" content="India's first utility network, utility network, plunes, book an appointment, download app, hospitals near you, doctors near you, book instantly, free consultation, dental clinic in gurgaon, orthodontist in gurgaon, gynecologist in gurgaon, gynecology clinic gurgaon, psychologist in gurgaon, psychotherapist in gurgaon, hair transplant clinic in gurgaon, radiologist in gurgaon, ivf in gurgaon, ayurvedic clinic in gurgaon, child specialist in gurgaon, pediatrician in gurgaon, pathology in gurgaon, biopsy test in gurgaon, orthopedics doctor in gurgaon, ent specialist in gurgaon, ent surgeon in gurgaon, eye hospital in gurgaon, ophthalmologist in gurgaon, dermatologist in gurgaon, best neurologist in gurgaon, neuro hospital in gurgaon, corona test, corona test only, corona treatment equipment, corona testing hospitals, covid testing delhi, corona swab test in delhi, covid 19 test in Gurgaon, covid 19 swab test in delhi" />
        </Helmet>
        <div>
          <div className='row'>
            <div className="container-fluid">
              <img className="blog-front-img" src="/blog2.png" alt=".." />
            </div>
            <div className='col-md-12'>
              <BlogMonthComponent className='col-md-12' monthBlogs={this.state.monthBlogs} />
              <div style={{ margin: "auto" }}>
                {this.props.match.params.page > 1 ?
                  <Link to={`/blog/${parseInt(this.state.page) - 1}`}>
                    <span style={{ float: "left", cursor: "pointer", color: "#01d35a" }}>
                      « Newer Posts
                </span></Link> : null
                }
                {this.state.showNext ?
                  <Link to={`/blog/${parseInt(this.state.page) + 1}`}>
                    <span style={{ float: "right", cursor: "pointer", color: "#01d35a" }}>
                      Older posts »
                </span>
                  </Link> : null
                }
              </div>
            </div>
          </div>
        </div>
        <LandingFooter />
      </div>
    )
  }
}
export default BlogComponent;