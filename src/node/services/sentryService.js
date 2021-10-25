import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import Raven from "raven-js";

function init () {
  Raven.config("https://a684438220674990bf116ea18187d530@o310993.ingest.sentry.io/5849920",
    {
      release: "0-0-0", 
      environment: "development-test"
    }).install() 
}

function ravenLogger(error) {
   console.log(error)
   Raven.captureException(error);
}


function initVer2 () { Sentry.init({
    dsn: "https://a684438220674990bf116ea18187d530@o310993.ingest.sentry.io/5849920",
    integrations: [new Integrations.BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })}

 
export default {
    init,
    ravenLogger,
    initVer2
    
}
  
  



