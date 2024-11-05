export default function SideBar(props){
    const {handleDisplayModal, data} = props
    return(
        <div className="sideBar">
            <div className="bgOverlay"></div>
            <div className="sideBarContent">
                    <h2 className="describtionHeader">{data?.title}</h2>
                    <div>
                        <p className="describtionDate">{data?.date}</p>
                        <p>{data?.explanation}</p>  
                    </div>
                <button onClick={handleDisplayModal}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    )
}