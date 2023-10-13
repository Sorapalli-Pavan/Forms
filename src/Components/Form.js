// // // import { useState } from 'react';
// // // import React from 'react';
// // // import '../App.css';
// // // //import img1 from './Images/Image_1.jpeg'
// // // //import  './CSS/Bootstrap.css'

// // // // /* export default function App() {
// // // //   return (
// // // //     // <div className="App">
// // // //     //   <header className="App-header">
// // // //     //     <img src={logo} className="App-logo" alt="logo" />
// // // //     //     <p>
// // // //     //       Edit <code>src/App.js</code> and save to reload.
// // // //     //     </p>
// // // //     //     <a
// // // //     //       className="App-link"
// // // //           href="https://reactjs.org"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           Learn React
// // // //         </a>
// // // //       </header>
// // // //   </div> */
// // // export default function Forms() {
// // //     return (
// // //         <>
// // //             <div class="container-fluid">
// // //                 <div class="row justify-content-center">
// // //                     <div class="col-mid-6 bg-info">
// // //                         <h2 class="text-center">Forms</h2>
// // //                         <form>
// // //                             <div class="Form-group">
// // //                                 <label>Name</label>
// // //                                 <input type="text" class="form-control" name="" id="txtname" />
// // //                             </div>
// // //                             <br></br>
// // //                             <div class="Form-group">
// // //                                 <label>Roll_No:</label>
// // //                                 <input type="text" name="" class="form-control" id="txtroll" />
// // //                             </div>

// // //                             <div class="Form-group">
// // //                                 <label>DOB</label>
// // //                                 <input type="date" class="form-control" name="" id="numdate" />
// // //                             </div>

// // //                             <div class="Form-group" >
// // //                                 <label>Mobile_No.</label>
// // //                                 <input type="number" class="form-control" name="" id="number" />
// // //                             </div>

// // //                             <div class="Form-group" >
// // //                                 <label>Gender</label>
// // //                                 <select class="form-select" aria-label="Default select example">
// // //                                     <option selected>Choose</option>
// // //                                     <option value="1">Male</option>
// // //                                     <option value="2">Female</option>
// // //                                 </select>
// // //                             </div>


// // //                                     <br></br>
// // //                                     <label>Branch</label>
// // //                                     <select>
// // //                                         <option value="CSE">CSE</option>
// // //                                         <option value="ECE">ECE</option>
// // //                                         <option selected value="EEE">EEE</option>
// // //                                         <option value="Mech">Mech</option>
// // //                                     </select><br></br>
// // //                                     <br></br>





// // //                                     <input type="file" /><br></br>
// // //                                     <br></br>
// // //                                     <div>
// // //                                     <button class="btn btn-danger" onclick="return Testing()">Submit</button>
// // //                                 </div>
// // //                                 </form>

// // //                             </div>
// // //                     </div>
// // //                 </div>
// // //             </>
// // //             )
// // // }


// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// export default function Form() {
//   const [id, setId] = useState('');
//   const [title, setTitle] = useState('');
//   const [brand, setBrand] = useState('');
//   const [price, setPrice] = useState('');
//   const [des, setDes] = useState('');
//   const [imgurl, setImgurl] = useState('');

//   const productsData = {
//     productId: id,
//     title: title,
//     brand: brand,
//     price: price,
//     des: des,
//     imgurl: imgurl
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3002/productsData', productsData).then((res) => {
//       alert("success")
//     })
//   }
//   let sno = 1;
//     let [count, setCount] = useState(1)
//     useEffect(() => console.log("Hello World!"), [count])
//   return (
//     <>

//       <div className='container-fluid bg-info'>

//         <div className='row justify-content-center'>

//           <div className='col-md-6 '>

