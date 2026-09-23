import Menu from "./Menu";

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <p className="logo">ShopEase</p>
                <Menu />
            </div>
        </header>
    );
}

export default Header;