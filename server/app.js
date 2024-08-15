import { Server } from "./src/presentation/server.js";

(async () => {
  main();
})();

function main() {
  Server.start();
}
