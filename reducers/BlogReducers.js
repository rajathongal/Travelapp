export default function(state={}, action){
    switch(action.type){
        case "BLOGS_FETCH":
            console.log(action.payload)
            return {
                ...state,
                
            }
        default:
            return state
    }
}