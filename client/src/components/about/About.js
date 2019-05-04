import React, { Component } from 'react';
import { Col,Row,Image,Container} from 'react-bootstrap'
import { yellow, green, blue } from '@material-ui/core/colors';
import "./About.css"
import Toolbar from "../../layout/Toolbar/Toolbar"
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
       fetch('/api/Users/tiq/BOA/')
      .then(res=>res.json())
      .then(BOAs=> this.setState({BOAs:BOAs.data},()=>console.log("fetched",BOAs)));
      //PHL 
      fetch('/api/Users/tiq/PHL/')
      .then(res=>res.json())
      .then(PHLs=> this.setState({PHLs : PHLs.data},()=>console.log("fetched",PHLs.data)));
      //OHL
      fetch('/api/Users/tiq/OHL/')
      .then(res=>res.json())
      .then(OHLs=> this.setState({OHLs : OHLs.data},()=>console.log("fetched",OHLs.data)));
      //DHL
      fetch('/api/Users/tiq/DHL/')
      .then(res=>res.json())
      .then(DHLs=> this.setState({DHLs : DHLs.data},()=>console.log("fetched",DHLs.data)));
      //MS
      fetch('/api/Users/tiq/MS/')
      .then(res=>res.json())
      .then(MS=> this.setState({MSs : MS.data},()=>console.log("fetched",MS.data)));
      ///.catch(console.log("cannot fetch"))
      //.then(MS=> this.setState({MS : MS.data},()=>console.log("fetched",MS.data)));
      //LS
      fetch('/api/Users/tiq/LS/')
      .then(res=>res.json())
      .then(LS=> this.setState({LSs : LS.data},()=>console.log("fetched",LS.data)));
      //FS
      fetch('/api/Users/tiq/FS/')
      .then(res=>res.json())
      .then(FS=> this.setState({FSs : FS.data},()=>console.log("fetched",FS.data)));
      //MDS
      fetch('/api/Users/tiq/MDS/')
      .then(res=>res.json())
      .then(MDS=> this.setState({MDSs : MDS.data},()=>console.log("fetched",MDS.data)));
      //RS
      fetch('/api/Users/tiq/RS/')
      .then(res=>res.json())
      .then(RS=> this.setState({RSs:RS.data},()=>console.log("fetched",RS.data)));
    }

    render(){
        // const BOAList= this.state.BOAs.map((BOA)=>{
        //     return(
        //         <Col xs={2} >
        //         <Image src={BOA.profilePicture}roundedCircle className="image1555" />
        //         <div className="center555">
        //         <h5 className="BOAname">{BOA.firstName} {BOA.lastName}</h5>
        //         </div>
               
        //         </Col>
        //         )
        //     })
        // const PHLList = this.state.PHLs.map((PHL)=>
        // {
        //     return(
        //         <Row xs={6} >
        //              <Col lg={true}>
        //              <Image src={PHL.profilePicture} roundedCircle className="image1555"/>
        //              <div className="center555">
        //             <h5 style={{color:yellow,textTransform:"uppercase"}}>{PHL.firstName} {PHL.lastName}</h5> 
        //             </div>
        //             </Col>
        //         </Row>
        //     )
        // })
        // const MSmember = this.state.MSs.map((MS)=>
        //  {
        //     return(
        //         <Col >
        //            <Image src={MS.profilePicture} roundedCircle className="image1555" />
        //            <div className="center555">
        //             <h5 style={{color:yellow}}>{MS.firstName} {MS.lastName}</h5>
        //             <h5>MARKETING</h5> 
        //             </div>
        //         </Col>
        //     )
        //  })
        // const OHLList = this.state.OHLs.map((OHL)=>
        // {
        //     return(
        //         <Row >
        //             <Col lg={true}>
        //            <Image src={OHL.profilePicture} roundedCircle className="image1555" />
        //            <div className="center555">
        //             <h5 style={{color:yellow,textTransform:"uppercase"}}>{OHL.firstName} {OHL.lastName}</h5> 
        //             </div>
        //             </Col>
        //         </Row>
        //     )
        // })
        // const DHLList = this.state.DHLs.map((DHL)=>
        // {
        //     return(
        //         <Col xs={3}>
        //            <Image src={DHL.profilePicture} roundedCircle className="image1555" />
        //            <div className="center555">
        //             <h5>{DHL.firstName} {DHL.lastName}</h5> 
        //            </div>
        //         </Col>
        //     )
        // })
    
    
    
        // const FSmember = this.state.FSs.map((FS)=>
        // {
        //      return(
        //         <Col >
        //         <Image  src={FS.profilePicture} roundedCircle className="image1555" />
            
        //          <h5 className="center555">{FS.firstName} {FS.lastName}</h5>
        //          <h5>FUNDRAISING</h5> 
               
        //         </Col>
        //      )
        // })
        
        // const LSmember = this.state.LSs.map((LS)=>
        // {
        //      return(
        //         <Col >
        //         <Image src={LS.profilePicture} roundedCircle className="image1555" />
        //         <div className="center555">
        //             <h5 >{LS.firstName} {LS.lastName}</h5> 
        //             <h5>CO-ORDINATION
        //              &LOGISTICS</h5>
        //         </div>
                
        //         </Col>
        //      )
        // })
        // const RSmember = this.state.RSs.map((RS)=>
        // {
        //      return(
        //         <Col>
        //         <Image src={RS.profilePicture} roundedCircle className="image1555" />
        //         <div className="center555">
        //          <h5>{RS.firstName} {RS.lastName}</h5>
        //          <h5>INVESTORS' 
        //              RELATION</h5> 
        //         </div>
        //      </Col>
        //      )
        // })
        // const LSFS = <Row>
        //                 <Col xs={6}>
        //                     {LSmember}
        //                 </Col> 
        //                 <Col xs={6}>
        //                     {RSmember}
                            
        //                 </Col>
        //             </Row>
        // const MDSmember = this.state.MDSs.map((MDS)=>
        // {
        //      return(
        //         <Col>
                
        //         <Image class="img-responsive" src={MDS.profilePicture} roundedCircle className="image1555" />
        //          <h5>{MDS.firstName} {MDS.lastName}</h5>
        //          <h5>MEDIA DESGIN</h5>
                 
        //        </Col>
        //      )
        // })
        
        // const MSRS = <Row>
        //                 <Col xs={6}>
        //                     {MSmember}
        //                 </Col> 
        //                 <Col xs={6}>
        //                 {FSmember}
        //                 </Col>
        //             </Row>
    
        return(
         <div>
   
       <Toolbar/>
    
    
            <div className="whole555"> 
    
                <h2 className="about555">First Worlds style debate club in Egypt and North Africa. Established and located in the German University in Cairo.
                </h2> 
                  
             {/* <Container className="V555">    */}
                <h1 className="visiontitle555">Our Vision</h1>
                <h2 className="vision555">"Achieving progress through effective communication and perpetually seeking knowledge"
    
                    We live in a world of diversity, diversity of culture, diversity of belief, diversity of thought. When we ask ourselves the important questions we reach many important conclusions but it is through constantly communicating with one another, constantly trying to understand and at the same time influence that we can together shape as satisfying a possible resolution.
    
                    TIQ is a debate club, where we strive to produce dialogue in it's most exciting form, up on stage, going head to head with other people. There is nothing more remarkable than the free flowing of words carrying ideas, ideas that prevail with the passion, steadiness and charisma of those who deliver them. If riveting debate is something you long to learn and participate in then here is your home.</h2>
                {/* </Container> */}
                {/* <div>
                    <h1 className="title555">OUR HIERARCHY</h1>
                </div>
                <div className="heirarchy555">
                    <div className="boatitle555">
                        <h1 >BOARD OF ADJUDICATORS</h1>
                    </div>
                    <Row className="BOAs555">
                        {BOAList}
                    </Row>
    
                <Container classname="container1555">
                    <Row>
                    <Col >
                        <Container className="phltitle555">
                        <h2 >PEGASUS HOUSE
                                LEADERS</h2>
                        </Container>
                    </Col>
                    <Col>
                        <Container className = "functiontitle555">
                        <h2 >FUNCTION SUPERVISOR</h2>
                        </Container>
                    </Col>
                    <Col>
                    <Container className="ohltitle555">
                    <h2 >ORION HOUSE</h2>
                        <h2> LEADERS</h2>
                    </Container>
                    </Col>
                    </Row> 
    
                    <Row>
                        <Col xs={1} className="PHLs555">
                            <Container id="PHLs555">
                            <Col lg={true}>
                            {PHLList}
                            </Col>
                            </Container>
                        </Col>
                        <Col xs={6}  className="super555">
                            <Container className="FSs555" >
                                <Container>
                                    {LSFS}     
                                </Container>
                                <Container>
                                    {MSRS}
                                </Container>
                                <Container classname = "center555">
                                    <Row>
                                    <Col >{MDSmember}</Col>
                                    </Row>  
                                </Container>
                            </Container>
                        </Col>
                        <Col xs={1} className="OHLs555">
                            <Container id="OHLs555">
                                <Col>
                                {OHLList}
                                </Col>
                            </Container>
                        </Col>
                    </Row>    
                </Container>
    
    
                    <Container className="dhltitle555">
                        <h1>DISCIPLES LEADERS</h1>
                    </Container>
                    <Container className= "dhls555">
                        <Row>
                            {DHLList}
                        </Row>
                    </Container>
            </div>       */}
            </div>   
            
         
         </div>
        )
        }
    }
    export default About  