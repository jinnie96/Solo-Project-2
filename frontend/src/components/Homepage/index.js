import './Homepage.css'
import { useHistory, Link, NavLink } from 'react-router-dom'
function Homepage() {

    const history = useHistory()

    const handleStart = function() {
        history.push('./signup')
    }
    return (
        <div className='backgroundimg'>
            <main className="body">
            <h1 className="inspiration">Find your inspiration.</h1>
            <h2 className="community">Join the Crittr community, home to all pet owners and animal lovers!
            </h2>
                <div className="startbutton"> Start for free</div>
            </main>
        </div>
    )
}

export default Homepage
