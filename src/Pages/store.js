import {createStore} from 'redux'



export default createStore((state, action)=> {
    if(state===undefined) {
        return {user: {
            userEmail : 'undefined@gmail.com'
        }}
    }
    if(action.type==='LOGIN') {
        return { ...state, user : {
            userEmail : 'result@gmail.com'
        }}
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
