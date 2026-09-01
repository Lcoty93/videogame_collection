function Footer() {
    const today = new Date();
    const currentYear = today.getFullYear();

    return(<footer className="footer">
        <p>
            © {currentYear} Luke Coty | Built with MERN
        </p>
    </footer>)
}

export default Footer;