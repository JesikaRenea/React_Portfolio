import React from 'react';
import resume from "../assets/images/Resume.png"

const Resume = props => {
    return (
        <div className="wrapper">

            <h3>Resume</h3>
            <hr/>
                <img class="resume" src={resume} alt="UCF Logo" />
        </div>

    );
};

export default Resume