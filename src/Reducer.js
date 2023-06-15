const initialState = {
    login:false,
    name:"",
    email:"",
    image:""
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            return {
              ...state,
                login:true,
                name:action.payload.name,
                email:action.payload.email,
                image:action.payload.image
            }
        case "LOGOUT":
            return {
              ...state,
                login:false,
                name:"",
                email:"",
                image:""
            }
        default:
            return state
    }
}