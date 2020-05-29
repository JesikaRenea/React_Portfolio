import React from 'react';
import LocalWire from "../assets/images/LocalWire_Project7.png"

const Card = props => {
    return (
        <div class="index">
                    <div class="row">

            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={LocalWire} />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Project 1: Local Wire<i class="material-icons right">...</i></span>
                    <p><a href="https://zepcap.github.io/Project_One/" target="_blank">View Project</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Project 1: Local Wire<i
                        class="material-icons right">X</i></span>
                    <p>
                        Additional Project Info
                    </p>
                </div>
            </div>

            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={LocalWire} />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Project 1: Local Wire<i class="material-icons right">...</i></span>
                    <p><a href="https://zepcap.github.io/Project_One/" target="_blank">View Project</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Project 1: Local Wire<i
                        class="material-icons right">X</i></span>
                    <p>
                        Additional Project Info
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card