// import React, { Component } from 'react';
// import "./Messages.css";
// import Navbar from '../component/Navbar';
// import SectionTitle from '../component/SectionTitle';
// import TableHeader from '../component/TableHeader';
// import view from "../assets/view.svg";

// import removeicon from "../assets/delete.svg";
// import { Link } from 'react-router-dom';



// const Messages = () => {
//     return ( 
//         <>
//          <div className='nabarwithmain'>
//         <Navbar/>
//         <div className='mainBar'>
           
//             <div className='titlewsearch width90'>
//             <SectionTitle Sectiontitle="Messages Management"/>

//             </div>
//          <input className='searchcont width90' type="text" name="" id="" placeholder='Search'  />
           
//                <div className='titlewsection2 titlewsection3'>
//             <div className='titlewsearch width90'>
//                 <SectionTitle textsize="24px" 
//                 Sectiontitle="All Messages"/>
                
//             </div>
// <div className='recentprojectsDiv'>
//     <div className='forfirstline marginleft90'>
//        <TableHeader tableheadertext="Sender"/>
//               <TableHeader tableheadertext="Email"/>

//               <TableHeader tableheadertext="Subject"/>
//        <TableHeader tableheadertext="Date Added"/>

//        <TableHeader tableheadertext="Actions"/>

//     </div>
//      <div className='forfirstline2 marginleft90'>
//       <p className='projectName'>Nadeen Yasser</p>
//             <p className='projectName'>NadYssr@gmail.com</p>
//               <p className='projectName padding2'>Collaboration Request</p>
//             <p className='projectName padding3'>Nov 22, 2025</p>
//        <div className='foractionbuttons2 projectName padding3'>
//                     <img src={view} alt="view icon" className='viewclass'    onClick={() => setShowModal(true)}/>

//                     <img src={removeicon} alt="delete icon" />

//               </div>


//     </div>
//       <div className='forfirstline2 marginleft90'>
//       <p className='projectName'>Nadeen Yasser</p>
//             <p className='projectName'>NadYssr@gmail.com</p>
//               <p className='projectName padding2'>Collaboration Request</p>
//             <p className='projectName padding3'>Nov 22, 2025</p>
//        <div className='foractionbuttons2 projectName padding3'>

//                     <img src={view} alt="view icon" className='viewclass' />
//                     <img src={removeicon} alt="delete icon" />

//               </div>


//     </div>  <div className='forfirstline2 marginleft90'>
//       <p className='projectName'>Nadeen Yasser</p>
//             <p className='projectName'>NadYssr@gmail.com</p>
//               <p className='projectName padding2'>Collaboration Request</p>
//             <p className='projectName padding3'>Nov 22, 2025</p>
//        <div className='foractionbuttons2 projectName padding3'>

//                     <img src={view} alt="view icon" className='viewclass' />
//                     <img src={removeicon} alt="delete icon" />

//               </div>


//     </div>  <div className='forfirstline2 marginleft90'>
//       <p className='projectName'>Nadeen Yasser</p>
//             <p className='projectName'>NadYssr@gmail.com</p>
//               <p className='projectName padding2'>Collaboration Request</p>
//             <p className='projectName padding3'>Nov 22, 2025</p>
//        <div className='foractionbuttons2 projectName padding3'>

//                     <img src={view} alt="view icon" className='viewclass' />
//                     <img src={removeicon} alt="delete icon" />

//               </div>


//     </div>
//       <div className='forfirstline2 marginleft90'>
//       <p className='projectName'>Nadeen Yasser</p>
//             <p className='projectName'>NadYssr@gmail.com</p>
//               <p className='projectName padding2'>Collaboration Request</p>
//             <p className='projectName padding3'>Nov 22, 2025</p>
//        <div className='foractionbuttons2 projectName padding3'>

//                     <img src={view} alt="view icon" className='viewclass' />
//                     <img src={removeicon} alt="delete icon" />

//               </div>


//     </div>  <div className='forfirstline2 marginleft90'>
//       <p className='projectName'>Nadeen Yasser</p>
//             <p className='projectName'>NadYssr@gmail.com</p>
//               <p className='projectName padding2'>Collaboration Request</p>
//             <p className='projectName padding3'>Nov 22, 2025</p>
//        <div className='foractionbuttons2 projectName padding3'>

//                     <img src={view} alt="view icon" className='viewclass' />
//                     <img src={removeicon} alt="delete icon" />

//               </div>


//     </div>  <div className='forfirstline2 marginleft90'>
//       <p className='projectName'>Nadeen Yasser</p>
//             <p className='projectName'>NadYssr@gmail.com</p>
//               <p className='projectName padding2'>Collaboration Request</p>
//             <p className='projectName padding3'>Nov 22, 2025</p>
//        <div className='foractionbuttons2 projectName padding3'>

//                     <img src={view} alt="view icon" className='viewclass' />
//                     <img src={removeicon} alt="delete icon" />

//               </div>


//     </div>
      
       
// </div>
//             </div>
//         </div>
            
//         </div>
        
        
        
        
        
