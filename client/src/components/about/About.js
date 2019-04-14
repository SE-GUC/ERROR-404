import React, { Component } from 'react';
import { Col,Row,Image,Container} from 'react-bootstrap'
import { yellow, green, blue } from '@material-ui/core/colors';
import "./About.css"
class About extends Component { 
      state = {
         BOAs : [],
         PHLs : [],
         OHLs : [],
         MSs : [],
         FSs :[],
         LSs:[],
         MDSs :[],
         RSs :[],
         DHLs : []
      }
  
    

    componentDidMount()
    {
       //BOAS
       fetch('http://localhost:5000/api/Users/tiq/BOA')
      .then(res=>res.json())
      .then(BOAs=> this.setState({BOAs:BOAs.data},()=>console.log("fetched",BOAs)));
      //PHL 
      fetch('http://localhost:5000/api/Users/tiq/PHL')
      .then(res=>res.json())
      .then(PHLs=> this.setState({PHLs : PHLs.data},()=>console.log("fetched",PHLs.data)));
      //OHL
      fetch('http://localhost:5000/api/Users/tiq/OHL')
      .then(res=>res.json())
      .then(OHLs=> this.setState({OHLs : OHLs.data},()=>console.log("fetched",OHLs.data)));
      //DHL
      fetch('http://localhost:5000/api/Users/tiq/DHL')
      .then(res=>res.json())
      .then(DHLs=> this.setState({DHLs : DHLs.data},()=>console.log("fetched",DHLs.data)));
      //MS
      fetch('http://localhost:5000/api/Users/tiq/MS')
      .then(res=>res.json())
      .then(MS=> this.setState({MSs : MS.data},()=>console.log("fetched",MS.data)));
      ///.catch(console.log("cannot fetch"))
      //.then(MS=> this.setState({MS : MS.data},()=>console.log("fetched",MS.data)));
      //LS
      fetch('http://localhost:5000/api/Users/tiq/LS')
      .then(res=>res.json())
      .then(LS=> this.setState({LSs : LS.data},()=>console.log("fetched",LS.data)));
      //FS
      fetch('http://localhost:5000/api/Users/tiq/FS')
      .then(res=>res.json())
      .then(FS=> this.setState({FSs : FS.data},()=>console.log("fetched",FS.data)));
      //MDS
      fetch('http://localhost:5000/api/Users/tiq/MDS')
      .then(res=>res.json())
      .then(MDS=> this.setState({MDSs : MDS.data},()=>console.log("fetched",MDS.data)));
      //RS
      fetch('http://localhost:5000/api/Users/tiq/RS')
      .then(res=>res.json())
      .then(RS=> this.setState({RSs:RS.data},()=>console.log("fetched",RS.data)));
    }

    render(){
    const BOAList= this.state.BOAs.map((BOA)=>{
        return(
            <Col xs={6} md={4}>
            <Image src={BOA.profilePicture}thumbnail className="image1" />
            <h5 className="BOAname">{BOA.firstName} {BOA.lastName}</h5>
            </Col>
            )
        })
    const PHLList = this.state.PHLs.map((PHL)=>
    {
        return(
            <Row xs={6} md={4}>
                 
                 <Image src={PHL.profilePicture} className="image1"/>
                <h5 style={{color:yellow,textTransform:"uppercase"}}>{PHL.firstName} {PHL.lastName}</h5> 
            </Row>
        )
    })
    const MSmember = this.state.MSs.map((MS)=>
     {
        return(
            <Row xs={6} md={4}>
               <Image src={MS.profilePicture} className="image1" />
                <h5 style={{color:yellow,textTransform:"uppercase"}}>{MS.firstName} {MS.lastName}</h5>
                <h4>MARKETING</h4> 
            </Row>
        )
     })
    const OHLList = this.state.OHLs.map((OHL)=>
    {
        return(
            <Row xs={6} md={4}>
               <Image src={OHL.profilePicture} className="image1" />
                <h5 style={{color:yellow,textTransform:"uppercase"}}>{OHL.firstName} {OHL.lastName}</h5> 
            </Row>
        )
    })
    const DHLList = this.state.DHLs.map((DHL)=>
    {
        return(
            <Col xs={6} md={4}>
               <Image src={DHL.profilePicture} className="image1" />
            
                <h5 style={{color:yellow,textTransform:"uppercase"}}>{DHL.firstName} {DHL.lastName}</h5> 
            </Col>
        )
    })



    const FSmember = this.state.FSs.map((FS)=>
    {
         return(
            <Col xs={6} md={4}>
            <Image src={FS.profilePicture} className="image1" />
             <h5>{FS.firstName} {FS.lastName}</h5>
             <h4>FUNDRAISING</h4> 
            </Col>
         )
    })
    
    const LSmember = this.state.LSs.map((LS)=>
    {
         return(
            <Col xs={6} md={4}>
            <Image src={LS.profilePicture} className="image1" />
             <h5>{LS.firstName} {LS.lastName}</h5> 
             <h4>CO-ORDINATION&LOGISTICS</h4>
         </Col>
         )
    })
   
    const MDSmember = this.state.MDSs.map((MDS)=>
    {
         return(
            <Col xs={6} md={4}>
            <Image src={MDS.profilePicture} className="image1" />
             <h5>{MDS.firstName} {MDS.lastName}</h5>
             <h4>MEDIA DESGIN</h4> 
         </Col>
         )
    })
    const RSmember = this.state.RSs.map((RS)=>
    {
         return(
            <Col xs={6} md={4}>
            <Image src={RS.profilePicture} className="image1" />
             <h5>{RS.firstName} {RS.lastName}</h5>
             <h4>INVESTORS' RELATION</h4> 
         </Col>
         )
    })

    return(
    <div className="whole"> 
          <div className="boatitle">
            <h1 >BOARD OF ADJUDICATORS</h1>
          </div>
          <div>
              {BOAList}
          </div>
        <Container id="phltitle">
          <h2 style={{color:blue}}>PEGASUS HOUSE LEADERS</h2>
        </Container>
        <Container id="PHLs">
            <Col>
            {PHLList}
            </Col>
        </Container>
        <div id = "functiontitle">
           <h2 >FUNCTION SUPERVISOR</h2>
        </div>
        <Container id="FSs">
        <Row>
         <Col>{MSmember}</Col>
         <Col>{FSmember}</Col>
         <Col>{LSmember}</Col>
         <Col>{RSmember}</Col>
         <Col>{MDSmember}</Col>
         </Row>  
        </Container>
        <Container id="ohltitle">
          <h2 style={{color:green}}>ORION HOUSE LEADERS</h2>
        </Container>
        <Container id="OHLs">
            <Col>
            {OHLList}
            </Col>
        </Container>
        <Container id="dhltitle">
            <h1 style={{color:yellow}}>DISCIPLES LEADERS</h1>
        </Container>
        <Container id= "dhls">
            <Row>
                {DHLList}
            </Row>
        </Container>
    </div>
    )
    }
}
export default About 