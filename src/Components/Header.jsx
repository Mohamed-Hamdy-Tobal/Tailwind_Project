import { Link } from "react-router-dom"
import logo from '../assets/imgs/logo.svg'
import { useEffect, useRef } from "react"

const Header = () => {

    const navs = ['Features', 'Team', 'SignIn']

    const headerRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                headerRef.current.style.background = '#0c1524'
                headerRef.current.style.padding = '25px 0px'
            } else {
                headerRef.current.style.background = 'transparent'
                headerRef.current.style.padding = '50px 0px'
            }
        })
    },[])

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300" ref={headerRef}>
            <div className="container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
                <Link to='/'><img src={logo} alt='logo'/></Link>
                <nav>
                    <ul className="flex justify-between items-center gap-4 sm:gap-9">
                        {navs.map((nav, idx) => <li key={idx} className="w-[65px] text-center"><Link to={`/${nav.toLowerCase()}`} className="text-white opacity-[0.9] hover:opacity-[1] hover:font-bold transition-all duration-300">{nav}</Link></li>)}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header