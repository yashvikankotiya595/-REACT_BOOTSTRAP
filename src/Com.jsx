// import React from "react";
// import Accordion from "react-bootstrap/Accordion";
// import Alert from 'react-bootstrap/Alert';

// const Com = () => {
//   return (
//     <>
//       {/* <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion> */}

//      {[
//         'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark',
//       ].map((variant) => (

//         <Alert key={variant} variant={variant}>
//           This is a {variant} alert with{' '}
//           <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
//           you like.
//         </Alert>

//     //      <Alert variant="success">
//     //   <Alert.Heading>Hey, nice to see you</Alert.Heading>
//     //   <p>
//     //     Aww yeah, you successfully read this important alert message. This
//     //     example text is going to run a bit longer so that you can see how
//     //     spacing within an alert works with this kind of content.
//     //   </p>
//     //   <hr />
//     //   <p className="mb-0">
//     //     Whenever you need to, be sure to use margin utilities to keep things
//     //     nice and tidy.
//     //   </p>
//     // </Alert>
//        ))}
//     </>
//   );
// };

// export default Com;

// {/* <Alert variant="success">
//           This is a success alert—check it out!
//         </Alert> */}

// import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

// function AlertDismissibleExample() {
//   const [show, setShow] = useState(true);

//   if (show) {
//     return (
//       <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//         <p>
//           Change this and that and try again. Duis mollis, est non commodo
//           luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//           Cras mattis consectetur purus sit amet fermentum.
//         </p>
//       </Alert>
//     );
//   }
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
// }

// export default AlertDismissibleExample;

// import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

// function AlertDismissible() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <Alert show={show} variant="success">
//         <Alert.Heading>My Alert</Alert.Heading>
//         <p>
//           Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//           lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//           fermentum.
//         </p>
//         <hr />
//         <div className="d-flex justify-content-end">
//           <Button onClick={() => setShow(false)} variant="outline-success">
//             Close me
//           </Button>
//         </div>
//       </Alert>

//       {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
//     </>
//   );
// }

// export default AlertDismissible;

// import Badge from 'react-bootstrap/Badge';

// function BasicExample() {
//   return (
//     <div>
//       <h1>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h1>
//       <h2>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h2>
//       <h3>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h3>
//       <h4>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h4>
//       <h5>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h5>
//       <h6>
//         Example heading <Badge bg="secondary">New</Badge>
//       </h6>
//     </div>
//   );
// }

// export default BasicExample;

// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';

// function ButtonExample() {
//   return (
//     <Button variant="danger">
//       Profile <Badge bg="danger">9</Badge>
//       <span className="visually-hidden">unread messages</span>
//     </Button>
//   );
// }

// export default ButtonExample;

// import Breadcrumb from 'react-bootstrap/Breadcrumb';

// function BreadcrumbExample() {
//   return (
//     <Breadcrumb>
//       <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
//       <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
//         Library
//       </Breadcrumb.Item>
//       <Breadcrumb.Item active>Data</Breadcrumb.Item>
//     </Breadcrumb>
//   );
// }

// export default BreadcrumbExample;

// import CloseButton from 'react-bootstrap/CloseButton';

// function LabelledExample() {
//   return <CloseButton aria-label="Hide" />;
// }

