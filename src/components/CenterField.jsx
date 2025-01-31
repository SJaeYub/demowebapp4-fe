import "./CenterField.css"

const CenterField = ({mainTxt, subTxt}) => {
    return (
        <div className="title-container">
            <h1>{mainTxt}</h1>
            <h2>{subTxt}</h2>
        </div>
    )
}

export default CenterField;