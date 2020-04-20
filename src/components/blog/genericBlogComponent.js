import React, { useEffect, useState } from 'react';
import '../blog/DentalComplicationsComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";
import axios from 'axios'
import { API_URL, SITE_URL } from '../../constants'

function BlogPost(props) {

    const [state, setState] = useState({
        title: '',
        body: [],
        imageUrl: '',
        tags: '',
        description: '',
        uriTag: props.match.params.uriTag
    })

    useEffect(() => {
        axios.get(API_URL + 'blog/blogPost/' + props.match.params.uriTag).then(res => {
            console.log(res.data)
            setState({
                ...state,
                ...res.data
            })
        })
    }, [])

    return (
        <div>
            <div className='container-fluid'>
                <Helmet>
                    <link rel="canonical" href={SITE_URL + state.uriTag} />
                    <title>{state.title}</title>
                    <meta name='keywords' content={state.tags} />
                    <meta name="description" content={state.description} />
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="dental-margin">
                    <h1 className="key-benefits">{state.title}</h1>
                    <div className="row">
                        <div className="key-benefits">
                            <img className="dentalcompli-img" src={state.imageUrl} alt={state.title} />
                        </div>
                    </div>
                    <div className="row">
                        <div dangerouslySetInnerHTML={{ __html: state.body }} />
                    </div>
                </div>
            </div>
            <LandingFooter />
        </div>
    );
}

export default BlogPost;