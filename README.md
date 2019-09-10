# react-file-upload

This is a simple react component which can be used to make any element file uploadable on click.

## Setup

Install the package

```
npm i react-file-upload
```

## Usage

Import the component from the package

```
import { FileUpload } from 'react-file-upload'
```
Wrap the component around any element which needs show the option to upload file when clicked.

```
<FileUpload onFileUpload={this.onFileUpload}>
<!-- Any element-->
</FileUpload>
```
The function `onFileUpload` will have the `file` param which is the uploaded file object

```
onFileUpload=(file)=>{
// Call service to upload file
}
```
