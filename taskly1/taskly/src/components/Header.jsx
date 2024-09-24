import Nav from '../components/Nav';

function Header(){
    return(
        <header className=" header bg-cor-header  top-0 mx-auto flex w-full items-center justify-between border-b-2  border-black p-5">
        <Nav/>
        </header>
    )
}

export default Header