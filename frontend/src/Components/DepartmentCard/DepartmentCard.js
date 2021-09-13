import React, { useState } from "react";
import DepartmentDetails from "../DepartmentDetails/DepartmentDetails";
import "./DepartmentCard.css";


 //const DepartmentCard = () => {
   //const [show, setShow] = useState(false);

//   const onCardClick = () => {
//     setShow(!show);
//   };
//   return (
//     <div className="mt-5 tilt-card">
//       <Tilt>
//       <div
//         onClick={onCardClick}
//         className="card1 w-72  mb-8 m-auto text-gray-400 p-4 cursor-pointer"
//       >
//         {/* <div className="text-center  text-xl pb-2 ">Department</div>*/}
//         <div>
//           <img
//             src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?size=626&ext=jpg"
//             alt="appdev"
//           />
//         </div>
//         <div className="w-full h-1"></div>
//         <div className="text-lg text-white">
//           Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           Facilis, excepturi?Lorem ipsum dolor sit amet consectetur adipisicing
//           elit. Autem, blanditiis!
//         </div>
//       </div>
//       {show ? <DepartmentDetails /> : null}
//       </Tilt>
//       </div>
//   );
// };

// export default DepartmentCard;


import styled from "styled-components";
import Title from "react-vanilla-tilt";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  border-radius: 15px;
  padding: 1.2rem;
  background: rgba(255,255,255,0.1);
  border-top: 1px solid rgba(255,255,255,0.5);
  border-right: 1px solid rgba(255,255,255,0.5);
  //backdrop-filter: blur(5px);
  height: fit-content;
`;

const CardImage = styled.img`
  transform: translateZ(30px);
  border-radius: 10px;
  //width: 250px;
  //height: 250px;
`;

const CardTitle = styled.h3`
  transform: translateZ(155px);
`;

const CardBody = styled.div`
  transform: translateZ(55px);
  border-radius: 5px;
  //background: #000;
`;

export default function App() {
  const options = {
    max: 30,
    scale: 1.5,
    speed: 1000,
  };
  return (
    <div className="text-center">
      <Container>
        <Title className="tilt" options={options}>
          <Card className="w-72">
            <CardImage src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?size=626&ext=jpg" alt="unicorn" />
            <CardTitle className="mt-3 text-white font-bold text-xl">Department</CardTitle>
            <CardBody className="text-sm mt-3 text-white">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</p>
            </CardBody>
          </Card>
        </Title>
      </Container>
    </div>
  );
}

