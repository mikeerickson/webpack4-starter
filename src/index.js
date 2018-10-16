import msg from "cd-messenger";
import "./app.css";
import { timestamp } from "./lib/timestamp";
console.log();

// TODO: Show this in TODO report
// FIXME: This should be fixed
// INFO: This is some information
// REVIEW: This needs to be reviewed
msg.success(" Webpack 4 Starter w/ Babel Integration ");
msg.info(` Rendered ${timestamp(null, false)} `);
