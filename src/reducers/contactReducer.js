
const initialState = []

const conatctReducer = (state=initialState,action)=>{
    switch(action.type) {
        case "CONTACTS":{
            return [...state,action.payload]
        }

        case 'CLEAR_ALL' : {
            return initialState
        }

        default : {
            return state
        
        }
    }
   

    
}

export default conatctReducer

