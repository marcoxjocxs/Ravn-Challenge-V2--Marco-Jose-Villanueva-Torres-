import {gql} from "@apollo/client";

export const ALLPEOPLE_QUERY = gql 
   `query People($first:Int,$after:String)
   {
        allPeople(first:$first,after:$after)
        {
            pageInfo{endCursor}
            people
            {
                id
                name
                birthYear
                eyeColor
                hairColor
                skinColor
                homeworld{name}
                vehicleConnection
                {
                    vehicles{name}
                }
                species{name}
            }
        }
    }
   `
export const PEOPLE_QUERY = gql
`query Person($personId:ID)
{
    person(id:$personId)
    {
        id
        name
        birthYear
        eyeColor
        hairColor
        skinColor
        vehicleConnection
        {
            vehicles{name}
        }
    }
 }
`