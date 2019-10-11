import React from 'react'
import {fetchSmurfs, addSmurf} from '../reducers/actions';
import {connect} from 'react-redux';
import {smurfReducer} from '../reducers/smurfReducer';


class Smurfs extends React.Component{
    componentDidMount(){
        this.props.fetchSmurfs()
        // this.props.addSmurfs();
        // this.props.postSmurf();
    }

     render(){

         return (
            <div>
             <h2>SMURFS!!</h2>
             {this.props.smurfs.map (smurf => {

                 return (
                     <div className='smurfs' key={smurf.id}>
                         <h2>{smurf.name}</h2>
                         <p>age :{smurf.age}</p>
                         <p> height:{smurf.height}</p>



                         </div>
                 )
             })}


            </div>
        )
    }



 }
 const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect (
    mapStateToProps,
    {fetchSmurfs, addSmurf}
)(Smurfs)