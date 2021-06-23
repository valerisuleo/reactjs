import React, { Component } from "react";
import config from "../config.json";

class GMaps extends Component {

    // Step three: Create our Map
    componentDidMount() {        
        const gmapScript = document.createElement("script");
        gmapScript.src = `https://maps.googleapis.com/maps/api/js?key=${config.gmapsApiKey}&libraries=places`;
        window.document.body.appendChild(gmapScript);
        gmapScript.addEventListener("load", () => {
            this.googleMap = this.createGoogleMap();
            this.marker = this.createMarker();
        });
    }

    // Step One: Create a div element named “map” to hold the map.
    mapcontaineRef = React.createRef();

    // Step Two: Define a JavaScript function that creates a map in the div.
    createGoogleMap = () =>
        new window.google.maps.Map(this.mapcontaineRef.current, {
            zoom: 16,
            center: {
                lat: this.props.lat,
                lng: this.props.lng,
            },
            disableDefaultUI: false,
        });

    createMarker = () =>
        new window.google.maps.Marker({
            position: { lat: this.props.lat, lng: this.props.lng, },
            map: this.googleMap,
        });

    render() {
        return (
            <div
                id="gmaps"
                ref={this.mapcontaineRef}
                style={{
                    maxWidth: "100%",
                    height: "50vh",
                    backgroundColor: "red",
                }}
            ></div>
        );
    }
}
export default GMaps;
