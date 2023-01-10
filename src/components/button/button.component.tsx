import './button.styles.scss';
/*

*/
interface buttonProps {
    buttonType?: keyof buttonclasses  ;
    children?:string;
    type?:'submit' | 'button';
    onClick?:React.MouseEventHandler;

}
interface buttonclasses extends buttonProps {
    google: string;
    inverted: string;
     
    
}



const BUTTON_TYPE_CLASSES:buttonclasses = {
    google: 'google-sign-in',
    inverted: 'inverted',
    
}

const Button= ({children,buttonType,...otherProps}:buttonProps) => {
   
  return (
    <button className={`button-container ${buttonType !== undefined ? BUTTON_TYPE_CLASSES[buttonType] : ''}`}
    {...otherProps}
    >
        {children}
    </button>
  )
}

export default Button;