import './TabButton.css';

export default function TabButton({children, isSelected, ...props}){
    console.log("Tab button is rendered");
    return(
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
        </li>
    )
}