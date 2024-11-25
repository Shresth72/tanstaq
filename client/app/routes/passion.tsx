import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/passion")({
  component: Passion,
});

function Passion() {
  return (
    <>
      <div>Passionate</div>
    </>
  );
}
