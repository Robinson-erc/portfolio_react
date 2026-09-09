const SUMMARY = [
  { label: "Current role", value: "Programmer Analyst" },
  { label: "Since", value: "Nov 2024" },
  { label: "Core stack", value: "C# · SQL · SSRS" },
  { label: "Based in", value: "Philadelphia, PA" },
];

export const Masthead = () => {
  const toContact = () => {
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="masthead" id="home">
        <div className="wrap">
          <p className="eyebrow">Programmer Analyst · Philadelphia, PA</p>
          <h1>Eric Robinson</h1>
          <p className="lede">
            I work on the reporting side of financial software — C#, SQL Server, and SSRS —
            building the internal tools and dashboards that{" "}
            <strong>non-technical teams actually use</strong>. Outside of work I build small
            Python apps for things I want to measure.
          </p>
          <button className="cta" onClick={toContact}>
            Get in touch
          </button>
        </div>
      </header>

      <div className="wrap">
        <dl className="summary">
          {SUMMARY.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
};
