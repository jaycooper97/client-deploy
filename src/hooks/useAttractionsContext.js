import { AttractionsContext } from '../context/AttractionContext';
import { useContext } from 'react';


//hook function
export const useAttractionsContext = () => {
    const context = useContext(AttractionsContext)

    if(!context) {
        throw Error('useAttractionsContext must be used inside an AttractionsContextProvider')
    }

    return context
}