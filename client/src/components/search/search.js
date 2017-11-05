
import React from "react";

const Search = props =>
<div>
    {/* <!-- Here we create an HTML Form for handling the inputs--> */}
    <form>

        {/* <!-- Here we create the text box for capturing the search term--> */}
        <div className="form-group">
        <label htmlFor="search">Search Term:</label>
        <input type="text" className="form-control" id="search-term"
        value = {props.searchPhrase} 
        onChange= {props.handleInputChange}
        name="searchPhrase" />
        </div>


        {/* <!-- Here we capture the Start Year Parameter--> */}
        <div className="form-group">
        <label htmlFor="start-year">Start Year (Optional) Format YYYY-MM-DD:</label>
        <input type="text" className="form-control" id="start-year"
        value = {props.startYear} 
        onChange= {props.handleInputChange}
        name="startYear"/>
        </div>

        {/* <!-- Here we capture the End Year Parameter --> */}
        <div className="form-group">
        <label htmlFor="end-year">End Year (Optional)  Format YYYY-MM-DD:</label>
        <input type="text" className="form-control" id="end-year"
        value = {props.endYear} 
        onChange= {props.handleInputChange}
        name="endYear"/>
        </div>

        {/* <!-- Here we have our final submit button --> */}
        <button onClick={props.handleFormSubmit}type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search">
       </i> Search</button>
        

    </form>
</div>;
export default Search;