import React from 'react';

class FileUpload extends React.Component {
    render() {
        return (
            <div onClick={this.onFileSelect}>
                <input type='file' style={{ 'display': 'none' }} onChange={this.onFileChange}
                    ref={(input) => {
                        this.fileInput = input;
                    } } />
                {this.props.children}
            </div>
        )
    }

    /**
     * The function is called whenever the files are uploaded
     * 
     * @param: event object
     */
    onFileChange = (event) => {
        const fileList = event.target['files'];
        if (fileList.length > 0) {
            this.file = fileList[0];
            this.onFileUpload();
        }
    }

    /**
     * Function called when the element which is used as file uploader
     * is clicked
     */
    onFileSelect = () => {
        this.fileInput.click();
    }

    /**
     * Function called when the file is selected in the file explorer
     */
    onFileUpload = () => {
        this.props.onFileUpload(this.file);
    }
}
export default FileUpload;