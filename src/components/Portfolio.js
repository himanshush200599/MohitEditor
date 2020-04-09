import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">

		  <h1>Checkout some of my work.</h1>
		  <ul className="cards">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
				console.log(item.imgurl)
              return(

					<li className="cards_item">
					  <div className="card">
            <div class="iframeC">
						<iframe class="iframeClass" src={item.imgurl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
						</iframe>

						</div>
						<div className="card_content">
						  <h2 className="card_title">{item.name}</h2>
						  <p className="card_text">{item.description}</p>

						</div>
					  </div>
					</li>
              )
            })
          }
          </ul>

      </div>
  </section>
        );
  }
}
