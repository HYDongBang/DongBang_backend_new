import "./env";
import { GraphQLServer, PubSub } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middlewares";
import { uploadMiddleware, uploadController } from "./upload";
import cors from "cors";

const PORT = process.env.PORT || 4000;
const pubsub = new PubSub();

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated, pubsub }),
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);
server.express.post("/api/upload", cors(), uploadMiddleware, uploadController);

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
