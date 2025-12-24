
import React, { useEffect, useState } from 'react';
import "./Messages.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import TableHeader from '../component/TableHeader';
import view from "../assets/view.svg";
import removeicon from "../assets/delete.svg";
import MessageModal from "../pages/MessageModal"; 
import { supabase } from '../Supabase';
import { Link, useParams } from 'react-router-dom';


const Messages = (params) => {
    const { id } = useParams();

    const [showModal, setShowModal] = useState(false);
     const [loading, setLoading] = useState(true);
            const [messages, setMessages] = useState("");
      
            useEffect(()=>{
                  async function callGetAPI2(){
                        const res = await supabase.from("Messages").select("*");
                        setMessages(res.data);
                        // console.log(res);
                        setLoading(false);
                  }
                  callGetAPI2();
            },[]);
            async function deleteRow(id){
                const res = await supabase.from("Messages").delete().eq("id",id);
                console.log(res)
            }
            if (loading) return <p>Loading...</p>;

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

                      
                                            

                         {
      messages.map((message)=>{
        let pathLink = "/msg-details/"+message.id;
            return    <div className='forfirstline2 marginleft90'>
                <Link to={pathLink}>{message.id}</Link>
                            <p className='projectName'>{message.Sender}</p>
                            <p className='projectName'>{message.Email}</p>
                            <p className='projectName padding2'>{message.Subject}</p>
                            <p className='projectName padding3'>{message.date_received}</p>
                            {/* <button onClick={()=>deleteRow(message.id)}>delete</button> */}

                            <div className='foractionbuttons2 projectName padding3'>
                                
                                <img 
                                    src={view} 
                                    alt="view icon" 
                                    className='viewclass'
                                    onClick={() => setShowModal(true)}
                                />
<button onClick={()=>deleteRow(message.id)}>

                                <img src={removeicon} alt="delete icon" />
</button>
                            </div>
                        </div> 
      })
    }    

                      
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
