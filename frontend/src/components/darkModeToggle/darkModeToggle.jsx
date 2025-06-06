import "./darkModeToggle.scss";

export const DarkModeToggle = ({ handleChange, darkModeActive}) => {
    return (
        <div className="darkModeToggle">
            <div className="darkMode" onClick={handleChange}>
                <div className="lightModeIcon" hidden={!darkModeActive}>
                    <svg width="28px" height="28px" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 12L23 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 2V1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 23V22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 20L19 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 4L19 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 20L5 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4 4L5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1 12L2 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div className="darkModeIcon" hidden={darkModeActive}>
                    <svg width="28px" height="28px" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" strokeWidth="2"></circle><path d="M7.63262 3.06689C8.98567 3.35733 9.99999 4.56025 9.99999 6.00007C9.99999 7.65693 8.65685 9.00007 6.99999 9.00007C5.4512 9.00007 4.17653 7.82641 4.01685 6.31997" strokeWidth="2"></path><path d="M22 13.0505C21.3647 12.4022 20.4793 12 19.5 12C17.567 12 16 13.567 16 15.5C16 17.2632 17.3039 18.7219 19 18.9646" strokeWidth="2"></path><path d="M14.5 8.51L14.51 8.49889" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 17C11.1046 17 12 16.1046 12 15C12 13.8954 11.1046 13 10 13C8.89543 13 8 13.8954 8 15C8 16.1046 8.89543 17 10 17Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
            </div>
            <label htmlFor="darkModeToggle"/>
        </div>
    );
}