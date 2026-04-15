import './TabButton.css';



export default function TabButton({children}){
    function handleClick(){
        console.log('Hello World');
    }
    //closure - function with a function inside of it
    return(
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}