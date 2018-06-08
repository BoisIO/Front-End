import { combineReducers } from "redux";

import streams from './stream/reducers/streams'
import user from './authentication/reducers/user'

export default combineReducers({
    streams, user
})