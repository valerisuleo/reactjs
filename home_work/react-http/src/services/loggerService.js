import * as Sentry from '@sentry/browser';

function init() {
    Sentry.init({ dsn: "https://b2f4d1984383428ba0dfd2558743578a@sentry.io/5183105" });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
}

