# Climate Change Explorer

Quick project to read some climate data and display it via a React SPA

## Installation

Requires Node 14+ (likely runs on older versions too)

```
npm install
npm run build
npm start
```

If the client build fails, you may need to create a `.env` in the client directory with the following entry:

``` ./client/.env
SKIP_PREFLIGHT_CHECK=true
```

Open [localhost:5000](http://localhost:5000) in your browser to view the application

## Structure

App is split into the server and client. Both the api and frontend are served via the Express app defined in the entrypoint `server/server.js`

## Development

- **Server**: `npm install && npm run debug`
- **Client**: `cd client && npm install && npm start`
