import Sentry from 'raven-js';

function init() {
    Sentry.config(
    'https://5b09bd0adfa54229a7c410841a6a80a8@sentry.io/1374189',
    { 
        release: '0-0-0',
        environment: 'development-test'
    });
}

function log(error) {
    Sentry.captureException(error);
    console.log("Error catched:",error);
}

export default {
    init,
    log
};