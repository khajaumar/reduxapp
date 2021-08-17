
const initialState = {
    empData:[
        {
            name:"Khaja Noman",
            age:"22",
            add:"Umar Colony"
        },
        {
            name:"Shaikh javed",
            age:"29",
            add:"Noori Colony"
        },
        {
            name:"Aamer Khan",
            age:"28",
            add:"Bafna nanded."
        },
        {
            name:"Umar Farooq",
            age:"27",
            add:"Umar Colony"
        }
    ],
};
export const empReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_EMP":
            return {...state, empData:[action.empData, ...state.empData] };
            default:
                return state;
    }
};