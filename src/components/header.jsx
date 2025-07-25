import"./header.css"
export default function Header(){
    return(
        <header className="w-full bg-blue-500 h-[50px]">
            <h1>My store</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                     <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}