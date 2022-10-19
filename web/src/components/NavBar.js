import { Nav, Navbar } from "react-bootstrap"


const NavBar = () => {
    // const navStyle = {paddingRight: 5}
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <Navbar.Brand>
                <a href="https://www.opensourceatillinois.com">Open-Source at Illinois</a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                Free Food Finder
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;