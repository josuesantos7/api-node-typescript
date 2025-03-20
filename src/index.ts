import { server } from "./server/server";

const PORT = 3020;

server.listen(PORT, () => console.log(`Aplicação rodando na porta: http://localhost:${PORT}/.`));