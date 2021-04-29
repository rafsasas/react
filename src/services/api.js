const baseURL = 'http://192.168.42.206:3001/users';

export const getUsers = async () => {
  try {
    let response = await fetch(baseURL);
    let json = await response.json();
    return json.users;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async id => {
  try {
    let response = await fetch(`${baseURL}/${id}`, {
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
