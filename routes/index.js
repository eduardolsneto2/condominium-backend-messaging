import Chat from './chat.js';
const Router = (server) => {
  // home route with the get method and a handler
  server.use('/chats', Chat);
};
  export default Router;