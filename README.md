# DJL Foundation

The public site for DJL Foundation, an independent project umbrella and archive created by Jack Ruder.

DJL Foundation is not currently a formally incorporated foundation or registered association.

## Stack

- TanStack Start
- React and TypeScript
- Tailwind CSS
- Nitro with a Vercel-compatible configuration

## Local development

```sh
bun install
bun run dev
```

Run `bun run build`, `bun run typecheck`, and `bun run lint` before publishing.

## Container

Build and start the production container locally with Docker Compose:

```sh
docker compose -f compose.yaml -f compose.local.yaml up --build
```

The site is available at <http://localhost:3000>. Set `APP_PORT` to publish it
on a different host port, for example `APP_PORT=8080 docker compose -f compose.yaml -f compose.local.yaml up --build`.
For Dokploy, deploy `compose.yaml` and configure the service domain to use port
3000; the Compose file exposes that port only to the Dokploy network.

## Editing the catalogue

Project records live in [src/content/projects.ts](src/content/projects.ts). Add a typed entry there. Keep unknown dates, statuses, and links explicit instead of guessing.
