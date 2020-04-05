import React, { Component } from "react";
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/venobox/venobox.css';
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import './assets/vendor/aos/aos.css';
import './assets/css/style.css';
import './App.css';
import './assets/css/Subscription.css'
import './assets/css/responsive.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/Animate.css'
import CreditPackage from './CreditPackage'
class App extends React.Component
 {
   constructor()
   {
     super();
     this.state={
      AllCreditPackages:[
        {
          Color:"#f39834",
          PackageName:"Free",
          StrikedOffPrice:"-",
          ActualPrice:"-",
          Customers:"-",
          SubBrokers:"-",
          Analyst:"-",
          Report:"-",
          Telegram:"-",
          Calls:"150",
          TelegramSupport:"No"
        },
        {
          MainIcon:"fas fa-broadcast-tower fa-3x",
          SubIcon:"fas fa-rupee-sign fa-3x mt-2",
          Color:"#1890ff",
          PackageName:"Basic",
          StrikedOffPrice:"25000",
          ActualPrice:"19999",
          Customers:"0-1",
          SubBrokers:"0-1",
          Analyst:"0-1",
          Report:"Unlimited",
          Telegram:"3",
          Calls:"300",
          TelegramSupport:"Yes"
        },
        { 
          MainIcon:"fab fa-keycdn fa-3x",
          SubIcon:"fas fa-rupee-sign fa-3x mt-2",
          Color:"#ff6961",
          PackageName:"Silver",
          StrikedOffPrice:"50000",
          ActualPrice:"35000",
          Customers:"0-3",
          SubBrokers:"0-3",
          Analyst:"0-3",
          Report:"Unlimited",
          Telegram:"3",
          Calls:"450",
          TelegramSupport:"Yes"
        },
        {
          MainIcon:"fas fa-rocket fa-3x",
          SubIcon:"fas fa-rupee-sign fa-3x mt-2",
          Color:"#00b5b8",
          PackageName:"Gold",
          StrikedOffPrice:"95000",
          ActualPrice:"60000",
          Customers:"0-5",
          SubBrokers:"0-5",
          Analyst:"0-5",
          Report:"Unlimited",
          Telegram:"5",
          Calls:"750",
          TelegramSupport:"Yes"
        },
        {
          MainIcon:"fas fa-pizza-slice fa-3x",
          SubIcon:"fas fa-rupee-sign fa-3x mt-2",
          Color:"#b48fd9",
          PackageName:"Platinum",
          StrikedOffPrice:"120000",
          ActualPrice:"95000",
          Customers:"0-3",
          SubBrokers:"0-3",
          Analyst:"0-3",
          Report:"Unlimited",
          Telegram:"3",
          Calls:"10000",
          TelegramSupport:"Yes"
        },
        {
          MainIcon:"fas fa-globe fa-3x",
          SubIcon:"fas fa-rupee-sign fa-3x mt-2",
          Color:"#01579b",
          PackageName:"Broker",
          StrikedOffPrice:"1500000",
          ActualPrice:"1000000",
          Customers:"Unlimited",
          SubBrokers:"Unlimited",
          Analyst:"Unlimited",
          Report:"Unlimited",
          Telegram:"Unlimited",
          Calls:"Unlimited",
          TelegramSupport:"Yes"
        }
      ],
      ScreenWidth:0,
      AllowedCards:3,
      Slide:1
     }
   }

   componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
    // this.ScrollCredit()
    }

    ScrollCredit=()=>{
      var nyedva = document.getElementById('credit');
      nyedva.scrollLeft = 500;
    }

    resize=()=> {
      this.setState({ScreenWidth: window.innerWidth},()=>{
        console.log(this.state.ScreenWidth)
        const{AllCreditPackages,NoOfCards,NoOfSlides}=this.state
        if(this.state.ScreenWidth > 1400 && this.state.ScreenWidth < 2000)
        {
          this.setState({AllowedCards:3})
          this.setState({Slide:1})
        }
        else if(this.state.ScreenWidth > 700 && this.state.ScreenWidth < 1400)
        {
          this.setState({AllowedCards:2})
          this.setState({Slide:1})
        }
        else if(this.state.ScreenWidth > 300 && this.state.ScreenWidth < 700)
        {
          this.setState({AllowedCards:1})
          this.setState({Slide:1})
        }
      });
    }
   render()
   {
      

      let showCreditPackages=this.state.AllCreditPackages.map((result,index)=>{
      return(
        <CreditPackage CreditInfo={result} index={index + 1} CreditLength={this.state.AllCreditPackages.length} AllowedCards={this.state.AllowedCards} Slide={this.state.Slide}/>
      )
    })
    return (
      <div>
        
        
        <header id="header" style={{background:"white",color:"#ccc"}}>
        <div className="container d-flex">
    
          <div className="mr-auto" style={{overflow:'hidden',width:'50px'}}>
            <img className="w-100 h-100" src={require('./assets/img/mwisr-logo.jpg')}></img>
          </div>
    
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active"><a href="index.html"  style={{color:"black"}}>Home</a></li>
              <li><a href="#about" style={{color:"black"}}>About Us</a></li>
              <li><a href="#cta" style={{color:"black"}}>Notify Me</a></li>
              <li><a href="#services" style={{color:"black"}}>Services</a></li>
              <li><a href="#pricing" style={{color:"black"}}>Pricing</a></li>
              <li><a href="https://portal.mwisr.com" style={{color:"black"}}>Login</a></li>
              <li><a href="https://portal.mwisr.com" style={{color:"black"}}>Register</a></li>
              <li><a href="#contact" style={{color:"black"}}>Contact Us</a></li>
    
            </ul>
          </nav>
    
        </div>
      </header>
    
      <section id="hero">
        <div className="hero-container" data-aos="fade-up">
          <h1>Welcome to Mwisr</h1>
          <h2>Enim quis est voluptatibus aliquid consequatur fugiat</h2>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
      </section>
    
      <section id="about" className="about">
          <div className="container">
    
            <div className="row">
              <div className="col-xl-6 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="zoom-in">
                <a href="https://www.youtube.com/watch?v=nFgXVlYIQ-s" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
              </div>
    
              <div className="col-xl-6 col-lg-6 d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <div className="box-heading" data-aos="fade-up">
                  <h4>About us</h4>
                  <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                  <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
                </div>
    
                <div className="icon-box" data-aos="fade-up">
                  <div className="icon"><i className="bx bx-fingerprint"></i></div>
                  <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
    
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon"><i className="bx bx-gift"></i></div>
                  <h4 className="title"><a href="">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
    
                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon"><i className="bx bx-atom"></i></div>
                  <h4 className="title"><a href="">Dine Pad</a></h4>
                  <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                </div>
    
              </div>
            </div>
    
          </div>
        </section>
    
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
    
            <div class="text-center">
              <h3>Notify Me</h3>
              <div className="row my-5">
                <div className="col-xl-3 text-left">
                  <label><p className="mb-0">First Name:</p></label>
                  <input type="text" className="form-control" placeholder="Please Enter Your First Name"></input>
                </div>
                <div className="col-xl-3 text-left">
                  <label><p className="mb-0">Last Name:</p></label>
                  <input type="text" className="form-control" placeholder="Please Enter Your Last Name"></input>
                </div>
                <div className="col-xl-3 text-left">
                  <label><p className="mb-0">Email:</p></label>
                  <input type="text" className="form-control" placeholder="Please Enter Your Email"></input>
                </div>
                <div className="col-xl-3 text-left">
                  <label><p className="mb-0">User Typer:</p></label>
                  <select type="text" className="form-control" placeholder="Select User Type">
                    <option>Broker</option>
                    <option>Research House</option>
                    <option>Independent Analyst</option>
                  </select>
                </div>
              </div>
              <a class="cta-btn" href="#">Notify Me</a>
            </div>
          </div>
        </section>
    
        <section id="services" className="services">
          <div className="container">
    
            <div className="section-title" data-aos="zoom-in">
              <h2>Features</h2>
              <h3>Our <span>Features</span></h3>
            </div>
    
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box text-center" data-aos="zoom-in">
                  <div className="w-100 d-flex mb-4" style={{justifyContent:'center'}}>
                    <div style={{width:'35px',height:'35px',overflow:'hidden'}}>
                      <img className="h-100 w-100" src={require('./assets/img/monitor2.png')}/>
                    </div>
                  </div>
                  <h4><a href="">CRM System</a></h4>
                  <ul>
                    <li style={{textAlign:'left'}}>A Central System To handle Sub-Brokers,Customers and Analysts.</li>
                  </ul>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                  
                  <div className="w-100 d-flex mb-4" style={{justifyContent:'center'}}>
                    <div style={{width:'35px',height:'35px',overflow:'hidden'}}>
                      <img className="h-100 w-100" src={require('./assets/img/money109.png')}/>
                    </div>
                  </div>
    
                  <h4><a href="">Real Time Tracking</a></h4>
                  <ul>
                    <li style={{textAlign:'left'}}>Track Calls in Real-Time for Equity,F{'&'}O and Commodity segments,along with 50 + option Strategies.</li>
                  </ul>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                  
                  <div className="w-100 d-flex mb-4" style={{justifyContent:'center'}}>
                    <div style={{width:'35px',height:'35px',overflow:'hidden'}}>
                      <img className="h-100 w-100" src={require('./assets/img/graph.png')}/>
                    </div>
                  </div>
    
                  <h4><a href="">MIS Reports</a></h4>
                  <ul>
                    <li style={{textAlign:'left'}}><p>Internal and External advisory team performance in comparision with industry</p></li>
                  </ul>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                  
                  <div className="w-100 d-flex mb-4" style={{justifyContent:'center'}}>
                    <div style={{width:'35px',height:'35px',overflow:'hidden'}}>
                      <img className="h-100 w-100" src={require('./assets/img/filled10.png')}/>
                    </div>
                  </div>
    
                  <h4><a href="">Report Repository</a></h4>
                  <ul>
                    <li style={{textAlign:'left'}}><p>Centralized repository to organize and track the fundamental reports only for your own company</p></li>
                  </ul>
                
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                  
                  <div className="w-100 d-flex mb-4" style={{justifyContent:'center'}}>
                    <div style={{width:'35px',height:'35px',overflow:'hidden'}}>
                      <img className="h-100 w-100" src={require('./assets/img/safebox.png')}/>
                    </div>
                  </div>
    
                  <h4><a href="">Secure Customer Data</a></h4>
                  <ul>
                    <li style={{textAlign:'left'}}><p>Protect Customer Data while providing advisory call via WhatsApp or Telegram</p></li>
                  </ul>
                  
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
                  
                  <div className="w-100 d-flex mb-4" style={{justifyContent:'center'}}>
                    <div style={{width:'35px',height:'35px',overflow:'hidden'}}>
                      <img className="h-100 w-100" src={require('./assets/img/chart44.png')}/>
                    </div>
                  </div>
    
                  <h4><a href="">Increase Revenue</a></h4>
                  <ul>
                    <li style={{textAlign:'left'}}>Risk profile based Calls.</li>
                    <li style={{textAlign:'left'}}>Sell SEBI Registered Advisory to your Customers.</li>
                    <li style={{textAlign:'left'}}>Call To Trade Feature.</li>
                  </ul>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
    
                  <div className="w-100 d-flex mb-4" style={{justifyContent:'center'}}>
                    <div style={{width:'35px',height:'35px',overflow:'hidden'}}>
                      <img className="h-100 w-100" src={require('./assets/img/smartphone.png')}/>
                    </div>
                  </div>
                 
                  <h4><a href="">Instant Notification</a></h4>
                  <ul>
                    <li style={{textAlign:'left'}}>Instant Automated notification on targets,book profits and stoploss with ROI.</li>
                    <li style={{textAlign:'left'}}>Automatic Telegram Updates</li>
                  </ul>
                </div>
              </div>
    
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="500">
                  
                  <div className="w-100 d-flex mb-4" style={{justifyContent:'center'}}>
                    <div style={{width:'35px',height:'35px',overflow:'hidden'}}>
                      <img className="h-100 w-100" src={require('./assets/img/presentor.png')}/>
                    </div>
                  </div>
    
                  <h4><a href="">Branded Application</a></h4>
                  <ul>
                    <li style={{textAlign:'left'}}>Showcase your branded verified profile and performance to attract new Customers.</li>
                  </ul>
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
    
        <section id="pricing" class="pricing" style={{backgroundColor:"#FAFAFA"}}>
    
            <div class="section-title" data-aos="zoom-in">
              <h2>Pricing</h2>
              <h3>Check our <span>Pricing</span></h3>
            </div>

            {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row p-2">
                    {showCreditPackages} 
                  </div>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="..." alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="..." alt="Third slide" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div> */}
            <div className="row">
              <div className="col-xl-2 d-flex justify-content-center align-items-center">
                <i class="fas fa-arrow-circle-left fa-3x" onClick={()=>{
              if((this.state.Slide - 1) * this.state.AllowedCards > 0)
              this.setState({Slide:this.state.Slide-1})}}></i>
              </div>
              <div className="col-xl-8">
                <div className="row px-5">
                  {showCreditPackages}
                </div>
              </div>
              <div className="col-xl-2 d-flex justify-content-center align-items-center">
                <i class="fas fa-arrow-circle-right fa-3x" onClick={()=>{
              if((this.state.Slide + 1) * this.state.AllowedCards <= this.state.AllCreditPackages.length)
              this.setState({Slide:this.state.Slide+1})}}></i>
              </div>
            </div>
         
        </section>
      </div>
    
      );
    
   }
 }

export default App;


// <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>