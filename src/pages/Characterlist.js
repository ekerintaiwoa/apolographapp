
import React from 'react';
import { useQuery,gql } from '@apollo/client';
import './Characterlist.css'
import { useCharacters } from './../hooks/useCharacters';
import { Link, useParams } from 'react-router-dom';

//to make query ,we need gql

 /*const GET_CHARACTERS = gql`

  query {

      characters {

         results{

             id 
             name
             image


         }




      }





  }





`

*/



function Characterlist() {
     
   // const obj = useQuery(GET_CHARACTERS) ;

    // const {error, data, loading } = useQuery(GET_CHARACTERS) ;
   //console.log({error,loading,data}) 


      // we get thre main properties from the object, error, loading, data . obj.loading, obj.error, obj.data
        
      const {error, loading,data} = useCharacters() ;
   
      if (loading ){

        return <div> spinner...</div>
      } ;

      if(error){

        return <div> something went wrong</div>
      }






    return ( 

         <div className='characterlist'>

          {data.characters.results.map(character=>{

              return <Link to={`/${character.id}`}>

                  <img src= {character.image} />
                  <h2>{character.name}</h2>
              </Link>

          })}


         </div>



     );
}

export default Characterlist;