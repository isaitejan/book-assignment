import React from 'react'

export default function Review() {
  return (
    <div>
        <section class="p-5 my-5">
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-md">
            <div class="card border-0">
              <div class="card-body text-center">
                <div class="h1 mb-0">
                  <i class="bi bi-person-square text-primary"></i>
                </div>
                <h3
                  class="card-title text-dark mb-3 bg-white text-capitalize p-4 shadow-sm"
                >
                  Enhace your guest's experience
                </h3>
                <p class="card-text text-dark">
                    quisque velit nisi, pretium ut lacinia in, elementum id enim.<br />
                    Vivamus magna justo, lacinia eget consectetur sed.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card border-0">
              <div class="card-body text-center">
                <div class="h1 mb-0">
                  <i class="bi bi-star-fill text-warning"></i>
                </div>
                <h3
                  class="card-title text-dark mb-3 text-capitalize p-4 bg-white shadow-sm"
                >
                  Boost positive reviews
                </h3>
                <p class="card-text text-dark">
                    Our welcome books address guests' needs and questions, <br />
                    improving communication and satisfaction.
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
