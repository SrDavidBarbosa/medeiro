// This file sets custom configuration for your application
// copied from @sentry/nextjs.

import * as Sentry from '@sentry/nextjs';

const SentryDashboard = {
    org: 'your-sentry-org',
    project: 'your-sentry-project'
};

Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN,

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Only print logs in console when it's not a production build
    debug: process.env.NODE_ENV !== 'production',

    environment: process.env.NODE_ENV,

    replaysOnErrorSampleRate: 1.0,

    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,

    // You can remove this option if you're not planning to use the Sentry
    // Session Replay feature:
    integrations: [
        Sentry.replayIntegration({
            maskAllText: true,
            blockAllMedia: true
        })
    ],

    // For more control over the expressions, you can provide your own sampling functions
    // This is for more granular control over tracing
    tracesSampleRate: (context) => {
        // returns a sample rate in the range [0, 1]
        // context is a Sentry.Transaction and contains information about the current transaction
        const transactionName = context.transactionContext.name;

        // send a higher sample rate for errors
        if (context.transactionContext.op === 'ui.action.click' || transactionName.includes('api')) {
            return 0.5;
        }

        // default sample rate
        return 0.1;
    },

    // Set user information, which gets sent with every error or performance event
    beforeSend(event, hint) {
        // You can modify the event here. For example, you might want to
        // remove PII if the event is an error, or you might want to include
        // additional context for certain types of events.

        // Example: remove sensitive data
        if (event.request) {
            // Remove sensitive headers
            if (event.request.headers) {
                delete event.request.headers.authorization;
                delete event.request.headers.cookie;
            }
        }

        // Example: add custom tags
        event.tags = {
            ...event.tags,
            application: 'medeiro',
            version: process.env.npm_package_version || 'unknown'
        };

        return event;
    },

    beforeSendTransaction(event, hint) {
        // Similar to beforeSend but for performance transactions

        // Add custom context for performance monitoring
        event.contexts = {
            ...event.contexts,
            customContext: {
                application: 'medeiro',
                userAgent: navigator?.userAgent || 'unknown'
            }
        };

        return event;
    },

    // Performance monitoring
    environment: process.env.NODE_ENV

    // Automatic instrumentation is very useful, but in certain edge cases you
    // might want to disable it.
    //instrumenter: "opentelemetry",
});

// If you have a custom export named "initSentry" that calls Sentry.init(),
// you can call that to initialize the SDK. Sentry.init() is called
// automatically before the export.
/**
 * The initSentry function can be called to reinitialize the SDK if it was
 * previously disabled by disableServerSdk and disableBrowserSdk.
 * @returns {void} This function does not return anything
 */
export function initSentry() {
    Sentry.init({
        // Set the sample rate for transactions to 10%
        tracesSampleRate: 0.1,

        // Set the sample rate for browser errors to 100%
        replaysSessionSampleRate: 0.1,

        // This sets the sample rate to be 10%. You may want this to be 100% while
        // in development and sample at a lower rate in production
        replaysOnErrorSampleRate: 1.0,

        // Include default integrations
        integrations: [new Sentry.BrowserTracing()]
    });
}

/**
 * Disable the Sentry SDK for server-side rendering.
 */
export function disableServerSdk() {
    Sentry.disableServerSdk();
}

/**
 * Disable the Sentry SDK for client-side rendering.
 */
export function disableBrowserSdk() {
    Sentry.disableBrowserSdk();
}
