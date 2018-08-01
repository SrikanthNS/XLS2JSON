import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import XLSX from 'xlsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    saveUploadedXLSX as saveUploadedXLSXAction,
} from './actions/actions';

class Upload extends Component {
    constructor(props){
        super(props);
    }
    saveJSON(xlsxJSON){
        console.group("xlsxJSON at saveJSON");
        console.log(xlsxJSON);
        console.groupEnd("xlsxJSON at saveJSON");
        this.props.saveUploadedXLSX(xlsxJSON);
    }
    upload(e) {
        var reader = new FileReader();
        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onload =  (e) =>  {
            /* read and populate HTML table */

            var data = new Uint8Array(reader.result);
            var wb = XLSX.read(data, { type: "array" });
            //var htmlstr = XLSX.write(wb, { sheet: "Sheet1", type: "binary", bookType: "html" });
            //console.log(htmlstr);
            //$("#wrapper")[0].innerHTML += htmlstr;

            /* convert to JSON */

            data = new Uint8Array(data);
            var arr = [];//new Array();
            for (var i = 0; i !== data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
            }
            var bstr = arr.join("");


            var workbook = XLSX.read(bstr, { type: "binary" })

            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            var xlsxJSON = (XLSX.utils.sheet_to_json(worksheet, { raw: true }));
            this.saveJSON(xlsxJSON);

        }
    }
    render() {
        return (
            <input type="file" id="input-excel" ref="input-xls" onChange={ (e) => this.upload(e)}/>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        saveUploadedXLSX: saveUploadedXLSXAction,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Upload);

//export default Upload;
