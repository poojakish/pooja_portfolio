import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/AboutMe.scss'; // reuse your existing stylesheet for consistent look

function AboutMe() {
    return (
        <div className="container" id="about-me">
            <div className="about-me-content">
                {/* <FontAwesomeIcon icon={faUser} size="3x" /> */}
                <h1>About Me</h1>
                <p>
                    I’m a Computer Science graduate from the University of Twente, specialising in AI, data science, and computer vision. 
                    I love building intelligent systems that don’t just work in theory, but actually make a difference in the real world.
                </p>
                <p>
                    My journey in AI has taken me from research to real-world impact, from detecting damaged HAZMAT placards in real-world 
                    video streams for my master’s thesis, to presenting research at CVPR 2025, and developing AI-driven pipelines to improve 
                    public space maintenance. These experiences taught me how to design solutions that are not only smart, but also robust, 
                    reliable, and grounded in practicality.
                </p>
                <p>
                    What really drives me is the balance between innovation and application. I enjoy bridging the gap between research and 
                    engineering, whether that’s creating synthetic data for training, optimising computer vision models for edge devices, 
                    or building full end-to-end systems that can be deployed at scale.
                </p>
                <p>
                    Outside of work, I’m a big fan of reading fantasy books (the kind that make you forget time exists) and experimenting 
                    in the kitchen, cooking is my creative outlet where I get to improvise and explore new ideas, much like in my projects.
                </p>
                <p>
                    At my core, I’m endlessly curious, always learning, and passionate about using AI to solve meaningful problems. For me, 
                    technology isn’t just about algorithms, it’s about creating something real, useful, and human.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
