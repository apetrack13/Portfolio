import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <h2 class="colorlib-heading animate-box fadeInUp animated">Education</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <div class="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Master of Science in Computer Science
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h1>Overview</h1>
                                                            <p>
                                                                I pursuing a Master of Science Degree in Computer Science degree
                                                                at Wright State University. I plan to study machine/deep learning, 
                                                                parrallel computing, and advanced signal processing.
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h1>Coursework</h1>
                                                            <li>Data Structures & Algorithms</li>
                                                            <li>Deep Learning</li>
                                                            <li>Data Structures & Algorithms</li>
                                                            <li>Machine Learning</li>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Master of Science in Biomedical Engineering
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false">
                                                <div className="panel-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                        <h1>Overview</h1>
                                                            <p>
                                                            I received my Master of Science in Biomedical Engineering July of 2020 at
                                                            Wright State University. During my graduate studies, I worked as a Graduate
                                                            Research Assistant for the Biomedical Imaging Lab under the supervision of
                                                            Ulas Sunar, Ph.D. As part of my thesis disseration "Single Pixel
                                                            Camera Based Spatial Frequency Domain Imaging for Non-Contact Tissue
                                                            Characterization", I developed a novel single pixel imaging system
                                                            to monitor the progression of Alzheimers.
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h1>Coursework</h1>
                                                            <li>Ethics in Engineering</li>
                                                            <li>Thesis Research in BME</li>
                                                            <li>Neurophotonics & Optical Brain Mapping</li>
                                                            <li>Biomedical Signals</li>
                                                            <li>Processing of Medical Images</li>
                                                            <li>Probability & Statistics</li>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingThree">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Bachelor of Science in Biomedical Engineering
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                                                <div className="panel-body">
                                                    <div className="row">
                                                    <div className="col-md-6">
                                                        <h1>Overview</h1>
                                                        <p>
                                                            I completed my Bachelor of Science in Biomedical Engineering at
                                                            Wright State University in the spring of 2018. During my senior year,
                                                            I worked with a local neuroscience company to develop a quality control
                                                            device for transcranial direct current stimulators. The project is available
                                                            in my GitHub repository.
                                                        </p>
                                                            
                                                        </div>
                                                        <div className="col-md-6">
                                                        <h1>Coursework</h1>
                                                            <li>Human Biomechanics</li>
                                                            <li>Calculus I, II, III</li>
                                                            <li>Optical Imaging</li>
                                                            <li>Bioinstrumentation</li>
                                                            <li>Biotransport</li>
                                                            <li>Intro. to Computation for BME</li>
                                                            <li>Medical Imaging</li>
                                                            <li>Statistics</li>
                                                            <li>Biomaterials</li>
                                                            <li>Anatomy & Physiology</li>
                                                            <li>Signals & Systems</li>
                                                            <li>Industrial Controls & Automation</li>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        )
    }
}
