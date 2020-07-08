import gql from 'graphql-tag';

export default gql`
    mutation DeleteSong($id: String){
        deleteSong(id: $id)
    }
`;
