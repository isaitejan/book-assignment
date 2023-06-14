import React from 'react'

export default function Home() {
  return (
    <div>
      <section class="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div class="container p-5">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1 class="text-dark">
              Create a professional<br />
              welcome book that will <br />
              <span class="text-warning fst-italic">boost your bookings </span>
              <br />
              even if you're not a<br />
              design expert!
            </h1>
            <p class="lead my-4 text-dark text-sm">
              Transform your quest's experience with a stunning<br />
              welcome book that leaves a lasting impression.
            </p>
            <button class="btn btn-dark btn-lg">Learn More</button>
          </div>
          <img class="img-fluid w-50 d-none d-sm-block" src="bookimage.png" alt="" />
        </div>
      </div>
    </section>
    </div>
  )
}
