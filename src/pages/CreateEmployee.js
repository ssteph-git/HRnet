import "./pages.css";
import { states, department } from "../data/data";
import Headline from "../components/Headline";
import Modal from "../components/Modal";
import { addEmployee } from "../lib/redux/mySlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from 'react-date-picker';
import "react-date-picker/dist/DatePicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { isActiveTrue } from "../lib/redux/mySlice";

function CreateEmployee(props) {
  const dispatch = useDispatch();

  //Récupération des données des composant externe: dropdown---------------------------------
  const [selectedOptionState, setSelectedOptionState] = useState('Alabama');
  const [selectedOptionDepartment, setSelectedOptionDepartment] = useState('Sales');

  const handleSelectState = (option) => {
    setSelectedOptionState(option.value);
  };
  const handleSelectDepartment = (option) => {
    setSelectedOptionDepartment(option.value);
  };
  //-------------------------------------------------------------------------------------

  //Récupération des données des composant externe: datepicker---------------------------------
  const [dateBirth, setDateBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
//-------------------------------------------------------------------------------------


  const handleSubmit = (event) => {
    //Récupération des données entrées dans le formulaire
   
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const dateBirthFormat = dateBirth.toLocaleDateString("en-US");
    const street = event.target.street.value;
    const city = event.target.city.value;
    const zipCode = event.target.zipCode.value;
    const startDateFormat = startDate.toLocaleDateString("en-US");

    const myEmployee = { firstName, lastName, dateBirthFormat, street, city, selectedOptionState, zipCode, startDateFormat, selectedOptionDepartment};
    dispatch(addEmployee(myEmployee));
    dispatch(isActiveTrue());
  };

  const values = states.map((item) => item[Object.keys(item)[0]]);//Récupération et formation des données de "State"

  return (
    <>
      <main>
        <Headline title="Create Employee" />
        <form id="create-employee" onSubmit={handleSubmit}>
          <div className="all_employee">
            <div className="left_employee">
              <div className="title_left">
                <p className="Civility">Civility</p>
              </div>
              <div className="field_left">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="Enter first name"
                  required
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="Enter last name"
                  required
                />

                <label htmlFor="dateBirth">Date of Birth</label>
                <DatePicker onChange={setDateBirth} value={dateBirth} />

              </div>
            </div>
            <div className="right_employee">
              <div className="title_right">
                <p className="Adress">Adress</p>
              </div>
              <div className="field_right">
                <label htmlFor="street">Street</label>
                <input
                  id="street"
                  type="text"
                  name="street"
                  placeholder="Enter the street"
                  required
                />

                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="Enter the city"
                  required
                />

                <label htmlFor="state">State</label>
                <Dropdown options={values} onChange={handleSelectState} value={"Alabama"} placeholder="Select an option"/>

                <label htmlFor="zipCode">Zip Code</label>
                <input
                  id="zip-code"
                  type="number"
                  name="zipCode"
                  placeholder="Enter the zip-code"
                  required
                />
              </div>
            </div>
          </div>
          <div className="All_assignment">
            <div className="card_assignment">
              <div className="title_assignment">
                <p className="Assignment">Assignment</p>
              </div>
              <div className="form_assignment">
                <label className="startDate" htmlFor="start-date">
                  Start Date
                </label>
                <DatePicker onChange={setStartDate} value={startDate} />
                <label htmlFor="department">Department</label>
                <Dropdown options={department} onChange={handleSelectDepartment} value={"Sales"} placeholder="Select an option"/>
                <button className="save-button">Save</button>
              </div>
            </div>
          </div>
        </form>
        {/* <Modal modalOpen={modalOpen} /> */}
        <Modal />
        
      </main>
    </>
  );
}

export default CreateEmployee;
