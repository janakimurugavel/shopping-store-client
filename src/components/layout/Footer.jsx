function Footer() {
    const currentYear = new Date().getFullYear();
    const storeName = "januShop";
    const ownerName = "Janaki";

    return (
        <footer className="footer">
            <p>© {currentYear} {storeName} - Owned by {ownerName}. All rights reserved.</p>
        </footer>
    );
}

export default Footer;