List of errors:

I got this error when initalizing the server

(node:26640) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
(Use `node --trace-warnings ...` to show where the warning was created)
(node:26640) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version

since useNewUrlParser and useUnifiedTopology are obsolete there is no need to use them, instead I chose to use a catch to capture any possible connection error




