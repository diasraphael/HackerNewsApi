export function loadContent(requestUrl) {
    return dispatch => {
     dispatch(beginAjaxCall());
     return fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((response) => {
        return response.json();
    
      }).then((stories) => {
            dispatch({
            type: "LOADSUCCESS",
            payload: stories
          });
          for(var i=0;i<=9;i++){
              dispatch(loadNews(stories));
          }
          
      }).catch((err) => {
          console.log("There has been error");
        })

      
    };
  }


  export function loadNews(topStories) {
    return dispatch => {
      dispatch(beginAjaxCall());
      var randomNumber = topStories[Math.floor(Math.random() * topStories.length)];
      fetch('https://hacker-news.firebaseio.com/v0/item/'+randomNumber+'.json?print=pretty').then((response) => {
                    return response.json();
                  
    
      }).then((output) => {
            dispatch({
            type: "IndividualIDSUCCESS",
            payload: output
          });
      }).catch((err) => {
          console.log("There has been error");
        })

      
    };
  }

  
  export function loadUserInfo(indexedData) {
    return dispatch => {
      dispatch(beginAjaxCall());
      fetch('https://hacker-news.firebaseio.com/v0/user/'+indexedData.by+'.json?print=pretty').then((response) => {
            return response.json();
      }).then((output) => {
            dispatch({
            type: "UserInfoSUCCESS",
            payload: output
          });
      }).catch((err) => {
          console.log("There has been error");
      })
    };
  }


export function beginAjaxCall(){
  return {type: 'BEGIN_AJAX_CALL'};
}
