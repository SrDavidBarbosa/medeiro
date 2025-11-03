// This file sets custom configuration for your application
// copied from @sentry/nextjs.

import * as Sentry from '@sentry/nextjs';

const SentryDashboard = {
    org: 'your-sentry-org',
    project: 'your-sentry-project'
};

Sentry.init({
    dsn: process.env.SENTRY_DSN,

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Only print logs in console when it's not a production build
    debug: process.env.NODE_ENV !== 'production',

    environment: process.env.NODE_ENV,

    // Performance monitoring is enabled by default
    tracesSampleRate: 0.1,

    // For more control over the expressions, you can provide your own sampling functions
    // This is for more granular control over tracing
    tracesSampler: (samplingContext) => {
        // returns a sample rate in the range [0, 1]
        // samplingContext contains information about the current transaction
        const transactionName = samplingContext.transactionContext.name;

        // send a higher sample rate for API routes
        if (transactionName?.includes('/api/')) {
            return 0.5;
        }

        // send a lower sample rate for static pages
        if (transactionName?.includes('/static/')) {
            return 0.05;
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

            // Sanitize request body
            if (event.request.data) {
                const sensitiveFields = ['password', 'token', 'secret', 'credit_card'];
                for (const field of sensitiveFields) {
                    if (event.request.data[field]) {
                        event.request.data[field] = '***REDACTED***';
                    }
                }
            }
        }

        // Example: add custom tags
        event.tags = {
            ...event.tags,
            application: 'medeiro',
            version: process.env.npm_package_version || 'unknown',
            environment: process.env.NODE_ENV || 'development'
        };

        return event;
    }
});

export const onError = Sentry.withSentryAPI((handler, req, res) => {
    return handler(req, res);
});

export const onRequest = Sentry.wrapApiHandlerWithSentry(onError);
