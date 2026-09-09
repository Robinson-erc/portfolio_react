const GROUPS = [
  {
    title: "Languages",
    items: ["C#", "SQL", "JavaScript", "Python", "Java"],
  },
  {
    title: "Frameworks & APIs",
    items: ["ASP.NET Core / .NET", "REST", "SOAP", "React"],
  },
  {
    title: "Data & reporting",
    items: ["Symitar PowerOn", "SQL Server", "Report Builder (SSRS)", "Power BI", "Pandas · NumPy"],
  },
  {
    title: "Practice",
    items: ["Agile / Scrum", "Waterfall", "Jira", "Git"],
  },
];

export const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="sec-head">
          <h2>Skills</h2>
          <span className="count">03</span>
        </div>

        <div className="skills">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
