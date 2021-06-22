import React, { Component } from 'react'

export default class WorkExperience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="workExperience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Project Coordinator at Medpace Imaging Core Laboratories <span>Sep. 2020 - Present</span></h2>
                        <p>
                          Assist the project manager draft medical imaging documentation for clinical trials;
 	                        Compile and maintain project-specific status reports and project timelines associated with imaging studies;
                          Manage and assure the quality of CT/MRI image collections from sites and conduct routine follow-ups; and
                          Collaborate with clinical database programmers and software engineers to meet build requirements.
  
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Riverain Technologies <span>Dec. 2019 - May 2020</span></h2>
                        <p> Successfully defended thesis titled “Single Pixel Camera Based Spatial Frequency Domain Imaging for Non-Contact Tissue Characterization” that proposed a novel imaging approach for characterizing Alzheimer’s;
                            Researched optimal Fourier and wavelet basis functions for single pixel imaging;
                            Collaborated with researchers and engineers to develop novel, state-of-the-art optical imaging devices utilizing optical sensors and scientific equipment including avalanche photodiodes, lasers, LEDs, digital micromirror devices, single photon counters, optical fibers, and digitizers; and
                            Wrote control software for novel optical imaging devices with LabView, C++, and MATLAB.
 </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Research Assistant at Biomedical Imaging Lab <span>July 2018 - July 2020</span></h2>
                        <p>Worked independently and as a larger team within our research and engineering groups to develop novel 
                          algorithms for state-of-the-art optical imaging devices; Presented on-going research to fellow colleagues 
                          and maintained detailed records; and Conducted literature searches to guide and keep abreast of future technical trends in the medical imaging
                          community.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Rio Grande Neurosciences <span>August 2017 - May 2018</span></h2>
                        <p>Designed data acquisition device (DAQ) in EAGLE powered by Raspberry Pi and 
                          Python to assess quality of a transcranial current stimulation device;  
                          Collaborated with a group of engineering students to meet project specific timelines 
                          and expectations; and Presented project proposal and finished device to 
                          colleagues.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
