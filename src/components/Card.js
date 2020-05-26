import React from 'react';

const Card = props => {
    return (

            <div class="index">
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="../assets/images/Weather_Project6.png" />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Title<i class="material-icons right">...</i></span>
                            <p><a href="https://JessicaHayesDesign.com" target="_blank">View Project</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Title<i
                                class="material-icons right">X</i></span>
                            <p>
                               Additional Project Info
                        </p>
                        </div>
                    </div>

                </div>
    );
};

export default Card