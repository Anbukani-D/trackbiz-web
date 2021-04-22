import React
// {useState} 
from 'react';
import '../css/dataTable.css'
import { DataGrid, 
    // GridToolbarExport,GridFooter 
} from '@material-ui/data-grid';
import TablePagination from '@material-ui/core/TablePagination';
import Row from 'react-bootstrap/Row';



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
                components={{
                    Footer:CustomExport
                  }} 
                  hideFooterSelectedRowCount={true}
                  disableColumnMenu={true}
            />
        </div>
    )
}
function CustomExport() {
    const [setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 9));
    setPage(0);
  };
    return(
        <Row className="d-flex justify-content-between">       
            <div className="col-md-2">
                <p className="smallText">EXPORT AS:<span className="btn fontColor smallText">CSV</span></p>
            </div>
                <TablePagination
                    component="div"
                    count={100}
                    page={9}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
           
        </Row> 
           
        
    )
}
export default DataTable;