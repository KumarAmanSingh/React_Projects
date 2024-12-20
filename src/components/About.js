import React, {useState} from 'react'

export default function About() {
 const [mystyle,setMystyle] = useState({
    color: 'white',
    backgroundColor:'black',
    border:"2px solid white"
})
const [btntext,setbtntext] =useState("Enable Light mode")
const  togglestyle=() =>{
  if(mystyle.color==='white'){
   setMystyle({
    color: 'black',
    backgroundColor:'white',
    border:"2px solid white"})
    setbtntext("Enable dark mode")
  }
  else{
    setMystyle({
     color: 'white',
    backgroundColor:'black',
    border:"2px solid white"
    })
    setbtntext("Enable light mode")
  }
}

  return (
    <>
    <div classNameName="container" style={mystyle}>
        <h1 classNameName="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="card"  style={mystyle}>
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left" style={mystyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" classNameName="collapse show"  aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card"  style={mystyle}>
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" style={mystyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" classNameName="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card"  style={mystyle}>
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed"  style={mystyle}  type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" classNameName="collapse"  aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
    </div>
    <div classNameName="container my-3">
         <button onClick={togglestyle} type="button" classNameName="btn btn-primary">{btntext}</button>
    </div>
    </>
  )
}
