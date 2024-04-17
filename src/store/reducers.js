//reducers/user.js
/**
 * @Description:userReducer
 * @author TangYong
 * @date 2022/5/3
 */
import { combineReducers } from "redux";

const initialState = {
  token: localStorage.getItem('token')? localStorage.getItem('token'): {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'Set_Token':
          let newState = {...state};
          newState.token = action.token;
          state.token = action.token;
          localStorage.setItem('token', action)
          return newState;
      default:
          return state
  }
}

const Reducers = combineReducers({
  userReducer
})

export default Reducers
