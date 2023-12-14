// FoodList.js
import React, { Component } from 'react';
import axios from 'axios';
import Attraction from './AttractionDetails'

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = { cincies: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/attractions/')
      .then(response => {
        const foodAttractions = response.data.filter(cincy => cincy.category === 'Food');
        this.setState({ cincies: foodAttractions });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  attractionList() {
    return this.state.cincies.map(currentAttraction => {
      return <Attraction cincy={currentAttraction} key={currentAttraction.name} />;
    });
  }
  render() {
    return (
      <div>
        <h2 className='center mt-3'>Food Attractions</h2>
        <div className="container-fluid">
          <div className='d-flex flex-wrap'>
            {this.attractionList()}
          </div>
        </div>
      </div>
    );
  }
}
export default Food

//<div>
// const Food = () => {

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <div>
//             <h3 className="title">Delicious Dining</h3>
//             <br />
//             <img src={Eatingpeople} alt="Eatingpeople" className='img'/>
//             <br />
//             <p className='des'>We are the connoisseurs of great food, and Cincinnati definitely fits the bill.  There's an array of selections: steak houses, Italian eateries, and much more.  Come take a scrumptious journey, and step on the scene with Cincy Finds; we'll find something tasty for you to eat!</p>
//             <br />
//             <br />
//             <h4 className="rest">Montgomery Inn at the Boathouse</h4>
//             <br />
//             <img src={MontgomeryInn} alt="MontgomeryInn" className='img'/>
//             <br />
//             <p className="des">This cute and quaint American restaurant serves delicious barbecue and adult beverages; they have anything from slabs of ribs to barbecue pulled pork sandwhiches, as well as succulent sweets!  They also offer gluten-free options, so there's something for everyone here at the Boathouse.</p>
//             <br />
//             <Button variant="primary" onClick={handleShow}>
//                 Montgomery Inn
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Montgomery Inn at the Boathouse</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 925 Riverside Dr., Cincinnati, OH 45202</li>

//                         <li>Phone number: (513) 721-7427</li>

//                         <li>Hours: Tue-Fri: 4p-10p <br /> Sat, Sun: 3p-10p</li>

//                         <li>4.0 rating</li>

//                         <li>Price range: $12-$40</li>
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//             <br />

//             <h4 className="rest">Jeff Ruby's Steakhouse</h4>
//             <br />
//             <img src={JeffRubys} alt="JeffRubys" className='img'/>
//             <br />
//             <p className='des'>If you love steak, Jeff Ruby's Steakhouse is the place to get it!  Their steaks are juicy, tender, and absolutely delicious!  They offer sushi, desserts, salads, and a tasty wine menu; this versatile steakhouse even has a menu section for children, as well as gluten-free dishes!  This place would be a wonderful place to take the family; there's an option for any and everybody!</p>
//             <br />
//             <Button variant="primary" onClick={handleShow}>
//                 Jeff Ruby's
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Jeff Ruby's Steakhouse</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 505 Vine St., Cincinnati, OH 45202</li>

//                         <li>Phone number: (513) 784-1200</li>

//                         <li>Hours: Mon-Thurs: 5p-10p Fri, Sat: 5p-11p Sun: 4:30p-9p</li>

//                         <li>4.5 rating</li>

//                         <li>Price range: $41-$80</li>

//                         <li>Traveler's Choice 2023</li>
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             <h4 className="rest">Aglamesis Bros.</h4>
//             <br />
//             <img src={Aglamesis} alt="Aglamesis" className='img'/>
//             <br />
//             <p className='des'>Aglamesis Bros. is an adorable and tasty American dessert shop, where you'll find delicious sweets trhroughout the establishment.  If you have a sweet tooth, this dessert cafè is the place to go!  From ice cream sundaes to candy, they've got it all!</p>
//             <Button variant="primary" onClick={handleShow}>
//                 Aglamesis Bros.
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Aglamesis Bros.</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 3046 Madison Rd., Cincinnati, OH 45209</li>

//                         <li>Phone number: (513) 531-5196</li>

//                         <li>Hours: Mon-Thurs: 10a-10:30p Fri, Sat: 10a-11p Sun: 12p-10:30p</li>

//                         <li>5.0 rating</li>

//                         <li>Price range: $3-$20</li>
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             <h4 className="rest">Dewey's Pizza</h4>
//             <br />
//             <img src={Deweys} alt="Deweys" className='img'/>
//             <br />
//             <p className='des'>Dewey's Pizza has the most cheesy and flavorful pizza; as an all Italian eatery, they really know how to serve a good pizza; they use fresh ingredients and homemake all the dishes, and the taste is out of this world.  They offer choices of pizza, salads, calzones, and they even have a create your own option!  They also offer great vegetarian-friendly and gluten-free dishes for those who need them.  This pizzeria really defines quality, and is considered a Jack of All Trades.</p>
//             <Button variant="primary" onClick={handleShow}>
//                 Dewey's Pizza
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Dewey's Pizza</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 265 Hosea Ave., Cincinnati, OH 45220</li>

//                         <li>Phone number: (513) 221-0400</li>

//                         <li>Hours: Mon-Thurs: 11a-9p Fri, Sat: 11a-10p Sun: 4p-9p</li>

//                         <li>4.5 rating</li>

//                         <li>Price range: $5-$23</li>
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             <h4 className="rest">Graeter's Ice Cream</h4>
//             <br />
//             <img src={Graeters} alt="Graeters" className='img'/>
//             <br />
//             <p className='des'>Graeter's offers a wide selection of delicious ice cream; they have everything from vanilla bean to cookie doygh chocolate chip flavors.  They also have sorbets, milkshakes, and sundaes; they even have mini tubs of their ice cream, so you can enjoy their sweet ice cream at home! They're basically a complete paradise for sweet lovers. Come to Graeter's and satisfy that sweet tooth!</p>
//             <Button variant="primary" onClick={handleShow}>
//                 Graeter's
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Graeter's Ice Cream</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 511 Walnut St., Cincinnati, OH 45202</li>

//                         <li>Phone number: (513) 977-4129</li>

//                         <li>Hours: Mon: 1a-9:30a Tues: 1a-8a Wed, Thurs: 2a-8a Fri-Sun: 1:30a-8a</li>

//                         <li>4.5 rating</li>

//                         <li>Wheelchair accessbile</li> {/*this goes under seating in Schema*/}
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             <h4 className="rest">Ando Japanese Restaurant & Sushi Bar</h4>
//             <br />
//             <img src={Ando} alt="Ando" className='img'/>
//             <br />
//             <p className='des'>Ando Japanese Restaurant is quite the fancy dining experience; this restaurant has a wonderful atmosphere, and great food to enjoy!  They serve Udon noodles, Gyoza, and even sushi!  They even serve delicious yaki tori, which is absolutely amazing!  The menu also has vegetarian, vegan, and gluten-free options to choose from if needed.  There's also a bar for the adults to sit at and enjoy their food and drinks of choice.  It's a great place to have a drink and relax, or to treat loved ones and friends; come to Ando today for a lovely eveining out!</p>
//             <Button variant="primary" onClick={handleShow}>
//                 Ando
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Ando Japanese Rastaurant</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 11255 Hartman Hwy., Blue Ash, OH 45242</li>

//                         <li>Phone number: (513) 954-0041</li>

//                         <li>Hours: Tues-Sat: 5p-9p</li>

//                         <li>4.5 rating</li>
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             <h4 className="rest">Maplewood Kitchen & Bar</h4>
//             <br />
//             <img src={Maple} alt="Maple" className='img'/>
//             <br />
//             <p className='des'>This kitchen and bar is a wonderful place to just kick back and relax, and they have a beautiful wooden bar for you to do so!  They're the type of restaurant that serves quick bites to eat, like burgers and fries, salmon, and even breakfast items like blueberry pancakes and yogurt parfaits.  There's also vegetarian, vegan, and gluten-free dishes for anyone who needs them.  Whether breakfast, lunch, dinner, or even a nice brunch, Maplewood Kitchen & Bar's got you covered!</p>
//             <Button variant="primary" onClick={handleShow}>
//                 Maplewood
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Maplewood Kitchen & Bar</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 525 Race St., Cincinnati, OH 45202</li>

//                         <li>Phone number: (513) 421-2100</li>

//                         <li>Hours: Mon-Thurs: 7a-9p Fri: 7a-10p Sat: 8a-10p Sun: 8a-9p</li>

//                         <li>4.5 rating</li>
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             <h4 className="rest">The BonBonerie</h4>
//             <br />
//             <img src={BonBon} alt="BonBon" className='img'/>
//             <br />
//             <p className='des'>The BonBonerie is a cute dessert cafè that has a fun yet fancy vibe.  The servers actually put the desserts you ordered on a dessert tray for presentation, and they even have doilies under the plates on each table.  Their aesthetic is like a mordern-day, fancy English tea party, and their sweets are light, fluffy, and delicious.  They have a delectable selection of desserts to try; they offer macaroons, cakes, cupcakes, cookies, and many more!  They even serve lunch food for those that would rather pass on dessert.  In the mood for fancy desserts?  Head to The BonBonerie, and you'll find something to entice your sweet tooth.</p>
//             <Button variant="primary" onClick={handleShow}>
//                 The BonBonerie
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>The BonBonerie</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 2030 Madison Dr., Cincinnati, OH 45208</li>

//                         <li>Phone number: (513) 321-3399</li>

//                         <li>Hours: Mon-Fri: 7:30a-5:30p Sat: 8a-4p</li>

//                         <li>4.5 rating</li>
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             <h4 className="rest">Tony's of Cincinnati</h4>
//             <br />
//             <img src={Tonys} alt="Tonys" className='img'/>
//             <br />
//             <p className='des'>Tony's is an American steakhouse that has a fancy rustic feel to the atmosphere and dècor.  It's a lovely place to take your family or significant other for a fancy night out.  Their menu covers a range of meals: they serve seafood, like beef tartare, steaks, salads, and they have some amazing wine selections as well.  They also offer a bar menu, which is more for a quick bite as opposed to a full sitdown meal.  There's vegetarian and gluten-free options for anyone in need.  A special occassion, or just showing appreciation for someone, Tony's of Cincinnati is a great place to do so.</p>
//             <Button variant="primary" onClick={handleShow}>
//                 Tony's
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Tony's of Cinncinati</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Reservations recommended/required</li>

//                         <li>Price range: $44-$69</li>

//                         <li>Address: 12110 Montgomery Rd., Cincinnati, OH 45249</li>

//                         <li>Phone number: (513) 677-8669</li>

//                         <li>Hours: Sun, Mon: 5p-9p Tues-Thurs: 5p-10p Fri, Sat: 5p-11p</li>

//                         <li>4.5 rating</li>
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             <h4 className="rest">Taste of Belgium - Over the Rhine</h4>
//             <br />
//             <img src={Belgium} alt="Belgium" className='img'/>
//             <br />
//             <p className='des'>Cute, quaint, and delicious, Taste of Belgium comes to give you great flavor profiles that are considered staples in Belgium.  This place definitely has the rustic charm as a European restaurant; they serve frites, crêpes, and much more.  They also made sure to have vegetarian, vegan, and gluten-free options, so there'll be something for everyone.  They'll take your favorites and put a Belgian twist on it!</p>
//             <Button variant="primary" onClick={handleShow}>
//                 Taste of Belgium
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Taste of Belgium</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Price range: $7-$25</li>

//                         <li>Address: 1135 Vine St., Cincinnati, OH 45202</li>

//                         <li>Phone number: (513) 396-5800</li>

//                         <li>Hours: Mon, Tues: 8a-3p Wed, Thurs: 8a-9p Fri, Sat: 8a-10p Sun: 8a-8p</li>

//                         <li>4.5 rating</li>
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             <p className='des'>Thanks for stopping by Cincy Finds - Anything for our people!</p>
//         </div>
//     );
// };
//  Food
//</div>