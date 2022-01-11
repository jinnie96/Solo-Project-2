import './Footer.css'

function Footer () {
    return (
        <footer>
          <div className="upperfooter">
            <ul>
              <li>Javascript</li>
              <li>Python</li>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="lowerfooter">
            <ul>
              <div className="lowerfooter__left">
                <li className="left">Karandeep Singh</li>
              </div>
              <div className="lowerfooter__center">
                <li className="center">Smugmug+Flickr. Connecting people through photography.</li>
              </div>
              <div className="lowerfooter__right">
                <li className="right"><img className="facebook" src="./images/Facebook-Icon-Grey.png" alt="" /></li>
                <li className="right"><img className="twitter" src="./images/208-2084735_facebook-twitter-logo-vector-grey.png" alt="" /></li>
                <li className="right"><img className="instagram" src="images/893-8936996_instagram-logo-png-transparent-background-instagram.png" alt="" /></li>
              </div>
            </ul>
          </div>
        </footer>
      );

}

export default Footer
