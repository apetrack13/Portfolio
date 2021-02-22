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
                          Compile and maintain project-specific status reports and project timelines associated with imaging studies; 
                          Manage and assure the quality of CT/MRI image collections from sites and conduct routine follow-ups; 
                          Maintain inventory of imaging study supplies for study sites; and
                          interact with study sites and internal associates.
                          General IRT Support;
                          Study product management;
                          Assist the Project Manager in system design and set-up;
                          Work with clients in obtaining requirements and responding to inquiries;
                          Create study specific documents;
                          Review study protocol to create specification documents
                          Maintain study documentation;
                          Other assigned projects and tasks; and  
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
                        <p>Designed and implemented a graphical user-interface using MATLAB to expedite
                          segmentation of anatomy in images collected from computed tomography (CT) scans; Collaborated
                          with a team of engineers and mathemeticians to meet project specific timelines and requirements. </p>
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
