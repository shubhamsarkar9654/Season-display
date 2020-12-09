import React, {Component} from 'react'

import SeasonDisplay from './components/SeasonDisplay.jsx';
import Loader from './components/Loader.jsx'


export default class App extends Component {
    state = {
        lat: null,
        errorMessage: '' 
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (err) => {
                this.setState({
                    errorMessage: err.message
                })
            }
        )
    }

    renderContent() {
        const {lat,errorMessage} = this.state
        if (errorMessage && !lat) {
            return <div>{errorMessage}</div>
        }if (!errorMessage && lat) {
            return <SeasonDisplay lat={lat}/>
        }
        return <Loader message={"Please accept location request..."} />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
