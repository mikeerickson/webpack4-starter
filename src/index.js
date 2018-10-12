import msg from "cd-messenger";
import "./app.css";
import * as dt from "./lib/timestamp";

// TODO: Show this in TODO report
msg.success(" Webpack 4 Starter w/ Babel Integration ");
msg.info(` Rendered ${dt.timestamp(null, false)} `);
