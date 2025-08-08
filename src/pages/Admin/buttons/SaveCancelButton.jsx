import AdminButtons from "./AdminButtons.jsx"

function SaveCancelButtons() {
    
    const handleSave = () => {
        
    };

    const handleCancel = () => {

    };

    return (
        <div className="admin-save-cancel-buttons">
            <AdminButtons className="admin-set-save-btn" btntext="Save" onClick={handleSave} />
            <AdminButtons className="admin-set-cancel-btn" btntext="Cancel" onClick={handleCancel} />
        </div>
    );
}

export default SaveCancelButtons