const PROJECTS = [
  {
    name: "FinanceChart",
    stack: "Python · Tkinter · Pillow",
    what: "Desktop budget tracker for recurring bills and income.",
    year: "2026",
    links: [{ label: "repo", url: "https://github.com/Robinson-erc/FinanceChart" }],
  },
  {
    name: "Spotify Top 20",
    stack: "Python · Spotify API · Matplotlib · Tkinter",
    what: "GUI app that graphs genre insights and trends across a user's top tracks.",
    year: "2024",
    links: [{ label: "repo", url: "https://github.com/Robinson-erc/SpotifyTop20" }],
  },
  {
    name: "Movie Mania",
    stack: "JavaScript · TMDB API · JSON",
    what: "Searchable movie app with a watchlist and recommendation engine.",
    year: "2024",
    links: [{ label: "live", url: "https://movi3mania.netlify.app/" }],
  },
];

export const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="sec-head">
          <h2>Projects</h2>
          <span className="count">02</span>
        </div>

        <div className="scroller">
          <table className="ledger">
            <thead>
              <tr>
                <th>Project</th>
                <th>Stack</th>
                <th>What it does</th>
                <th>Year</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {PROJECTS.map((project) => (
                <tr key={project.name}>
                  <td className="name">{project.name}</td>
                  <td className="stack">{project.stack}</td>
                  <td className="what">{project.what}</td>
                  <td className="year">{project.year}</td>
                  <td className="links">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
