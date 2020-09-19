import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<h2 className="colorlib-heading animate-box fadeInUp animated">My Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/neuroDaq.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="https://github.com/apetrack13/NeuroDAQ">Quality Control Device for Transcranial Electrical Stimulators</a>
											</h3>
											<span>GitHub Repository</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/spcPicture.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="https://github.com/apetrack13/compressed_sensing_simulation">Master's Thesis: Single-Pixel Camera Based Spatial Frequency Domain Imaging for Non-Contact Tissue Characterization</a>
											</h3>
											<span>GitHub Repository</span>
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
