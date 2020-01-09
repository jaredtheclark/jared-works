import { InMemoryCache } from "apollo-cache-inmemory";
export default function(context){
  return {
  		httpLinkOptions: {
    		uri: 'https://jared-works.herokuapp.com/v1/graphql',
        credentials: 'same-origin',
        headers: {
          'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET
        }
  		},
  		cache: new InMemoryCache(),
	    //wsEndpoint: 'ws://jared-works.herokuapp.com/v1/graphql',
  	}
}
