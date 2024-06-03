import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

const mocker = setupWorker(...handlers);

export default mocker;
