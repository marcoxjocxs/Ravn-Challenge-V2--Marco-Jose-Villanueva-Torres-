
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

// Card de los diferentes personas y/o especies 
const LeftNavLayout = ({data, loading, error}) =>
{
    if(loading)
    {
        return <div className="Loading"><FontAwesomeIcon icon={faSpinner} spin/>Loading</div>

    }
    if(error)
    {
        return <div className="Error">Failed Load Data</div>
    }
    return (
      <div>
          {data ? data.map((person,index)=> 
              <Link key={index} className="card" to={`/${person.id}`}>
                  <div>
                    <h3>{person.name}</h3>
                    <p>{person.species!=null ? person.species.name : "Human"} from {person.homeworld.name}</p>
                  </div>
                  <FontAwesomeIcon icon={faChevronRight} />
              </Link>
          ): null}
      </div>
    );
    
     
}

export default LeftNavLayout;