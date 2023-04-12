
const initialState = []

const conatctReducer = (state=initialState,action)=>{
    switch(action.type) {
        case "CONTACTS":{
            return [...state,action.payload]
        }

        default : {
            return state
        
        }
    }
   

    
}

export default conatctReducer

