
import React, { Component } from "react";
import Search from "../search"
import {Saved, SavedList} from "../saved"
import API from "../../utils/API.js";
import {List, ListItem} from "../list"
//import saveButton from "../saveButton"

class Main extends Component{
      
state = {
    searchPhrase: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: [],
    b_date: "",
    e_date: ""
  };

  componentDidMount(){
      this.loadArticles();
  }
  searchArticles = (query,start,end) => {
      API.search(query,start,end)
      .then(res => this.setState({articles: res.data.response.docs}))
      .catch(err => console.log(err));

  };
  handleInputChange = event =>{
      const value = event.target.value
      const name = event.target.name;
      this.setState({
          [name]: value
      });
    };
  
  
  handleFormSubmit = event => {
    event.preventDefault();
    function isValidDate(dateString){
      // First check for the pattern
    var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
 
     if(!regex_date.test(dateString))
     {
         return false;
     }
 
     // Parse the date parts to integers
     var parts   = dateString.split("-");
     var day     = parseInt(parts[2], 10);
     var month   = parseInt(parts[1], 10);
     var year    = parseInt(parts[0], 10);
 
     // Check the ranges of month and year
     if(year < 1000 || year > 3000 || month == 0 || month > 12)
     {
         return false;
     }
 
     var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
 
     // Adjust for leap years
     if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
     {
         monthLength[1] = 29;
     }
 
     // Check the range of the day
     return day > 0 && day <= monthLength[month - 1];
      }
    

    if (this.state.startYear.length === 0 ||  this.state.endYear.length === 0){
      this.searchArticles(this.state.searchPrase);
    }
    console.log((isValidDate(this.state.startYear)));
    if (isValidDate(this.state.startYear) && isValidDate(this.state.endYear)){
      console.log('test');
        this.searchArticles(this.state.searchPhrase,this.state.startYear,this.state.endYear);
      }
      else {
        alert("invalid entry, dates must be in 'YYYYMMDD' format");
  }
  
};
  loadArticles=()=>{
    API.getArticles()
    .then(res=>{this.setState({saved: res.data})})
  }

  handleSave = (headline, href) => {
    API.saveArticle({
     title: headline,
      url: href
    })
    .then(res=> this.loadArticles())
    .catch(err=> console.log(err));
  };
  handleDelete = (id) => {
    API.deleteArticle(id)
      .then(res=>this.loadArticles())
      .catch(err=> console.log(err));

    };
  render() {
    return (
        <div>
        <div className="container">
    <div className="jumbotron" style={{backgroundColor: "#20315A", color: "white"}}>
      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
    </div>
    
    {/* <!-- Row for Searching New York Times --> */}
    <div className="row">
      <div className="col-sm-12">
        <br></br>
        {/* <!-- First panel is for handling the search parameters --> */}
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
          </div>
          <div className="panel-body">
            <Search 
            value = {this.state.searchPhrase}
            handleInputChange= {this.handleInputChange}
            handleFormSubmit= {this.handleFormSubmit}
            />
          </div>
        </div>
    </div>
    </div>
    {/* <!-- This row will handle all of the retrieved articles --> */}
    <div className="row">
      <div className="col-sm-12">
        <br></br>

        {/* <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved --> */}
        <div className="panel panel-primary">

          {/* <!-- Panel Heading for the retrieved articles box --> */}
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
          </div>

          {/* <!-- This main panel will hold each of the resulting articles --> */}
          <div className="panel-body" id="well-section">
          {this.state.articles.length ? (
            <List>
          {this.state.articles.map(docs => {
            return (
              <ListItem
              key= {docs._id}
              headline= {docs.headline.print_headline || docs.headline.main}
              story = {docs.snippet}
              href= {docs.web_url}
              onClick={()=>this.handleSave(docs.headline.print_headline || docs.headline.main,docs.web_url)}
              /> 
          );
              })}
            </List>
            ):(
             <h1 className="text-center">No Articles to Display</h1>
            )}
            
          </div>
        </div>
     </div>
    </div>

    {/* <!-- This row will handle all of the retrieved articles --> */}
    <div className="row">
      <div className="col-sm-12">
        <br></br>

        {/* <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved --> */}
        <div className="panel panel-primary">

          {/* <!-- Panel Heading for the retrieved articles box --> */}
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i>Saved Articles</strong></h3>
          </div>

          {/* <!-- This main panel will hold each of the resulting articles --> */}
          <div className="panel-body" id="well-section">
          {this.state.saved.length ? (
            <SavedList>
          {this.state.saved.map(docs => {
            return (
              <Saved
              key= {docs._id}
              headline= {docs.title}
              href= {docs.url}
              onClick={()=>this.handleDelete(docs._id)}  
              /> 
          );
              })}
            </SavedList>
            ):(
             <h1 className="text-center">No Saved Articles</h1>
            )}
            
          </div>
        </div>
     </div>
    </div>





  </div>
</div>
    );
  }
}
export default Main;