interface LayoutProps {
    children : React.ReactNode 
};

const Layout = ({children,} : LayoutProps ) =>{

    return (
        <div>
            <p>This is Heading </p>
            {children}
        </div>
    )
}

export default Layout ; 