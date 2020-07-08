import gql from 'graphql-tag';

export default gql`
  mutation AddSong($title: String, $id: String){
    addSong(title: $title, id:$id)
  }
`;
