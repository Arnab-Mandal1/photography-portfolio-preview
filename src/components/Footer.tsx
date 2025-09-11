
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-teal-900 text-teal-100 py-6">
            <div className="container mx-auto px-6 text-center">
                <p>© {currentYear} Arnab Mandal. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
