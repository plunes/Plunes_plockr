import React from 'react';
import '../LandingComponent/Landing.css';


class PreloaderComponent extends React.Component {
    render() {
        return <div className = 'container'>
            <div >
                <h1>
                    Preloading....
                </h1>
            </div>
        </div>
    }
}
export default PreloaderComponent