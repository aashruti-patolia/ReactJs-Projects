import './App.css'

function Header() {
    return (
        <div>
            <header className="WebHeader">
                <div className="ContactUs">
                    <b>+ CONTACT US</b>
                </div>
                <img src="https://pngimg.com/d/gucci_PNG28.png" alt="" />
                <div className='HeaderIcon'>
                    <i class="fa-solid fa-bag-shopping fa-xl" style={{ "color": "#000000;" }}></i>
                    <i class="fa-regular fa-user fa-xl" style={{ "color": "#000000;" }}></i>
                    <i class="fa-solid fa-magnifying-glass fa-xl" style={{ "color": "#000000;" }}></i>
                    <i class="fa-solid fa-bars fa-xl" style={{ "color": "#000000;" }}></i>
                    MENU
                </div>
            </header>
            <div className='CoverPage'>
                <img src="cover.png" alt="" />
            </div>
        </div>
    );
}

export default Header;