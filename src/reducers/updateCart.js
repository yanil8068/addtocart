const initialState = {
    cart : []
}

const updateCart = (state= initialState, action)=> {
    switch (action.type){
        case "ADDTOCART" :
const rating = { ...action.payload.rating, count: 1}

            return {
                ...state, cart: [...state.cart, {...action.payload, rating}]
            }
            default:
                return state
    }
}

export default updateCart;