import React
// {useState} 
from 'react';
import '../css/dataTable.css'
import { DataGrid, 
} from '@material-ui/data-grid';
import { CSVLink } from "react-csv";
const DataTable = (props) => {
    let {...rest } = props; 
    return(
        <div style={{width:'100%', height:500}}>
            <DataGrid
                columns={props.columnData}
                rows={props.rowData}  
                {...rest}    
                pageSize={5} 
                rowsPerPageOptions={[5, 10, 20]} 
                pagination
                  hideFooterSelectedRowCount={true}
                  disableColumnMenu={true}
            />
            <div className="col-md-2">
                <p className="smallText">EXPORT AS:
                    <CSVLink 
                        data={props.rowData} 
                        filename={"export.csv"}
                        target="_blank">
                            <span className="btn fontColor smallText">CSV</span>
                    </CSVLink></p>
            </div>
        </div>
    )
    
}

export default DataTable;