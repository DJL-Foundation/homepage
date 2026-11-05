export function SiteShell() {
  return (
    <main className="maintenance" aria-labelledby="maintenance-title">
      <div className="maintenance-copy">
        <p className="eyebrow">DJL FOUNDATION</p>
        <h1 id="maintenance-title">Boots on. Back soon.</h1>
        <p className="maintenance-message">
          The site is under maintenance while Bootcat gets things back in order.
        </p>
        <a className="button button-primary" href="https://jack.djl.foundation">
          Get to know Jack
        </a>
      </div>
      <img
        className="maintenance-cat"
        src="/bootcat-working.svg"
        alt="Bootcat repairs a server with a hammer while wearing orange work boots."
        width="768"
        height="576"
      />
    </main>
  );
}
