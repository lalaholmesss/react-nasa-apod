export default function Footer(props){
    const { handleDisplayModal, data} = props

    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>{data?.title}</h2>
                
            </div>
            <button onClick={handleDisplayModal}>
                <i className="fa-regular fa-star"></i>
            </button>
        </footer>
    )
}