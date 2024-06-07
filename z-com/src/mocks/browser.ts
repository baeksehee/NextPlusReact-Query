import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

const wocker = setupWorker(...handlers);

export default wocker;
