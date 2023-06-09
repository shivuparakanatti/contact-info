const initialState = []

const conatctReducer = (state=initialState,action)=>{
    switch(action.type) {

        case "CONTACTS":{
            return [...state,action.payload]
        }

        case 'CLEAR_ALL' : {
            return initialState
        }

        case 'CANCEL' : {
            return action.payload
        }

        case 'SEARCH_OUTPUT' :{
            return action.payload
        }


        default : {
            return state
        }
    }
   
}

export default conatctReducer

