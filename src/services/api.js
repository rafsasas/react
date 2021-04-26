export const getUsers = async () => {
  try {
    let response = await fetch('http://192.168.42.74:3001/users');
    let json = await response.json();
    return json.users;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async id => {
  try {
    let response = await fetch(`http://192.168.42.74:3001/users/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// export const postUser = async () => {
//   try {
//     const requestPost = {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({title: 'React POST Request Example'}),
//     };
//     fetch('http://192.168.42.74:3001/users', requestPost),
//     const json = await requestPost.json();
//   } catch (error) {
//     console.error(error);
//   }
// };

export const postUser = async () => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title: 'React POST Request Example'}),
  };
  const response = await fetch(
    'http://192.168.42.74:3001/users',
    requestOptions,
  );
  const data = await response.json();
  this.setState({postId: data.id});
};
