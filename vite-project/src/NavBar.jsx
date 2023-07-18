const NavBar = () => {
    return (
        <section className="pt-[63px]">
            <nav className="flex justify-between">
                <img className="cursor-pointer" src="/Logo.svg"></img>
                <ul className="flex gap-[57px] text-xl items-center text-brown">
                    <li className="cursor-pointer">home</li>
                    <li className="cursor-pointer">about</li>
                    <li className="cursor-pointer">hikes</li>
                    <li className="cursor-pointer">contact</li>
                </ul>
            </nav>
        </section>
    );
};

export default NavBar;