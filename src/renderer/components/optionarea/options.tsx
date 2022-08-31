import React from "react";

export function Options() {

    return (
        <>
            <div className="file-options">
                <div className="option file-name">
                    <label>File name</label>
                    <input id="file-name" type="text" placeholder="Enter file name"/>
                </div>
                <div className="option save-as">
                    <label>Save as</label>
                    <div className="select-menu">
                        <select>
                            <option value=".txt">Text File (.txt)</option>
                            <option value=".rtf">Rich Text File (.rtf)</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="save-btn" onClick={window.api.saveFile}>Save file</button>
        </>
    )
}