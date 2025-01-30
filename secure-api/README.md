
## Docker Setup

To initialize a new MongoDB instance with Docker, use the following command:

```bash
docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongo_user -e MONGO_INITDB_ROOT_PASSWORD=mongo_password -v ~/mongo-data:/data/db mongo:latest
```
## command for running the server:
```bash
"dev": "nodemon server.js"
```

## environment variables :
```bash
MONGO_URI=mongodb://mongo_user:mongo_password@localhost:27017
JWT_SECRET=supersecretkey
```

# List of errors:
I got this error when initalizing the server

(node:26640) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
(Use `node --trace-warnings ...` to show where the warning was created)
(node:26640) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version

since useNewUrlParser and useUnifiedTopology are obsolete there is no need to use them, instead I chose to use a catch to capture any possible connection error

also added some validations to the register, it didnt check if the user exists before creating



