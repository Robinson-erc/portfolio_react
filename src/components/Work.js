export const Work = () => {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="sec-head">
          <h2>Work</h2>
          <span className="count">01</span>
        </div>

        <div className="role">
          <div className="role-top">
            <h3>Reporting &amp; systems integration</h3>
            <span className="role-when">Nov 2024 — present</span>
          </div>
          <p className="role-org">Financial services · Philadelphia, PA</p>
          <p>
            Day to day I work on the reporting and integration side of a core banking
            environment: building internal applications in C# and ASP.NET Core, moving data into
            SQL Server, and producing the dashboards and reports that non-technical teams rely
            on. A good share of the job is scoping work with people who don't write software,
            then supporting them after it ships.
          </p>
        </div>

        <div className="role">
          <div className="role-top">
            <h3>Web development intern</h3>
            <span className="role-when">Aug — Oct 2024</span>
          </div>
          <p className="role-org">Hopeworks · Camden, NJ</p>
          <p>
            Maintained WordPress sites and ran UX audits, focused on accessibility and
            usability improvements.
          </p>
        </div>
      </div>
    </section>
  );
};
