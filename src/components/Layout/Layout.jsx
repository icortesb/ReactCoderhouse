import NavBar from "../NavBar/NavBar";

const Layout = ({children}) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <footer>Footer</footer>
        </>
    );
};
export default Layout;
