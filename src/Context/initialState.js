import {fetchUser} from "../utils/fetchlocalstorgedata";
const userInfo = fetchUser() 
export const initialState = {
    user: null,
}