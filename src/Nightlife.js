import React, { Component } from 'react';
import axios from 'axios';
import Attraction from './AttractionDetails'

class Nightlife extends Component {
  constructor(props) {
    super(props);
    this.state = { cincies: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/attractions/')
      .then(response => {
        const nightAttractions = response.data.filter(cincy => cincy.category === 'Nightlife');
        this.setState({ cincies: nightAttractions });
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
        <h2 className='center mt-3'>Nightlife Attractions</h2>
        <div className="container-fluid">
          <div className='d-flex flex-wrap'>
            {this.attractionList()}
          </div>
        </div>
      </div>
    );
  }
}
export default Nightlife


{/* <div>
// const Nightlife = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return (
//         <div>
//             <h3 className="title">Neat Nightlife</h3>
//             <br />
//             <img src={Partypeople} alt="Partypeople" className='img'/>
//             <br />
//             <p className='des'>Nightlife in The Queen City is always a great time;there are tons of clubs and bars, as well as nighttime activities.  From beautiful sights that are considered "a must-see", to wine houses, and a place to see wonderful musicals and shows, there's something to do for everyone!  Take a look below, we guarantee you'll find all the fun!</p>
//             <br />
//             <br />
//             <h4 className="rest">Roebling Suspension Bridge</h4>
//             <br />
//             <img src={Roebling} alt="Roebling" className='img'/>
//             <br />
//             <p className='des'>The Roebling Bridge is such a beautiful sight to see, especially at night!  The bridge normally lights up with these beautiful lights, and they glimmer and shine in the night sky.  This place is great for looking at the water, and watching the boats pass by.  It's a quiet and peaceful place to watch the city lights.  If you love seeing the city lit up, this is the place for you to be.</p>
//             <Button variant="primary" onClick={handleShow}>
//                 Roebling Bridge
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Roebling Bridge</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 94-96 E Ted Berry Wy, Cincinnati, OH 45202</li>

//                         <li>Over Ohio river</li>

//                         <li>Riverfront</li>

//                         <li>Pedestrian walkway</li>

//                         <li>Lit up at night</li>

//                         <li>Connects downtown Cincinnati, OH and Covington, KY</li>

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

//             <br />
//             <h4 className="rest">16-Bit Bar + Arcade</h4>
//             <br />
//             <img src={Arcade} alt="Arcade" className='img'/>
//             <br />
//             <p className='des'>This place is great for family fun, or even a group outing.  The vibes here are immaculate; there's so many fun arcade games you can play, like "Big Buck Hunter", "Donkey Kong Jr.", and "Asteroids Deluxe", just to name a few.  They also serve drinks and adult beverages, and even permits you to bring your own food to the venue.  It's a kid's paradise, and a trip back in time for the adults.  There's fun for everyone down at 16-Bit Bar + Arcade!</p>

//             <Button variant="primary" onClick={handleShow}>
//                 16-Bit
//             </Button>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>16-Bit Bar + Arcade</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 1124 Main St. Cincinnati, OH 45202</li>

//                         <li>Phone number: (513) 964-7746</li>

//                         <li>Hours: Mon-Wed: 4p-12:30a Thurs: 4p-1:30a Fri: 4p-2:30a Sat: 12p-2:30a Sun: 12p-12:30a</li>

//                         <li>Happy Hour: Mon-Fri: 4-7p</li>

//                         <li>4.5 rating</li>

//                         <li>Seating</li>

//                         <li>Family-friendly</li>
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

//             <h4 className="rest">Cincinnati Music Hall</h4>
//             <br />
//             <img src={Music} alt="Music" className='img'/>
//             <br />
//             <p className='des'>This music hall has the most beautiful architecture, and a long history since it was constructed in 1878.  This gorgeous hall was built by Samuel Hannaford, and has a Venetian Gothic style to its build.  It serves as a place for classical music performances, musicals, ballets, and much more, like the Cincinnati Symphony Orchestra, or the Cincinnati Ballet.  They're always hosting different events, and you can buy and reserve tickets for their events online for convenience.  You can book tickets today; if the arts is your interest, then the Cincinnati Music Hall will be an amazing experience!</p>

//             <Button variant="primary" onClick={handleShow}>
//                 Music Hall
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Cinncinati Music Hall</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 1241 Elm St., Cincinnati, OH 45202</li>

//                         <li>Phone number: (513) 744-3344</li>

//                         <li>Hours: Mon-Fri: 10a-5p Sat: 10a-2p</li>

//                         <li>4.8 rating</li>

//

//                         <li>www.cincinnatiarts.org to book tickets</li>

//                         <li>Cincinnati Ballet, Cincinnati Symphony Orchestra, Cincinnati Opera, May Festival Chorus, and the Cincinnati Pops Orchestra</li>
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


//             <h4 className="rest">Sundry & Vice</h4>
//             <br />
//             <img src={Sundry} alt="Sundry" className='img'/>
//             <br />
//             <p className='des'>The atmosphere in this bar calls for a nice dinner with friends; it's considered an upscale cocktail bar, and they definitely fit the description!  They serve delicious adult beverages, and they do so with style.  They're a rustic but charming place, and their drinks are made and served just as fancy as the dècor.  This is a great place to relax and have a good drink while having some fun.</p>


//             <Button variant="primary" onClick={handleShow}>
//                 Sundry & Vice
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Sundry & Vice</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 18 W 13th St. Cincinnati, OH 45202</li>

//                         <li>Phone number: (513) 721-8423</li>

//                         <li>Hours: Tues-Thurs: 4p-1a Fri: 4p-2a Sat: 2p-2a Sun: 2p-12a</li>

//                         <li>4.5 rating</li>

//                         <li>Events (www.sundryandvice.com)</li>
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

//             <h4 className="rest">Jim & Jack's on the River</h4>
//             <br />
//             <img src={Jacks} alt="Jacks" className='img'/>
//             <br />
//             <p className='des'>This place has a relaxed feel to it; it's in between upscale and simple.  This bar serves beverages (adult and nonalcoholic), and it's always mixed with the right amount of ingredients for a great taste!  They serve great food as well, like pizzas, French fries, burgers, and more.  You can also see the picturesque scene of the river, as stated in the name.  It's a wonderful atmosphere for a gathering with friends, or for an after work drink with your colleagues.</p>

//             <Button variant="primary" onClick={handleShow}>
//                 Jim & Jack's
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Jim & Jack's on the River</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 3456 River Rd., Cincinnati, OH 45204</li>

//                         <li>Phone number: (513) 251-7977</li>

//                         <li>Hours: Mon-Thurs: 9a-1a Fri, Sat: 9a-2:30a Sun: 9a-1a</li>

//                         <li>4.5 rating</li>

//                         <li>Events (www.jimandjacks.net)</li>
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

//             <h4 className="rest">Corkopolis</h4>
//             <br />
//             <img src={Corkopolis} alt="Corkopolis" className='img'/>
//             <br />
//             <p className='des'>Corkopolis has the most delicious wine around; they're a sort of fancy wine bar, and they carry local and imported wine.  They have a great variety of reds and whites that'll make the tastebuds sing.  They even offer beer and champagne too!  From Vilmart et Cie Coeur de Cuvée champagne to Rhinegeist Night Glow Fruited Sour beer, there's a tasty choice for everyone.</p>

//             <Button variant="primary" onClick={handleShow}>
//                 Corkopolis
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Corkopolis</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 640 Main St., Cincinnati, OH 45202</li>

//                         <li>Phone number: (513) 381-3752</li>

//                         <li>Hours: Tues-Thurs: 12p-8p Fri, Sat: 12p-9p</li>

//                         <li>Happy Hour: Tues-Fri: 4-6p</li>

//                         <li>4.6 rating</li>

//                         <li>Can reserve private rooms for events (www.corkopolisoh.com)</li>

//                         <li>Shop for their products online (curbside pickup or delivery)</li>

//                         <li>offers club subscription (3 or 6 months)</li>
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

//             <h4 className="rest">Tokyo Kitty</h4>
//             <br />
//             <img src={Tokyo} alt="Tokyo" className='img'/>
//             <br />
//             <p className='des'>Do you love to sing and perform?  Tokyo Kitty would be the place to be!  They're a karaoke bar with a Japanese style; the interior design has different references on the walls, like Godzilla, or Chesire Cat to name a couple.  They also offer drink service, and the drinks are served through a hole in the ceiling with a tray/cable system; such a unique way to serve their customers!  There's an option to reserve a private karaoke room, and you can do so online.  It has the atmosphere, the fun, and fast service for their patrons, Tokyo Kitty is definitely a party place!</p>

//             <Button variant="primary" onClick={handleShow}>
//                 Tokyo Kitty
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Tokyo Kitty</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 575 Race St., Cincinnati, OH 45202</li>

//                         <li>Phone number: (513) 251-7977</li>

//                         <li>Hours: <br /> Tues-Thurs: 6p-12a Fri: 6p-2a Sat: 4p-2a Sun: 6p-12a</li>

//                         <li>4.4 rating</li>

//                         <li>Must book online (www.thattokyobar.com)</li>

//                         <li>Private rooms with lounge seating</li>

//                         <li>Serves cocktails, mocktails, beer, and sake</li>
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

//             <h4 className="rest">The Establishment</h4>
//             <br />
//             <img src={Establishment} alt="Establishment" className='img'/>
//             <br />
//             <p className='des'>If you love to get some fresh air as you enjoy your meal, they offer outside seating in this beautiful patio area, and they have lights and fireplaces in the middle of the tables for the nighttime.  It's a beautiful place to enjoy a nice meal, or have some drinks.  They serve well-mixed adult beverages, as well as bar snack food, like salads, sandwhiches, and burgers.  There's also weekly specials they offer for their food and drinks.  The service is outstanding, and the atmosphere is amazing!  The Establishment is a great time for any occassion.</p>


//             <Button variant="primary" onClick={handleShow}>
//                 The Establishment
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>The Establishment</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 2900 Wasson Rd., Cincinnati, OH 45209</li>

//                         <li>Phone number: (513) 351-1083</li>

//                         <li>Hours: <br /> Mon-Fri: 11:30a-2:30a Sat, Sun: 11a-2:30a</li>

//                         <li>Happy Hour: Mon-Sun: 12-1p</li>

//                         <li>Kitchen closes at 11p every day</li>

//                         <li>4.4 rating</li>

//                         <li>Can book private events online (www.establishmentoakley.com)</li>
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

//             <h4 className="rest">Tillie's Lounge and Patio</h4>
//             <br />
//             <img src={Tillies} alt="Tillies" className='img'/>
//             <br />
//             <p className='des'>Tillie's is a special bar in Cincinnati, due to it being named after a Cincinnati entertainer, Tillie the Elephant.  She was a famous circus animal, and now she has a fancy lounge!  This upscale cocktail bar has an antique feel to the dècor, but it's still a cute and charming place.  They always have good service, and they host weekly events and karaoke too; they even host Quiz Nights about various topics!  The drinks are always blended well, and taste absolutely delicious!  They're mixed with a perfect balance in their ingredients.  The best part about Tillie's?  Dogs are welcome to hang out too!  There's a place for everyone down at Tillie's Lounge and Patio!</p>

//             <Button variant="primary" onClick={handleShow}>
//                 Tillie's
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Tillie's Lounge and Patio</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 4042 Hamilton Ave., Cincinnati, OH 45223</li>

//                         <li>Phone number: (513) 541-1414</li>

//                         <li>Hours: <br /> Mon, Tues: 5p-12a Wed-Fri: 4p-2a Sat: 6p-2a Sun: 2-8p</li>

//                         <li>4.7 rating</li>

//                         <li>Can book private events (www.tillieslounge.com)</li>
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

//             <h4 className="rest">Anjou</h4>
//             <br />
//             <img src={Anjou} alt="Anjou" className='img'/>
//             <br />
//             <p className='des'>They're an upscale cocktail bar, and their drinks are out of this world!  Many of the drinks they offer are served with a garnish for presentation (like mint leaves or cucumber), and they give you a decent pour.  They have deals on their bottles of wine as well; they offer them half-priced from open to close every day!  Cocktails, beer, and wine, there's something for everyone to try.  They also offer cheese and charcuterie boards to pair with the beverages.  Anjou definitely hits the mark for fancy!</p>

//             <Button variant="primary" onClick={handleShow}>
//                 Anjou
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Anjou</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <ul>
//                         <li>Address: 2804 Woodburn Ave., Cincinnati, OH 45206</li>

//                         <li>Phone number: (513) 221-1095</li>

//                         <li>Hours: Tues-Thurs: 3-11p Fri, Sat: 3p-12a</li>

//                         <li>Happy Hour: Tues-Fri: 3-6p</li>

//                         <li>5.0 rating</li>

//                         <li>Offers gift cards</li>
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


//             <p className='des'>Thanks for stopping by Cincy Finds - Anything for our people!</p>
//         </div>
//     )
// };
// export default Nightlife
</div> */}







