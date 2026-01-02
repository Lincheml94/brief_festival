import { createFromReadableStream } from "@vitejs/plugin-rsc/ssr";
import { renderToReadableStream as renderHTMLToReadableStream } from "react-dom/server.edge";
import {
  unstable_RSCStaticRouter as RSCStaticRouter,
  unstable_routeRSCServerRequest as routeRSCServerRequest,
} from "react-router";

export async function generateHTML(
  request: Request,
  fetchServer: (request: Request) => Promise<Response>,
): Promise<Response> {
  // ✅ 1) on récupère la réponse RSC du serveur
  const serverResponse = await fetchServer(request);

  // ✅ 2) on passe serverResponse à React Router
  return await routeRSCServerRequest({
    request,
    serverResponse,
    createFromReadableStream,
    async renderHTML(getPayload) {
      const payload = getPayload();

      const bootstrapScriptContent =
        await import.meta.viteRsc.loadBootstrapScriptContent("index");

      return await renderHTMLToReadableStream(
        <RSCStaticRouter getPayload={getPayload} />,
        {
          bootstrapScriptContent,
          formState: payload.formState,
        },
      );
    },
  });
}