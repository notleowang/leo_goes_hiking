const NavBar = () => {
    return (
        <div className="fixed h-[61px] mx-auto w-screen flex flex-row justify-between text-brown bg-blue-500">
            <div><img src="/Logo.svg"></img></div>
            <div className="flex bg-red-500">
                <p>home</p>
                <p>about</p>
                <p>hikes</p>
                <p>contact</p>
            </div>
        </div>
    );
};

export default NavBar;