import './style.css';

const Section = ({titleText, clickButton}) => {
    return (
        <>
            <h3><p>{titleText}</p></h3>
            <button type="submit">{clickButton}</button>
        </>
    )
}
export default Section;