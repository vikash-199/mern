const withAuth = (Comp) => {
  const ProtectedComp = (props) => {
    const isLoggedIn = !!localStorage.getItem('token');

    if (!isLoggedIn) {
      return <p>Login required</p>;
    }
    return <Comp {...props} />;
  };

  return ProtectedComp;
};

export default withAuth;
