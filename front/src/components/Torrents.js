import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// const myDomain =""

const Torrents = () => {
    const [torrents,setTorrents]=useState([]);
    const params=useLocation().search;

    // useEffect(()=>{
    //  const searchParams=new URLSearchParams(params);
    //  fetch(`${myDomain}/search?`+searchParams.toString())
    //  .then(res=>res.json())
    //  .then(res=>res.setTorrents(res))
    //  .catch(err=>console.error(err));
    // },[torrents,params]);
    return (
         <>
          <Form style={{display:"flex",marginBottom:"10px"}} action="/search" method="get">
              <Form.Control type="search" name="search" placeholder="search for torrents!" />
             <Button  variant='secondary' style={{marginLeft:"5px", height:"38px"}} type="submit">Search</Button>
          </Form>

          <Table striped bordered hover size='sm' >
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Source</th>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Seeders</th>
                      <th>Leechers</th>
                      <th>Upload Date</th>
                  </tr>
              </thead>
              <tbody>
                  {/* {
                      torrents.map((itr,i)=>{
                          <tr>
                              <td>{i+1}</td>
                              <td>{itr.Source}</td>
                              <td><a href={itr.Link}>{itr.Name}</a></td>
                              <td>{itr.Size}</td>
                              <td>{itr.Seeders}</td>
                              <td>{itr.Leechers}</td>
                              <td>{itr.UploadDate}</td>
                          </tr> 
                      })
                  } */}

                         <tr>
                              <td>l</td>
                              <td>fsdf</td>
                              <td>sdfl</td>
                              <td>djlf</td>
                              <td>dkfjk</td>
                              <td>lkjdfl</td>
                              <td>dlfjlajd</td>
                          </tr> 
                        
              </tbody>
          </Table>
          </>
          );
}
 
export default Torrents;