//             <h3 className='text-center text-primary'>Add Product</h3>
//             <form action="" method='post' onSubmit={handleSubmit}>
//               <div class="form-group">
//                 <label for="id">Product Id</label>
//                 <input type="text" class="form-control" value={id} id="id" onChange={(e) => { setId(e.target.value) }} />
//               </div>
//               <div class="form-group md-3">
//                 <label for="title">Product Title</label>
//                 <input type="text" class="form-control" value={title} id="title" onChange={(e) => { setTitle(e.target.value) }} />
//               </div>
//               <div class="form-group md-3">
//                 <label for="brand">Brand:</label>
//                 <input type="text" class="form-control" value={brand} id="brand" onChange={(e) => { setBrand(e.target.value) }} />
//               </div>
//               <div class="form-group md-3">
//                 <label for="price">Price:</label>
//                 <input type="text" class="form-control" value={price} id="price" onChange={(e) => { setPrice(e.target.value) }} />
//               </div>
//               <div class="form-group md-3">
//                 <label for="des">Description:</label>
//                 <input type="text" class="form-control" value={des} id="des" onChange={(e) => { setDes(e.target.value) }} />
//               </div>
//               <div class="form-group md-3">
//                 <label for="imgurl">Img url:</label>
//                 <input type="text" class="form-control" value={imgurl} id="imgurl" onChange={(e) => { setImgurl(e.target.value) }} />
//               </div>
//               <br></br>
//               <button type="submit" class="btn btn-danger">Submit</button>
//               <button onClick={(e) => handleSubmit('true', e)}>Show</button>
//             </form>
//           </div>

//         </div>
//         <div className='col-md-8 bg-warning'>
//         <table className='table table-bordered'>
//                 <thead>
//                     <tr>
//                         <td>SNo</td>
//                         <td>Name</td>
//                         <td>Rollno</td>
//                         <td>Branch</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         props.data.map((element,index)=>{
//                             return(
//                                 <>
//                                     <tr>
//                                         <td>{sno++}</td>
//                                         <td>{element.Name}</td>
//                                         <td>{element.Roll}</td>
//                                         <td>{element.Branch }</td>
//                                     </tr>
//                                 </>
//                             )
//                         })
//                     }
//                     </tbody>
//                 </table>
//                 </div>
//       </div>

//     </>
//   )
// }
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Form() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [des, setDes] = useState('');
  const [imgurl, setImgurl] = useState('');
  const [products, setProducts] = useState([{}]);

  const productsData = {
    productId: id,
    title: title,
    brand: brand,
    price: price,
    des: des,
    imgurl: imgurl
  }
  //const fetchData=()=>{
    useEffect(() => {
      axios.get('http://localhost:3002/productsData')
        .then((res) => {
          setProducts(res.data)
        }).catch((error) => {
          console.error("Error Get Add data")
        })
    }, [])
  //}
  console.log(products)
  const handleSubmit = (e) => {
    e.preventDefault();
     console.log(productsData)
    axios.post('http://localhost:3002/productsData', productsData)
      .then((res) => {
        alert("success")
        setId('')
      }).catch((error) => {
        console.error("Error to Add data")
      })
        //fetchData()
      
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/productsData/$(id)`)
    .then((res)=>{
      alert("Product Deleted")
    })
      //fetchData()
    }
  let sno = 1
  return (
    <>
    <div className='container-fluid bg-info'>
      <br></br>
    <table className='table table-bordered'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>P Id</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            products.map((e, i) => {
              return (
                <tr>
                  <td>{sno++}</td>
                  <td>{e.productId}</td>
                  <td>{e.title}</td>
                  <td>{e.brand}</td>
                  <td>{e.price}</td>
                  <td>{e.des}</td>
                  <td><img src={e.imgurl} height="100px" /></td>
                  <td><button type="submit" class="btn btn-danger" onClick={handleDelete} >Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className='row justify-content-center'>
        <div className='col-md-6 img-thumbline bg-warning'>
          <br></br>
        
          <h3 className='text-center text-primary'>Add Product</h3>
          <form action="" method='post' onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="id">product id</label>
              <input type="text" class="form-control" id="id" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div class="form-group md-3">
              <label for="title">title</label>
              <input type="text" class="form-control" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div class="form-group md-3">
              <label for="brand">brand:</label>
              <input type="text" class="form-control" id="brand" value={brand} onChange={(e) => { setBrand(e.target.value) }} />
            </div>
            <div class="form-group md-3">
              <label for="price">price:</label>
              <input type="text" class="form-control" id="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
            </div>
            <div class="form-group md-3">
              <label for="des">description:</label>
              <input type="text" class="form-control" id="des" value={des} onChange={(e) => { setDes(e.target.value) }} />
            </div>
            <div class="form-group md-3">
              <label for="imgurl">Img url:</label>
              <input type="text" class="form-control" id="imgurl" value={imgurl} onChange={(e) => { setImgurl(e.target.value) }} />
            </div>

            <button type="submit" class="btn btn-danger">Submit</button>
          </form>

        </div>


      </div>
      <br></br>
      
      </div>
    </>
  )
}