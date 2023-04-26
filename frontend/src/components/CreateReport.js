import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as emailjs from "emailjs-com"


export default class CreateReport extends Component {

   constructor(props){
        super(props);
        this.state={
            name:"",
            nic:"",
            age:"",
            sex:"",
            type:"",
            result:"",
            date:"",
            status:"",

            nameerr:"",
            nicerr:"",
            ageerr:"",
            typeerr:"",
            resulterr:"",
            dateerr:"",
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    validate = () => {

      let nameerr = "";
      let nicerr="";
      let ageerr="";
      let typeerr="";
      let resulterr="";
      let dateerr="";

      //pattern = "/^[0]\[0-9]{9}$/"

      if (!this.state.name){
        nameerr = "Name cannot be blank";
      }
      if (!this.state.nic){
        nicerr = "NIC cannot be blank";
      }
      if (!this.state.age){
        ageerr = "Age cannot be blank";
      }
      if (!this.state.type){
        typeerr = "Type cannot be blank";
      }
      if (!this.state.result){
        resulterr = "Result cannot be blank";
      }
      if (!this.state.date){
        dateerr = "Date cannot be blank";
      }

      if (nameerr || nicerr || ageerr || typeerr ||resulterr || dateerr ){
          this.setState({nameerr,nicerr,ageerr,typeerr,resulterr,dateerr });
          return false;
      } 

      return true;
  };





    onSubmit = (e) =>{

        e.preventDefault();
        

        const isValid = this.validate();
        if (isValid) {

        const {name,nic,age,sex,type,result,date,status} = this.state;

        const data = {
            name:name,
            nic:nic,
            age:age,
            sex:sex,
            type:type,
            result:result,
            date:date,
            status:status
        }

        console.log(data);

        axios.post("/lab/save",data).then((res) =>{
            if(res.data.success){
              //alert("Report Added Successfully !!")
              Swal.fire(
                'Added !!',
                'Report Added Successfully !!',
                'success'
              )

                this.setState(
                    {
                        name:"",
                         nic:"",
                         age:"",
                         sex:"",
                        type:"",
                         result:"",
                         date:"",
                        status:"",


                        nameerr:"",
                        nicerr:"",
                        ageerr:"",
                        typeerr:"",
                        resulterr:"",
                        dateerr:"",
                    }
                )
            }
        })

    }
  }

    render() {
        return (
            <div>
              
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />



	<link type="text/css" rel="stylesheet" href="css/labstyle.css" />


  <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            
          <a className="navbar-brand" href="/labhome" style={{fontSize:34,}}><b> <span class="fa fa-vial" aria-hidden="false">  SAKURA Laboratory</span> </b></a>
          <a className="btn navbar-btn btn-danger navbar-right" href="/">Logout</a>


          
          </div>
          </nav>



              <div id="lab" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="lab-form">
						<div class="form-header">
							<h1>Create Report</h1>
						</div>
					
           
              <form className="needs-validation" noValidate>
                
  <div class="mb-3">
    <label for="name" class="form-label">Patient Name</label>
    <input type="text" class="form-control" name="name" required
     value={this.state.name} 
     pattern="[a-z A-Z.]+"
     onChange={this.handleInputChange} 
     placeholder="Enter Patient Name"
    /> 
  </div>
  {this.state.nameerr ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.nameerr}</div> ) : null}



  <div class="mb-3">
    <label for="nic" class="form-label">NIC</label>
    <input type="text" class="form-control" name="nic" required
     value={this.state.nic} onChange={this.handleInputChange} 
     placeholder="Enter Patient NIC"
    /> 
  </div>
  {this.state.nicerr ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.nicerr}</div> ) : null}


  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <input type="number" class="form-control" name="age" required
     value={this.state.age} onChange={this.handleInputChange} 
     placeholder="Enter Patient Age"
    /> 
  </div>
  {this.state.ageerr ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.ageerr}</div> ) : null}

  <span class="form-label">Sex</span>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="sex" id="male" required
  value="Male" onChange={this.handleInputChange}
  />
  <label class="form-check-label" for="male">
    Male
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="sex" id="female" 
  value="Female" onChange={this.handleInputChange}
  />
  <label class="form-check-label" for="female">
    Female
  </label>
</div>

  <div class="mb-3">
    <label for="type" class="form-label">Type</label>
    <input type="text" class="form-control" name="type" required
     value={this.state.type} onChange={this.handleInputChange} 
     placeholder="Enter Test Type"

    /> 
  </div>
  {this.state.typeerr ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.typeerr}</div> ) : null}

  <div class="mb-3">
    <label for="result" class="form-label">Result</label>
    <input type="text" class="form-control" name="result" required
     value={this.state.result} onChange={this.handleInputChange} 
     placeholder="Enter Result(Metrics)"
    /> 
  </div>
  {this.state.resulterr ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.resulterr}</div> ) : null}

  <div class="mb-3">
    <label for="date" class="form-label">Date</label>
    <input type="date" class="form-control" name="date" required
     value={this.state.date} onChange={this.handleInputChange} 
     placeholder="Enter Date"
    />
  </div>
  {this.state.dateerr ? (<div style={{ fonysize:12, color:"red", paddingBottom:"5px", paddingLeft:"150px"}}>{this.state.dateerr}</div> ) : null}

  <span class="form-label">Status</span>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="status" id="good" required
   value="Good" onChange={this.handleInputChange}
  />
  <label class="form-check-label" for="good">
    Good
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="status" id="bad"
  value="Bad" onChange={this.handleInputChange}
  />
  <label class="form-check-label" for="bad">
    Bad
  </label>
</div>

<div>
<button className="submit-btn" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
    <i className="far fa-check-squar"></i>
    &nbsp; Save
</button>
</div>

</form>

<button

className="primary"

onClick={(e) => {

  this.setState(
    {
        name:"Darmasena Senanayake",
         nic:"6906678654V",
         age:"52",
        sex:"Male",
        type:"Blood Sugar",
         result:"140 mg/dL",
         date:"2021-10-05",
        status:"Bad",
    }
  )}}

>

Demo

</button>


						
					</div>
				</div>
			</div>
		</div>
	</div>



            </div>
            </div>
            
        );
    }
}