let initialState={
    favorties:[]
}

export default function languageReducer(state=initialState,action){
    switch (action.type) { 
        case 'SET_Favorite' :
            let isInFavorite=state.favorties.findIndex(
                (movie)=>movie.id==action.payload.id
            )
            if(isInFavorite===-1){
                state.favorties.push(action.payload)
            }
            return state;
    
        default:
            return state;
            
    }

}