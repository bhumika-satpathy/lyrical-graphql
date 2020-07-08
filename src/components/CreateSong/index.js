import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { useHistory } from 'react-router-dom';
import * as styles from './index.module.css';
import query from '../../queries/fetchSongs';
import addSongs from '../../mutations/addSongs';

const CreateSong = (props) => {
  const [inputSong, setInputSong] = useState('');
  const [id, setId] = useState('');
  const { mutate } = props;
  const history = useHistory();

  return (
    <div className={styles.newSong}>
      <h1 className={styles.head}>Want a new song ? Add it.</h1>
      <div className={styles.songForm}>
        <div className={styles.createSong}>
          <h2>ID: </h2>
          <input onChange={(event) => {
            setId(event.target.value);
          }}
          />
          <h2>Title: </h2>
          <input onChange={(event) => {
            setInputSong(event.target.value);
          }}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            mutate({
              variables: { title: inputSong, id },
              refetchQueries: [{ query }],
            });
            history.push('/');
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default graphql(addSongs)(CreateSong);
