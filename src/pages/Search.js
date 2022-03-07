import { useState} from "react";
import { gql,useLazyQuery } from '@apollo/client';


const GET_CHARACTER_LOCATIONS =  gql`

  query GetCharacterLocations($name:String!){

     characters(filter:{name:$name }) {

        results {

            location{
                   name

            }


        }



     }









  }






`





function Search() {

    const [name, setName ] = useState("") ;

    const [getLocations,{error,loading,data,called}] = useLazyQuery(GET_CHARACTER_LOCATIONS,
        {

           variables : {
              name,

           }



    }
    
    
    )  ;

    console.log({error,loading,data,called})
    return ( 

            <div>

                <input  value ={name} onChange={(e)=>{setName(e.target.value) }} />
                <button onClick={getLocations()}> Search </button>



            </div>


     );
}

export default Search;