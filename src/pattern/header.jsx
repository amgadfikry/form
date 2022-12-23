function Header({h1,para}) {
    return (
        <header className="header">
            <h2>{h1}</h2>
            <p>{para}</p>
        </header>
    );
}

export default Header;