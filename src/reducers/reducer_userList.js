import { FETCH_USERLIST } from '../actions/index';


export default function(state=[], action) {
    switch (action.type) {
        case  FETCH_USERLIST : console.log(action.payload.data);
        return action.payload.data.items;
    }
    return state;
}