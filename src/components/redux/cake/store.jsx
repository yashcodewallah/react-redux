import  {legacy_createStore} from "redux"
import reducer from "./cakeReducer"

const store=legacy_createStore(reducer)

export default store