import './TabButton.css';



export default function TabButton({children, /*onSelect,*/ isSelected, ...props}){
    console.log("Tab button is rendered");
    // function handleClick(){
    //     console.log('Hello World');
    // }
    //closure - function with a function inside of it
    return(
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
        </li>
    )
}