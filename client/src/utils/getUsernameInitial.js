const getUsernameInitial = (username) => {
  if (username.split(" ").length === 2) {
    return username.split(" ")[0][0] + username.split(" ")[1][0];
  } else {
    return username[0];
  }
};

export default getUsernameInitial;
