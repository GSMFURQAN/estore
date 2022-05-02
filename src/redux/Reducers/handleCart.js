const initialState = [];

export default function addToCart  (state= initialState, action)  {
    const product = action.payload
        switch(action.type){
            case "ADDITEM":
                const exist = state.find((x)=> x.id === product.id);
                if(exist){
                    return state.map((x)=> x.id === product.id ? {...x, qty: x.qty + 1}: x);
                }else{
                    return [...state, {...product, qty:1}]
                }break;
            case "DELITEM":
                const exists = state.find((x)=> x.id === product.id);
                if(exists.qty ===1){
                    return state.filter((x)=> x.id !== product.id);
                }else{
                    return state.map((x)=> x.id === product.id ? {...x, qty: x.qty-1} : x)
                }break;
            // case "CARTITEMS" :
            

                default : return state;
                break;

        }
    
}
console.log( "in reducer", initialState)