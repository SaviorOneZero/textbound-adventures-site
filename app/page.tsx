const adventures = [
  {
    number: "01",
    title: "Flight 217",
    subtitle: "The Endless Storm",
    copy: "A midnight flight enters a storm that refuses to end.",
    tone: "storm",
  },
  {
    number: "02",
    title: "Murder on the",
    subtitle: "Orient Express",
    copy: "Every passenger has a story. One of them has a secret.",
    tone: "express",
  },
  {
    number: "03",
    title: "The Forgotten",
    subtitle: "Crypt",
    copy: "Below the old city, a sealed door is waiting to be opened.",
    tone: "crypt",
  },
  {
    number: "04",
    title: "Eamon",
    subtitle: "Classics",
    copy: "Landmark adventures, rediscovered for a new generation.",
    tone: "eamon",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="Textbound Adventures home">
            <span className="wordmark-mark">T</span>
            <span>TEXTBOUND</span>
          </a>
          <div className="nav-links">
            <a href="#adventures">Adventures</a>
            <a href="#platform">Platform</a>
            <a href="#quest">Quest Platforms</a>
          </div>
          <a className="nav-cta" href="#adventures">Explore</a>
        </nav>

        <div className="hero-content wrap">
          <p className="eyebrow">Interactive fiction, reimagined</p>
          <h1>Every word<br />opens a world.</h1>
          <p className="hero-copy">Textbound Adventures brings the wonder of classic text adventures to iPhone, iPad, and Mac—made for curious minds and long nights.</p>
          <a className="button" href="#adventures">Discover the adventures <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-glow" />
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-star star-one" />
          <div className="orbit-star star-two" />
          <div className="orbit-star star-three" />
          <div className="orbit-compass">✦</div>
        </div>
        <p className="scroll-hint">SCROLL TO BEGIN <span>↓</span></p>
      </section>

      <section className="introduction wrap" id="platform">
        <p className="eyebrow">A new kind of reading</p>
        <div className="intro-grid">
          <h2>Stories that<br /><em>listen back.</em></h2>
          <div>
            <p>Part book, part game, entirely your own. Textbound puts you at the center of intricate worlds where what you notice, carry, and choose shapes what happens next.</p>
            <p>Explore strange places. Solve layered puzzles. Speak with memorable characters. Find the path nobody else did.</p>
          </div>
        </div>
      </section>

      <section className="adventure-section" id="adventures">
        <div className="wrap section-heading">
          <div>
            <p className="eyebrow">Opening soon</p>
            <h2>Featured <em>adventures.</em></h2>
          </div>
          <p>Four worlds to get lost in.<br />Many more on the horizon.</p>
        </div>
        <div className="cards wrap">
          {adventures.map((adventure) => (
            <article className={`adventure-card ${adventure.tone}`} key={adventure.number}>
              <div className="card-sky" aria-hidden="true"><span /></div>
              <div className="card-top"><span>TEXTBOUND / {adventure.number}</span><span>COMING SOON</span></div>
              <div className="card-copy">
                <p className="card-type">Interactive mystery</p>
                <h3>{adventure.title}<br /><em>{adventure.subtitle}</em></h3>
                <p>{adventure.copy}</p>
              </div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="how wrap">
        <p className="eyebrow">Your story, your way</p>
        <h2>How it <em>works.</em></h2>
        <div className="steps">
          <article><span>01</span><h3>Read the room</h3><p>Rich prose pulls you in. Every detail could matter.</p></article>
          <article><span>02</span><h3>Make a move</h3><p>Type what you want to try, or choose a path forward.</p></article>
          <article><span>03</span><h3>See what follows</h3><p>Choices open doors, close others, and make the story yours.</p></article>
        </div>
      </section>

      <section className="devices">
        <div className="wrap devices-content">
          <div><p className="eyebrow">Available wherever you wander</p><h2>One adventure.<br /><em>Any screen.</em></h2><p>Pick up a thread on the train, settle in at home, and let the story follow you.</p></div>
          <div className="device-visual" aria-label="Textbound Adventures is coming to iPhone, iPad, and Mac">
            <div className="device mac"><div className="screen"><small>FLIGHT 217</small><strong>You wake to a bell.</strong><span>The cabin is empty. Outside, the storm stretches beyond the windows.</span><b>› Look around</b></div></div>
            <div className="device tablet"><div className="screen"><small>THE FORGOTTEN CRYPT</small><strong>There is a door in the dark.</strong><b>› Examine the door</b></div></div>
            <div className="device phone"><div className="screen"><small>TEXTBOUND</small><strong>The story is waiting.</strong><b>› Begin</b></div></div>
          </div>
          <div className="platforms"><span>iPhone</span><span>iPad</span><span>Mac</span></div>
        </div>
      </section>

      <section className="quest wrap" id="quest">
        <div><p className="eyebrow">From the studio</p><h2>Quest <em>Platforms.</em></h2></div>
        <p>Quest Platforms is an independent studio making thoughtful, lasting experiences for people who still believe a good idea can take them somewhere.</p>
        <a href="mailto:hello@questplatforms.com">Visit Quest Platforms <span>↗</span></a>
      </section>

      <footer>
        <div className="wrap footer-main"><a className="wordmark" href="#top"><span className="wordmark-mark">T</span><span>TEXTBOUND</span></a><p>Interactive fiction for the curious.</p><a href="mailto:hello@questplatforms.com">hello@questplatforms.com</a></div>
        <div className="wrap footer-bottom"><span>© 2026 Quest Platforms</span><span>Made for readers, explorers &amp; night owls.</span></div>
      </footer>
    </main>
  );
}
