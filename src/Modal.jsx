import "./Modal.css"

function CreateModal({setShowModal, setRows, setNames}){
    return(
        <div className="modal_background">
            <div className="modal_main">
                <div className="modal_title">
                    <h2>Warning</h2>
                </div>
                <div className="modal_content">
                    <p>Are you sre to clear all the data?</p>
                </div>
                <div className="modal_button">
                    <button className="yes" onClick={
                            () =>{
                                setRows([]);
                                setNames(["", "", "", ""]);
                                setShowModal(false);}}>
                                
                        Yes</button>
                    <button className="no" onClick={() => setShowModal(false)}>No</button>
                </div>
            </div>
        </div>
    );
}

export default CreateModal;