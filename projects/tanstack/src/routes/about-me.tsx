import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Über mich</div>
}
