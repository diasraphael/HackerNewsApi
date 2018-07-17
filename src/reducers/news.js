export default function news(state = {
      news:"",
      ids:"",
      newsArray: [],
      userProfile:[]
  }, action) {

    switch (action.type) {

        case "LOADSUCCESS":
        state = {...state, news : action.payload};
        break;

        case "IndividualIDSUCCESS":
        state = {...state, ids : state.newsArray.push(action.payload)};
        break;

        case "UserInfoSUCCESS":
        state = {...state, user : state.userProfile.push(action.payload)};
        break;

        default:
        return state;
    }
return state;
}
