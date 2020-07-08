import React from 'react';
import { graphql } from 'react-apollo';
import { BsPlusCircle } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import * as styles from './index.module.css';
import query from '../../queries/fetchSongs';
import deleteSong from '../../mutations/deleteSong';

const Songs = (props) => {
  const history = useHistory();
  const { mutate } = props;
  console.log(props.data);
  const renderSongs = () => props.data.songs.map((song) => (
    <li className={styles.item}>
      <div>
        {song.songId}
      </div>
      <AiFillDelete onClick={() => {
        mutate({
          variables: { id: song.songId },
          refetchQueries: [{ query }],
        });
      }}
      />
    </li>
  ));
  const { loading } = props.data;
  return (
    <>
      <h1>Songs</h1>
      <div className={styles.container}>
        {
        !loading && renderSongs()
      }
      </div>
      <div className={styles.add}>
        <BsPlusCircle onClick={() => { history.push('/songs/create'); }} />
      </div>
    </>
  );
};

export default graphql(deleteSong)(
  graphql(query)(Songs),
);
