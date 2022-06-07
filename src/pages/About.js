import React from 'react'
import Girls from '../images/image_girls.jpeg'
import Family from '../images/image_family.jpeg'


function About() {
  return (
    <div className='container'>
        <h1>About Me</h1>
        <div className='about-container1'>
            <h2>I live with my family in a small village, called Veberöd, a suburb to Lund. Having grown up on the country side, I felt that rasing my kids here, would be the best. I have three daughters between 18 and 6 years old. Just as I do, they are very interested in music. They sing in bands, choruses and we all just love putting on karaoke and sing our hearts out in the middle of our living room.</h2>
            <img src={Girls} height="300" width="400" />
        </div>
        <div className='about-container2'>
            <img src={Family} height="300" width="400"/>
            <h2>The music comes from my mother's side of the family. Her sibblings used to play all the time at family gatherings. Me and my sibblings are, in one way or another, doing something connected to music in our everyday lifes. My broher has a country band, I sing in a chorus, my sister plays the ukulele and we all just love to sing harmonies.</h2>
        </div>
    </div>
  )
}

export default About