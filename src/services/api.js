export const getUsers = async () => {
  try {
    let response = await fetch('http://192.168.42.74:3001/users');
    let json = await response.json();
    return json.users;
  } catch (error) {
    console.error(error);
  }
};

// export const deleteUser = () => {
//   fetch('http://192.168.42.74:3001/users' + id, {
//     method: 'DELETE',
//   })
//     .then(res => res.json())
//     .then(res => console.log(res));
// };

// export const postUser = () => {
//   const formData = new FormData();
//   formData.append('first_name', users.name);
//   formData.append('last_name', users.email);
//   formData.append('email', users.fone);
//   formData.append('email', users.birthday);
//   formData.append('email', users.cpf);
// or res.json()

//   createNewProfile(profile)
//     .then(json => {})
//     .catch(error => error);
