import { useEffect, useState } from 'react';

const Attraction = () => {
    const [attractions, setAttractions] = useState(null)

    useEffect(() => {
        const fetchAttractions = async () => {
            const response = await fetch('http://localhost:4000/cincy')
            const json = await response.json()

            if(response.ok) {
                setAttractions(json)
            }
        }

        fetchAttractions()
    }, [])

    return (
        <div className="attraction">
            <div className="attractions">
                {attractions && attractions.map((attraction) => (
                    <p key={attraction._category}>{attraction.name}</p>
                ))}
            </div>
        </div>
    )
}
















// import { useEffect } from 'react';
// import { useAttractionsContext } from './hooks/useAttractionsContext';
// //components
// import AttractionDetails from '../src/AttractionDetails';
// import AttractionForm from '../src/AttractionForm';

// const Attraction = () => {
//     const {attractions, dispatch} = useAttractionsContext()
//     useEffect(() => {
//         const fetchAttractions = async () => {
//             const response = await fetch('/cincy')  //performs when 1st loading component
//             const json = await response.json()

//             if(response.ok) {  //fires if response is ok
//                 dispatch({type: 'SET_ATTRACTIONS', payload: json})
//             }
//         }

//         fetchAttractions()
//     }, [dispatch])

//     return (
//         <div className="attraction">
//             <div className="attractions">
//                 {attractions && attractions.map((attraction) => (
//                     <AttractionDetails key={attraction._category} attraction={attraction} />
//                 ))}
//             </div>
//             <AttractionForm />
//         </div>
//     )
// }