//         </>
//      );
// }
 
// export default Messages;
import React, { useState } from 'react';
import "./Messages.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import TableHeader from '../component/TableHeader';
import view from "../assets/view.svg";
import removeicon from "../assets/delete.svg";
import MessageModal from "../pages/MessageModal"; 

const Messages = () => {

    const [showModal, setShowModal] = useState(false);

    return ( 
        <>
        <div className='nabarwithmain'>
            <Navbar/>
            <div className='mainBar'>
                <div className='titlewsearch width90'>
                    <SectionTitle Sectiontitle="Messages Management"/>
                </div>

                <input className='searchcont width90' type="text" placeholder='Search' />

                <div className='titlewsection2 titlewsection3'>
                    <div className='titlewsearch width90'>
                        <SectionTitle textsize="24px" Sectiontitle="All Messages"/>
                    </div>

                    <div className='recentprojectsDiv'>
                       
                        <div className='forfirstline marginleft90'>
                            <TableHeader tableheadertext="Sender"/>
                            <TableHeader tableheadertext="Email"/>
                            <TableHeader tableheadertext="Subject"/>
                            <TableHeader tableheadertext="Date Added"/>
                            <TableHeader tableheadertext="Actions"/>
                        </div>

                        <div className='forfirstline2 marginleft90'>
                            <p className='projectName'>Nadeen Yasser</p>
                            <p className='projectName'>NadYssr@gmail.com</p>
                            <p className='projectName padding2'>Collaboration Request</p>
                            <p className='projectName padding3'>Nov 22, 2025</p>

                            <div className='foractionbuttons2 projectName padding3'>
                                <img 
                                    src={view} 
                                    alt="view icon" 
                                    className='viewclass'
                                    onClick={() => setShowModal(true)}
                                />

                                <img src={removeicon} alt="delete icon" />
                            </div>
                        </div>
                                   <div className='forfirstline2 marginleft90'>
                            <p className='projectName'>Nadeen Yasser</p>
                            <p className='projectName'>NadYssr@gmail.com</p>
                            <p className='projectName padding2'>Collaboration Request</p>
                            <p className='projectName padding3'>Nov 22, 2025</p>

                            <div className='foractionbuttons2 projectName padding3'>
                                <img 
                                    src={view} 
                                    alt="view icon" 
                                    className='viewclass'
                                    onClick={() => setShowModal(true)}
                                />

                                <img src={removeicon} alt="delete icon" />
                            </div>
                        </div>           <div className='forfirstline2 marginleft90'>
                            <p className='projectName'>Nadeen Yasser</p>
                            <p className='projectName'>NadYssr@gmail.com</p>
                            <p className='projectName padding2'>Collaboration Request</p>
                            <p className='projectName padding3'>Nov 22, 2025</p>

                            <div className='foractionbuttons2 projectName padding3'>
                                <img 
                                    src={view} 
                                    alt="view icon" 
                                    className='viewclass'
                                    onClick={() => setShowModal(true)}
                                />

                                <img src={removeicon} alt="delete icon" />
                            </div>
                        </div>           <div className='forfirstline2 marginleft90'>
                            <p className='projectName'>Nadeen Yasser</p>
                            <p className='projectName'>NadYssr@gmail.com</p>
                            <p className='projectName padding2'>Collaboration Request</p>
                            <p className='projectName padding3'>Nov 22, 2025</p>

                            <div className='foractionbuttons2 projectName padding3'>
                                <img 
                                    src={view} 
                                    alt="view icon" 
                                    className='viewclass'
                                    onClick={() => setShowModal(true)}
                                />

                                <img src={removeicon} alt="delete icon" />
                            </div>
                        </div>           <div className='forfirstline2 marginleft90'>
                            <p className='projectName'>Nadeen Yasser</p>
                            <p className='projectName'>NadYssr@gmail.com</p>
                            <p className='projectName padding2'>Collaboration Request</p>
                            <p className='projectName padding3'>Nov 22, 2025</p>

                            <div className='foractionbuttons2 projectName padding3'>
                                <img 
                                    src={view} 
                                    alt="view icon" 
                                    className='viewclass'
                                    onClick={() => setShowModal(true)}
                                />

                                <img src={removeicon} alt="delete icon" />
                            </div>
                        </div>           <div className='forfirstline2 marginleft90'>
                            <p className='projectName'>Nadeen Yasser</p>
                            <p className='projectName'>NadYssr@gmail.com</p>
                            <p className='projectName padding2'>Collaboration Request</p>
                            <p className='projectName padding3'>Nov 22, 2025</p>

                            <div className='foractionbuttons2 projectName padding3'>
                                <img 
                                    src={view} 
                                    alt="view icon" 
                                    className='viewclass'
                                    onClick={() => setShowModal(true)}
                                />

                                <img src={removeicon} alt="delete icon" />
                            </div>
                        </div>

                      
                    </div>
                </div>
            </div>
        </div>

        {/* MODAL */}
        {showModal && <MessageModal onClose={() => setShowModal(false)} />}

        </>
    );
}

export default Messages;