// export default LabelledExample;

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function WithHeaderExample() {
//   return (
//     <Card>
//       <Card.Header>Featured</Card.Header>
//       <Card.Body>
//         <Card.Title>Special title treatment</Card.Title>
//         <Card.Text>
//           With supporting text below as a natural lead-in to additional content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default WithHeaderExample;

// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

// function KitchenSinkExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       {/* <Card.Img variant="top" src="./public/yashvi.jpg" /> */}
//       <Card.Img variant="top" src="/yashvi.jpg" />

//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default KitchenSinkExample;

// import Dropdown from 'react-bootstrap/Dropdown';

// function BasicExample() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="danger" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default BasicExample;

// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';

// function SplitBasicExample() {
//   return (
//     <Dropdown as={ButtonGroup}>
//       <Button variant="success">Split Button</Button>

//       <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default SplitBasicExample;

// import Figure from 'react-bootstrap/Figure';

// function FigureExample() {
//   return (
//     <Figure>
//       <Figure.Image
//         width={171}
//         height={180}
//         alt="171x180"
//         src="/yashvi.jpg"
//       />
//       <Figure.Caption>
//         Full stack web developer
//       </Figure.Caption>
//     </Figure>
//   );
// }

// export default FigureExample;

// import Image from 'react-bootstrap/Image';

// function FluidExample() {
//   return <Image src="/yashvi.jpg" fluid />;
// }

// export default FluidExample;

// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";

// function BrandExample() {
//   return (
//     <>
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">Brand link</Navbar.Brand>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand>Brand text</Navbar.Brand>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               src="/yashvi.jpg"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//               alt="React Bootstrap logo"
//             />
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               alt=""
//               src="/yashvi.jpg"
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//             />{" "}
//             React Bootstrap
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default BrandExample;


// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavScrollExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;

// import Dropdown from 'react-bootstrap/Dropdown';
// import NavItem from 'react-bootstrap/NavItem';
// import NavLink from 'react-bootstrap/NavLink';

// function DropdownImplExample() {
//   return (
//     <Dropdown as={NavItem}>
//       <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default DropdownImplExample;

// import Placeholder from 'react-bootstrap/Placeholder';

// function ColorExample() {
//   return (
//     <>
//       <Placeholder xs={12} />

//       <Placeholder xs={12} bg="primary" />
//       <Placeholder xs={12} bg="secondary" />
//       <Placeholder xs={12} bg="success" />
//       <Placeholder xs={12} bg="danger" />
//       <Placeholder xs={12} bg="warning" />
//       <Placeholder xs={12} bg="info" />
//       <Placeholder xs={12} bg="light" />
//       <Placeholder xs={12} bg="dark" />
//     </>
//   );
// }

// export default ColorExample;

// import ProgressBar from 'react-bootstrap/ProgressBar';

// function ContextualExample() {
//   return (
//     <div>
//       <ProgressBar variant="success" now={40} />
//       <ProgressBar variant="info" now={20} />
//       <ProgressBar variant="warning" now={60} />
//       <ProgressBar variant="danger" now={80} />
//     </div>
//   );
// }

// export default ContextualExample;

// import ProgressBar from 'react-bootstrap/ProgressBar';

// function AnimatedExample() {
//   return <ProgressBar animated now={30} />;
// }

// export default AnimatedExample;

// import Spinner from 'react-bootstrap/Spinner';

// function BasicExample() {
//   return (
//     <Spinner animation="border" role="status">
//       <span className="visually-hidden">Loading...</span>
//     </Spinner>
//   );
// }

// export default BasicExample;

// import Spinner from 'react-bootstrap/Spinner';

// function VariantsExample() {
//   return (
//     <>
//       <Spinner animation="border" variant="primary" />
//       <Spinner animation="border" variant="secondary" />
//       <Spinner animation="border" variant="success" />
//       <Spinner animation="border" variant="danger" />
//       <Spinner animation="border" variant="warning" />
//       <Spinner animation="border" variant="info" />
//       <Spinner animation="border" variant="light" />
//       <Spinner animation="border" variant="dark" />
//       <Spinner animation="grow" variant="primary" />
//       <Spinner animation="grow" variant="secondary" />
//       <Spinner animation="grow" variant="success" />
//       <Spinner animation="grow" variant="danger" />
//       <Spinner animation="grow" variant="warning" />
//       <Spinner animation="grow" variant="info" />
//       <Spinner animation="grow" variant="light" />
//       <Spinner animation="grow" variant="dark" />
//     </>
//   );
// }

// export default VariantsExample;

// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Tab from 'react-bootstrap/Tab';

// function LeftTabsExample() {
//   return (
//     <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//       <Row>
//         <Col sm={3}>
//           <Nav variant="pills" className="flex-column">
//             <Nav.Item>
//               <Nav.Link eventKey="first">Tab 1</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="second">Tab 2</Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Col>
//         <Col sm={9}>
//           <Tab.Content>
//             <Tab.Pane eventKey="first">First tab content</Tab.Pane>
//             <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
//           </Tab.Content>
//         </Col>
//       </Row>
//     </Tab.Container>
//   );
// }

// export default LeftTabsExample;

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Toast from 'react-bootstrap/Toast';

// function DismissibleExample() {
//   const [showA, setShowA] = useState(true);
//   const [showB, setShowB] = useState(true);

//   const toggleShowA = () => setShowA(!showA);
//   const toggleShowB = () => setShowB(!showB);

//   return (
//     <Row>
//       <Col md={6} className="mb-2">
//         <Button onClick={toggleShowA} className="mb-2">
//           Toggle Toast <strong>with</strong> Animation
//         </Button>
//         <Toast show={showA} onClose={toggleShowA}>
//           <Toast.Header>
//             <img
//               src="holder.js/20x20?text=%20"
//               className="rounded me-2"
//               alt=""
//             />
//             <strong className="me-auto">Bootstrap</strong>
//             <small>11 mins ago</small>
//           </Toast.Header>
//           <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
//         </Toast>
//       </Col>
//       <Col md={6} className="mb-2">
//         <Button onClick={toggleShowB} className="mb-2">
//           Toggle Toast <strong>without</strong> Animation
//         </Button>
//         <Toast onClose={toggleShowB} show={showB} animation={false}>
//           <Toast.Header>
//             <img
//               src="holder.js/20x20?text=%20"
//               className="rounded me-2"
//               alt=""
//             />
//             <strong className="me-auto">Bootstrap</strong>
//             <small>11 mins ago</small>
//           </Toast.Header>
//           <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
//         </Toast>
//       </Col>
//     </Row>
//   );
// }

// export default DismissibleExample;

// import React from 'react'
// import { AiFillAppstore, AiFillSun} from "react-icons/ai";

// const Com = () => {
//   return (
//     <div className='logo'>
//       <AiFillAppstore />
//       <AiFillSun />
//     </div>
//   )
// }

// export default Com

import React from 'react'
import Slider from "react-slick";


// export default function SimpleSlider() {
const Com = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false

  };
  return (
    <>
        <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </>
  )
}

export default Com

