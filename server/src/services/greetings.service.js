const GreetingsServices = () => {
  const getGreetings = (_, res) => {
    res.status(200).send({message: "Hello, World!"});
  };

  return {
    getGreetings,
  };
};

export default GreetingsServices;
