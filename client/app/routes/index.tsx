import { createFileRoute } from "@tanstack/react-router";
import "../_styles/index.css";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="home">
      <div className="texture_overlay"></div>
      <div className="heading">
        <div className="intro">
          <div>hi.</div>
          <div>i'm</div>
          <div>shrestha.</div>
        </div>
        <div className="desc">
          i’m a full stack developer and systems programmer from india, with
          experience in network programming and low-level systems development as
          well.
        </div>
        <div className="contact_buttons">
          <button>resume</button>
          <button>contact</button>
        </div>
      </div>
    </div>
  );
}
