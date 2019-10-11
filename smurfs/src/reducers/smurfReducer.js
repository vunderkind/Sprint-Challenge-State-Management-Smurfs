    import * as types from './actions';    
    
      const initialState = {
            smurfs: [],
            fetchingSmurfs: false,
            addingSmurf: false,
            updatingSmurf: false,
            deletingSmurf: false,
            error: null	   
        }
    

        export const smurfReducer = (state = initialState, action) => {
            switch(action.type) {
                case types.FETCH_SMURF: {
                    return Object.assign({}, state, { fetchingSmurfs: true });
                }

                }
            };

 
    /*	  const rootReducer = (state = initialState, action)=> {
      You'll only need one smurf reducer for this project.	      switch(action.type){
      Feel free to export it as a default and import as rootReducer. 	          case FETCH_SMURF: {
      This will guard your namespacing issues.	              return  Object.assign({}, state, { fetchingSmurfs: true });
      There is no need for 'combineReducers' in this project.	          }
      Components can then read your store as, `state` and not `state.fooReducer`.	          case FETCH_SMURF_SUCCESS: {
    */	             
   
   /*
    return Object.assign ({}, state, {
                     smurfs: [...state.smurfs, ...action.payload],
                     fetchingSmurfs: false
                  });
                  }
    
             case FETCH_SMURF_ERROR:{
                 return Object.assign ({}, state, {
                     fetchingSmurfs:false,
                     error: 'ERROR fetching smurfs'
                 });
                }
    
    
              case ADD_SMURF: 
                return  {
                    ...state,
                    fetchingSmurfs: false,
                    addingSmurf: true,
                    error: ''
                }
    
                case ADD_SMURF_SUCCESS: {
                    return {
                        ...state,
                        smurfs: action.payload,
                        fetchingSmurfs:false,
                        addingSmurf: false,
                        error: ''
                    } 
                }
                case ADD_SMURF_FAILURE:
           return {
            ...state,
            fetchingSmurfs: false,
            addingSmurf: false,
            error: action.payload,
          }
    
    
              case DELETE_SMURF:{
                  return {
                      ...state,
                      updatingSmurf:true
                  }
              }
    
              default: return state
          }
    
    
    
    
      }
    
    
      export default rootReducer 

      */