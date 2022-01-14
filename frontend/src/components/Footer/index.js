import './Footer.css'
import github from "./images/GitHub.png"
import linkedin from "./images/Linkedin.png"
function Footer () {
    return (
        <footer>
          <div className="upperfooter">
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>Sequelize</li>
              <li>PostgreSQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li><a href="https://github.com/jinnie96" target="_blank">
                  <img className="facebook" src={github} alt="" />
                </a></li>
                <li>
                <a href="https://www.linkedin.com/in/karandeep-singh-600852a8" target="_blank">
                  <img className="twitter" src={linkedin} alt="" />
                </a>
                </li>
            </ul>
          </div>
          {/* <div className="lowerfooter">
            <ul>
              <div className="lowerfooter__left">
                <li className="left">Karandeep Singh</li>
              </div>
              <div className="lowerfooter__center">
                <li className="center">Crittr ©2022</li>
              </div>
              <div className="lowerfooter__right">
                <a href="https://www.linkedin.com/in/karandeep-singh-600852a8">
                  <img className="twitter" src={linkedin} alt="" />
                </a>
                <a href="https://github.com/jinnie96">
                  <img className="facebook" src={github} alt="" />
                </a>
              </div>
            </ul>
          </div> */}
        </footer>
      );

}

export default Footer
