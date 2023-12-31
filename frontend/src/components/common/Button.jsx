/*
filename: Button.jsx
Author: Anh Tuan Doan
StudentId: 103526745
last date modified: 03/09/2023
*/
import "./Button.css"
function Button({onClick, className, children}) {
    return (
        <button  onClick={onClick} className={"button " + className}>{children}</button> // The children prop is used to display the content inside the button
    );
}

export default Button;