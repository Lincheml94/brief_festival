import './index.css' // css import is automatically injected in exported server components
import RouterService from './services/router_service.ts'
const routerService = new RouterService();

export function Root(props: { url: URL }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Joyfest</title>
      </head>
      <body>
        <App {...props} />
      </body>
    </html>
  )
}
function App(props: { url: URL }) {
  return (
    <div id="root">
      {/* {routerService.getRouter(props.url)} */}

    </div>
  )
}