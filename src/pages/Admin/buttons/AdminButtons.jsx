import React from "react";
import PropTypes from "prop-types";

function AdminSettingButtons({ className, btntext, onClick }) {

    return(
            <button className={className} onClick={onClick}>{btntext}</button>
    );
}

AdminSettingButtons.propTypes = {
    btntxt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default AdminSettingButtons