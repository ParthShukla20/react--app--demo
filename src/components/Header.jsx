function Header(props){
   
    return (<>
     <div>
    <h1 className="heading" >hii {props.name}</h1>
    <p>lucky age {props.age}</p>
  </div>
    </>)
  
  }
export default Header;