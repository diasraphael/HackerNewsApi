import initialState from './initialState';


function actionTypeEndsInSuccess(type){
    return type.includes('SUCCESS');
}
export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    if(action.type === 'BEGIN_AJAX_CALL'){
        return state +1;
    }else if(actionTypeEndsInSuccess(action.type)){
        return state -1;
    }
    return state;
}