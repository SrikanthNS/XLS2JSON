import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class HtmlTable extends Component {
    constructor(props){
        super(props);
        console.group("At HtmlTable props");
        console.log(props);
        console.groupEnd("At HtmlTable props");
    }
    renderTRs(){
            console.log("typeof this.props.uploadedXL = ", typeof this.props.uploadedXL);
            (item, index) => {
                return (<tr key={1}><td>{1}</td></tr>);
            }
    }
    renderHTMLTable(){
       return(
           <table border="1">
               { this.renderTRs() }
           </table>
       )
    }
    render() {
        console.group("At HtmlTable render props");
        console.log(this.props.uploadedXL);
        console.groupEnd("At HtmlTable render props");
        return (
            <div id="html-table">
             { this.renderHTMLTable() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.group("state at mapStateToProps HtmlTable");
    console.log(state);
    console.groupEnd("state at mapStateToProps HtmlTable");
    return {
        uploadedXL: _.get(state, 'uploadedXLSX.uploadedXL'),
    };
}

export default connect(mapStateToProps)(HtmlTable);
//export default HtmlTable;
