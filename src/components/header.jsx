import './header.css'
import { useState } from 'react'
export default function Header (){

    const [sideBar, setSideBar] = useState(false)
    function showSidebar(){
        setSideBar(prevState => !prevState)
    }
    return (
        <>
        <header>
            <h2>OAULR</h2>


            <div className="linkctn">
                <ul>
                    <li><a href="#" className='hideOnMobile'>Home</a></li>
                    <li><a href="#" className='hideOnMobile'>Cases</a></li>
                    <li><a href="#" className='hideOnMobile'>Reports</a></li>
                    <li><a href="#" className='hideOnMobile'>Contact</a></li>
                    <li><a href="#" className='hideOnMobile'>About Us</a></li>

                    <li onClick={showSidebar} className='menubtn'>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#e3e3e3">
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                            </svg>
                        </a>
                    </li>
                </ul>

                <button>Search🔎</button>
            </div>

           {sideBar && <div className="sidebar">
                <ul>
                    <li onClick={showSidebar}>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#e3e3e3">
                            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                            </svg>  
                        </a>
                    </li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cases</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About Us</a></li>

                    
                </ul>
            </div>}
            
        </header>
        </>
    )
}