const App = () => {
  const text = 'React is working';
  const Component = () => <h1>{text}</h1>;

  return (
    <>
      <div>
        <Component />
      </div>
    </>
  );
};

export default App;
