import { useState } from 'react';
import { useAttractionsContext } from './hooks/useAttractionsContext'


const AttractionForm = () => {
    const { dispatch } = useAttractionsContext()

    //states
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [hours, setHours] = useState('')
    const [happy, setHappy] = useState('')
    const [kitchen, setKitchen] = useState('')
    const [number, setNumber] = useState('')
    const [rating, setRating] = useState('')
    const [website, setWebsite] = useState('')    //events
    const [seating, setSeating] = useState('')
    const [shop, setShop] = useState('')
    const [subscription, setSubscription] = useState('')
    const [serving, setServing] = useState('')
    const [giftCards, setGiftCards] = useState('')
    const [travelersChoice, setTravelersChoice] = useState('')
    const [pricing, setPricing] = useState('')
    const [category, setCategory] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    //submission handler
    const handleSubmit = async (e) => {
        e.preventDefault()

        const attraction = { name, description, address, hours, happy, kitchen, number, rating, website, seating, shop, subscription, serving, giftCards, travelersChoice, pricing, category, imgURL }

        //post request
        const response = await fetch('http://localhost:4000/attractions', {
            method: 'POST',
            body: JSON.stringify(attraction), headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setName('')
            setDescription('')
            setAddress('')
            setHours('')
            setHappy('')
            setKitchen('')
            setNumber('')
            setRating('')
            setWebsite('')
            setSeating('')
            setShop('')
            setSubscription('')
            setServing('')
            setGiftCards('')
            setTravelersChoice('')
            setPricing('')
            setCategory('')
            setImgURL('')
            setError(null)
            setEmptyFields([])
            console.log('new attraction added!')
            dispatch({ type: 'CREATE_ATTRACTION', payload: json })
        }
    }



    return (
        <form className="create emptyFields" onSubmit={handleSubmit}>
            <h3>Add a New Attraction</h3>


            <label>Attraction Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label>Description:</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={emptyFields.includes('description') ? 'error' : ''}
            />

            <label>Address:</label>
            <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className={emptyFields.includes('address') ? 'error' : ''}
            />

            <label>Hours:</label>
            <input
                type="text"
                onChange={(e) => setHours(e.target.value)}
                value={hours}
                className={emptyFields.includes('hours') ? 'error' : ''}
            />

            <label>Happy Hour:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={happy}
                className={emptyFields.includes('happy') ? 'error' : ''}
            />

            <label>Kitchen Hours:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={kitchen}
                className={emptyFields.includes('kitchen') ? 'error' : ''}
            />

            <label>Phone Number:</label>
            <input
                type="number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                className={emptyFields.includes('number') ? 'error' : ''}
            />

            <label>Rating:</label>
            <input
                type="number"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                className={emptyFields.includes('rating') ? 'error' : ''}
            />

            <label>Website:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={website}
                className={emptyFields.includes('website') ? 'error' : ''}
            />

            <label>Seating:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={seating}
                className={emptyFields.includes('seating') ? 'error' : ''}
            />

            <label>Online Shop:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={shop}
                className={emptyFields.includes('shop') ? 'error' : ''}
            />

            <label>Club Subscription:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={subscription}
                className={emptyFields.includes('subscription') ? 'error' : ''}
            />

            <label>Serving Options:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={serving}
                className={emptyFields.includes('serving') ? 'error' : ''}
            />

            <label>Gift Cards:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={giftCards}
                className={emptyFields.includes('giftCards') ? 'error' : ''}
            />

            <label>Traveler's Choice:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={travelersChoice}
                className={emptyFields.includes('travelersChoice') ? 'error' : ''}
            />

            <label>Price Range:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={pricing}
                className={emptyFields.includes('pricing') ? 'error' : ''}
            />

            <label>Category:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={category}
                className={emptyFields.includes('category') ? 'error' : ''}
            />

            <label>Picture Time!:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={imgURL}
                className={emptyFields.includes('imgURL') ? 'error' : ''}
            />
            <button>Add Attraction</button>
            {error && <div className='error'>{error}</div>}
        </form>
    );
};

export default AttractionForm