module.exports = {
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
};