import React from 'react'

export default function Footer() {

    let qa = {question:'How do i get started',answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptas, tenetur totam tempore quod molestias praesentium quasinisi at officia incidunt ducimus libero voluptate ipsa.'};
    let qaLength = [0,0,0,0,0,0,0,0,0,0,0,0];
    
  return (
    <div>
      <section id="learn" class="p-5">
      <div
        class="container text-white px-sm-5"
        style={{backgroundColor:'#ac9977'}}
      >
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h1 class="fw-bold">Airbnb Welcome Book</h1>
            <h1 class="fw-bold display-3">$199.<span class="fs-6">95</span></h1>
            <ul class="ul text-uppercase">
              <li>Customized Design</li>
              <li>User Friendly Layout</li>
              <li>Quick TurnAround time</li>
              <li>Ongoing support and updates</li>
            </ul>
          </div>
          <div class="col-md">
            <button class="btn btn-warning mb-2" style={{width:'400px',height:'40px'}}><img src="paypal.png" style={{width:'70px',height:'25px'}} class="img-fluid" alt="" /></button>
            <button class="btn mb-2" style={{width:'400px',height:'40px', backgroundColor:'#c91b72'}}><img src="eps.jpg" style={{width:'70px',height:'25px'}} class="img-fluid" alt="" />&nbsp;eps</button>
            <button class="btn btn-secondary mb-2" style={{width:'400px',height:'40px'}}><img src="sofort.png" style={{width:'70px',height:'25px'}} class="img-fluid" alt="" />&nbsp;SOFORT</button>
            <button class="btn btn-dark mb-2" style={{width:'400px',height:'40px'}}><i class="bi bi-credit-card" style={{width:'70px',height:'25px'}}></i>&nbsp;Debit or Credit Card</button>
          </div>
        </div>
      </div>
    </section>

    <section class="p-5 p-xs-0">
      <div class="container p-sm-0 p-md-5">
        {
            qaLength.map((item, index)=>{
                return(
                    <div class="px-sm-0 px-md-5">
                        <i class="bi bi-question-circle-fill h2 p-2"></i>
                        <span class="h4">{qa.question}</span>
                        <p class="px-sm-0 px-md-5 mx-1">
                            {qa.answer}
                        </p>
                    </div> 
                );
            })
        }
      </div>
    </section>
    </div>
  )
}
