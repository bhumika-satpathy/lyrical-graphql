# lyrical-graphql
A short full stack app, addressing all the basic mutations and queries using a lyrical theme using client-side and server based GrapgQL backend.

There are separate branches for both the front-end and the back-end. Kindly switch to separate branches for the respective codebase. 
Backend runs in port: 4000 and has the following uri where the queries and mutations are done: 'http://localhost:4000/graphql'
Frontend runs in port: 3000 and has an uri: 'http://localhost:3000'.

Note: 
1. There is a cors issue which had to be addressed and hence I used cors using express-grapgql. THE config of the apollo client has to be changed in order to 
allow separate uri respectively.  
