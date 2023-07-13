import React from 'react'

import img from './luthf-pf-img.jpg'

const Layout = () => {
  return (
    <div>
      <section class="pt5 pb4">
        {/* <h2 class="athelas ph3 ph0-l">section</h2> */}
        <article class="pv4 bt bb b--black-10 ph3 ph0-l shadow-2" data-name="article-full-bleed-background">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f2 athelas mt0 lh-title">Meet Luthfullah</h1>
              <p class="times tj lh-copy measure f2 mt0 center ">
                  Prasat Suor Prat (Khmer: ប្រាសាទសួព្រ័ត) is a series of twelve towers spanne
                  north to south lining the eastern side of royal square in Angkor Thom,
                  near the town of Siem Reap, Cambodia. The towers are made from rugged
                  laterite and sandstone. The towers are located right in front of
                  Terrace of the Elephants and Terrace of the Leper King, flanking the
                  start of the road leading east to the Victory Gate, on either side of
                  which they are symmetrically arranged. Their function remains unknown.
            </p>
            </div>
            <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-60 w-20-ns">
              <img src={img} className="db grow" alt="Photo of a dimly lit room with a computer interface terminal." />
            </div>
          </div>
          {/* <p className="f6 lh-copy gray mv0">By <span className="ttu">Robin Darnell</span></p>
          <time className="f6 db gray">Nov. 21, 2016</time> */}
        </article>
      {/* Name */}
    </section>

      <div >
       
        </div>
      
    </div>
  )
}

export default Layout