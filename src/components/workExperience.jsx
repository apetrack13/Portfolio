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
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Riverain Technologies <span>Dec. 2019 - May 2020</span></h2>
                        <p>Under supervision, I designed and implemented a graphical user-interface using MATLAB to expedite
                          segmentation of anatomy in images collected from computed tomography (CT) scans.</p>
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
                        <p>Worked independently and as a larger team within our research and engineering groups to develop novel algorithms for state-of-the-art optical imaging devices.</p>
                        <p>Presented and maintained detailed records of on-going research to fellow team members.</p>
                        <p>Conducted literature searches to guide and keep abreast of future technical trends in the medical imaging
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
                        <p>Designed data acquisition device (DAQ) in EAGLE powered by Raspberry Pi and Python to assess quality of transcranial current stimulation device for local neuroscience company.</p>
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
