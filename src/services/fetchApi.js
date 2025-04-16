const user = async (value) => {
  const response = await fetch(`https://api.github.com/users/${value}`).then(
    (response) => response.json()
  );
  console.log(await response);
  return response;
};

export default user;
