import './TabButton.css';



export default function TabButton({children, onSelect}){
    console.log("Tab button is rendered");
    // function handleClick(){
    //     console.log('Hello World');
    // }
    //closure - function with a function inside of it
    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}