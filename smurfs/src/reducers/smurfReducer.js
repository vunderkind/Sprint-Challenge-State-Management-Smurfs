    import * as types from './actions';    
    
    const initialState = {
            smurfs: [],
            fetchSmurfs: false,
            addSmurf: false,
            updatingSmurf: false,
            deletingSmurf: false,
            error: null	   
        };
    
    export const smurfReducer =( state = initialState, action) =>{
            switch(action.type){
              case types.FETCH_SMURF:
              return{
                ...state,
                err: '',
                fetchingSmurfs: true,
           
              }
              case types.FETCH_SMURF_SUCCESS:
              return{
                ... state,
                err:'',
                smurfs: action.payload
              }
              case types.ADD_SMURF:
              return{
               smurfs: action.payload
              }
           
              case types.FETCH_SMURF_ERROR:
              default:
              return state;
           
           
           
            }	 
        
        };
        