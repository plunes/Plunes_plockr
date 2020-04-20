import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class BlogMonthComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            blogs: [],
            showAllBlogs: true,
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            blogs: nextProps.monthBlogs
        })
    }
    render() {
        return (
            <div style={{ margin: '5% auto', width: "90vw" }}>
                {
                    this.state.blogs ? this.state.blogs.map((b, index) => (
                        <div key={index} style={{ marginBottom: "-35px" }}>
                            <div className="card" style={{ display: 'flex', flexDirection: 'row', width: "auto" }} >
                                <img className="card-img-top" src={b.imageUrl} alt={b.imageUrl} style={{ objectFit: "cover", maxWidth: "450px", maxHeight: "250px", border: "1px solid #d0d0d0", borderRadius: "0" }} />
                                <div className="card-body" style={{ border: "1px solid #d0d0d0", backgroundColor: "#f9f9f9", maxHeight: "inherit" }}>
                                    <h4 style={{ fontSize: "22px", color: "#343434" }}>{b.title}</h4>
                                    <p style={{ color: "#a5a5a5", fontSize: "15px", marginBottom: "5px" }}>{`${new Date(b.createdAt).getDate()} ${new Date(b.createdAt).toLocaleDateString('default', { month: "long" })}`}</p>
                                    <hr style={{ margin: "0px" }} />
                                    <p style={{ color: "#343434", marginTop: "5px" }}>{b.description}</p>
                                    <Link className="btn btn-primary blog-button" style={{ margin: "0" }}
                                        to={`/post/${b.uriTag}`}
                                    >View More</Link>
                                </div>

                            </div>
                        </div>
                    )) : false
                }
            </div>
        )
    }
}

export default BlogMonthComponent