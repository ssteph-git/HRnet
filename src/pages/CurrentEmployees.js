import Headline from "../components/Headline";
import { useDispatch, useSelector } from "react-redux";

function CurrentEmployees(props) {
    let employees = useSelector((state) => state.addEmployee);
    console.log("employees", employees);
    return (
        <>
        <main>
            <Headline title="Current Employees"/>
        </main>
        
        </>
    );
  }
  
  export default CurrentEmployees;