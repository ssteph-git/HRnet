import Headline from "../components/Headline";
import { useDispatch, useSelector } from "react-redux";
import DataTable from 'react-data-table-component';
import { columns } from "../data/data";

function CurrentEmployees(props) {
    let employees = useSelector((state) => state.addEmployee);
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    // console.log("employees", employees);


    const paginationOptions = {
        rowsPerPage: 2,
        rowsPerPageOptions: [2, 5, 10],
      };

    return (
        <>
        <main>
            <Headline title="Current Employees"/>
            <DataTable columns={columns} data={employees} selectableRows 
            expandableRows expandableRowsComponent={ExpandedComponent} pagination={paginationOptions}/>
        </main>
        
        </>
    );
  }
  
  export default CurrentEmployees;