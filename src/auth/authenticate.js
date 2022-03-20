import axios from "axios";

const getUserById = async (id) => {
  try {
    const user = await axios.get(
      `https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/${id}`
    );
    return user?.data;
  } catch (error) {}
};

const getAllUserById = async () => {
  let id = 1;
  let user = await getUserById(id);
  let listUser = [];

  while (user) {
    id++;
    user = await getUserById(id);
    if (!user) {
      break;
    }
    listUser.push(user);
  }
  localStorage.setItem("users", JSON.stringify(listUser));
};

const getUser = (userInput) => {
  const listUser = JSON.parse(localStorage.getItem("users"));
  const user = listUser?.find(
    (user) =>
      user.username === userInput.userName &&
      user.password === userInput.passWord
  );
  return user;
};

const authenticate = (userInput) => {
  try {
    const listUser = JSON.parse(localStorage.getItem("users"));

    if (!listUser) {
      return false;
    }

    const isAuthenticated = listUser?.some(
      (user) =>
        user.username === userInput.userName &&
        user.password === userInput.passWord
    );
    return isAuthenticated;
  } catch (error) {}
};

export { authenticate, getAllUserById, getUser };
