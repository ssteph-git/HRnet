import "./pages.css";
import { states } from "../data/data";

import Headline from "../components/Headline";

function CreateEmployee(props) {
  return (
    <>
      <main>
        <Headline title="Create Employee" />
        <form action="#" id="create-employee">
          <div className="all_employee">
            <div className="left_employee">
              <div className="title_left">
                <p className="Civility">Civility</p>
              </div>
              <div className="field_left">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="Enter first name"
                />

                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Enter last name"
                />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input
                  id="date-of-birth"
                  type="date"
                  name="date-of-birth"
                  placeholder="Enter date of birth"
                />
              </div>
            </div>
            <div className="right_employee">
              <div className="title_right">
                <p className="Adress">Adress</p>
              </div>
              <div className="field_right">
                <label htmlFor="street">Street</label>
                <input id="street" type="text" placeholder="Enter the street" />

                <label htmlFor="city">City</label>
                <input id="city" type="text" placeholder="Enter the city" />

                <label htmlFor="state">State</label>
                <select>
                  {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </select>

                <label htmlFor="zip-code">Zip Code</label>
                <input
                  id="zip-code"
                  type="number"
                  placeholder="Enter the zip-code"
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
                <label className="start-date" htmlFor="start-date">Start Date</label>
                <input id="start-date" type="date" name="start-date" />
                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Legal</option>
                </select>
                <button className="save-button">Save</button>
              </div>
            </div>
          </div>
          
        </form>
      </main>
    </>
  );
}

export default CreateEmployee;
