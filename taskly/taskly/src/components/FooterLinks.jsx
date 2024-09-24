import logoinstagram from '../assets/logoinstagram.png'
import logotwitter from '../assets/logotwitter.png'


function FooterLinks(){
    return(
        <>
        <div className="flex w-full items-center justify-between px-4 mr-10">
            <RedesSociais/>
            <nav className="flex space-x-10 ml-auto">
            <a href="/" className="nav-link">Home</a>
            <a href="/" className="nav-link">Blog</a>
            <a href="/" className="nav-link">Sobre</a>
            </nav>
            </div>
        </>
    )
}

function RedesSociais(){
    return(
        <>
        <div className="ml-10 w-10 flex items-center space-x-3">
        <img src={logoinstagram}/>
        <img src={logotwitter} />
        </div>
        </>
    )
}

export default FooterLinks;