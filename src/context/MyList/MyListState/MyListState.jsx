import { useState } from 'react';
import { MyListContext } from '../MyListContext';

const MyListState = ({ children }) => {
  const [myList, setMyList] = useState([]);

  const addMedia = (media) => {
    media.is_added = !media.is_added;

    if (myList.find((item) => item.id === media.id)) {
      return;
    }

    setMyList([...myList, media]);
  };

  const removeMedia = (media) => {
    media.is_added = !media.is_added;
    setMyList(myList.filter((item) => item.id !== media.id));
  };

  return (
    <MyListContext.Provider
      value={{
        myList,
        addMedia,
        removeMedia
      }}
    >
      {children}
    </MyListContext.Provider>
  );
};

export default MyListState;
