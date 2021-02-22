import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">Biography</h2>
                        <p>
                        I am a Biomedical Engineer from Wright State University 
                        with experience in medical imaging, machine learning, 
                        and image processing. Recently, I completed my master's 
                        degree in biomedical engineering from the Department of Biomedical, 
                        Industrial & Human Factors Engineering at Wright State University. 
                        During my graduate studies, I developed novel, state-of-the-art 
                        optical imaging devices for the Biomedical Imaging Lab located in
                        the heart of the Neuroscience Engineering Collaboration building; a center where
                        engineers collaborate with medical researchers and clinicians to improve the
                        diagnosis and treatment of neurological disorders and cancer. As part of 
                        my  master's thesis, I designed and implemented a single pixel 
                        camera based spatial frequency domain optical imaging device to work 
                        towards achieving a imaging modality that could be used to monitor 
                        the progression of Alzheimer's disease, bed-side. 
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Areas of Expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-image" />
                </span>
                <div className="desc">
                    <h3>Signal Processing </h3>
                    <p>I have taken coursework in signals and systems, image processing, and machine
                        learning. My thesis work also utilized concepts in this space.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-cog" />
                </span>
                <div className="desc">
                    <h3>Machine Learning</h3>
                    <p>I have applied machine learning to overcome barriers in the field of optical
                        imaging and have internship experience.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-monitor" />
                </span>
                <div className="desc">
                    <h3>Software</h3>
                    <p>I am an advid programmer. I have project experience utilizing programming languages
                        such as Python, MATLAB, and C++. I am also familiar with web technologies.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-book2" />
                </span>
                <div className="desc">
                    <h3>Research</h3>
                    <p>I have worked as a Graduate Research Assistant for the Biomedical
                        Imaging Lab at Wright State University, which I developed state of the
                        art optical imaging devices. </p>
                </div>
                </div>
            </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-4">
                <span className="icon">
                    <i className="icon-heart3" />
                </span>
                        <div className="desc">
                            <h3>Medical Imaging</h3>
                            <p>My research and internship experience pertains to medical imaging. Beyond
                                my coursework as a Biomedical Engineer, I have worked with CT and many
                                optical imaging modalities.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-2">
                <span className="icon">
                    <i className="icon-microphone2" />
                </span>
                        <div className="desc">
                            <h3>Public Speaking</h3>
                            <p>As a Graduate Research Assistant, I gave presentations on a weekly
                                basis detailing the progress of my work. 
                            </p>
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
