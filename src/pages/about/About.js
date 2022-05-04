import HomeLink from "../../components/HomeLink/HomeLink";
import "./About.css";

function About() {
  const currentYear = new Date().getFullYear();
  const experience = currentYear - 2013;
  const certifications = [
    {
      name: "Professional Scrum Master™ I (PSM I)",
      certLink:
        "https://www.credly.com/badges/fa900ce1-0421-4a70-9741-f605e48ba65f?source=linked_in_profile",
      org: "Scrum.org",
      orgLink: "https://www.credly.com/organizations/scrum-org/badges",
      date: "Jun 2020",
    },
    {
      name: "Exam 480: Programming in HTML5 with JavaScript and CSS3",
      certLink:
        "https://www.credly.com/badges/6a98702a-a3f1-46ee-8211-e5b830a12937/linked_in_profile",
      org: "Microsoft",
      orgLink:
        "https://www.credly.com/organizations/microsoft-certification/badges",
      date: "Dec 2018",
    },
    {
      name: "Oracle Certified Associate, Java SE 8 Programmer",
      certLink:
        "https://www.credly.com/badges/1d633d8b-56c9-4b2c-928e-a23de65a8823/linked_in_profile",
      org: "Oracle",
      orgLink: "https://www.credly.com/organizations/oracle/badges",
      date: "Dec 2018",
    },
    {
      name: "Data Scientist with R Track",
      certLink:
        "https://www.datacamp.com/statement-of-accomplishment/track/3120f7203097bfa4cdfbc0aaa1961d5790d3c496",
      org: "Datacamp",
      orgLink: "https://www.datacamp.com",
      date: "Jul 2017",
    },
    {
      name: "Analytics and Business Intelligence - USF",
      certLink:
        "https://catalog.usf.edu/preview_program.php?catoid=9&poid=2813&returnto=968",
      org: "SAS",
      orgLink: "https://www.sas.com/en_us/home.html",
      date: "May 2017",
    },
  ];
  const education = [
    {
      name: "Masters in Management and Information Systems",
      org: "University of South Florida",
      date: "Dec 2017",
    },
    {
      name: "Bachelor of Engineering",
      org: "Osmania University - Vasavi College of Engineering",
      date: "Jul 2013",
    },
  ];
  return (
    <div className="page-wrapper about-wrapper">
      <HomeLink />
      <h2>About</h2>
      <h4>
        Hi, I'm Sai. I'm a Jack of all trades with {experience}+ years of
        experiece in wide range of technologies which make lives easier.
      </h4>
      <p>
        You can call me a Front end Developer, Full Stack Developer, Scrum
        Master, UI Designer, Data Analyst, Data Scientist, QA or by any other
        title. I'm a multi-disciplinary developer with over {experience} years
        of experience in multiple domains such as Home Health, Healthcare,
        Locums, Pharmaceutical, Insurance, Supply Chain, Retail, Banking and
        more.
      </p>
      <p>
        My abundant energy fuels me in pursuit of many interests, hobbies and
        skills. I'm a quick learner, able to pick up new skills and juggle
        different projects and roles with relative ease. I'm passionate,
        expressive, multi-talented who loved to lead by example. I like to keep
        myself up to date with latest technologies and develop expertise in
        number of skills and domains.
      </p>
      <p>
        <solid>
          <a
            className="blue-color sliding-text"
            href="https://bit.ly/saikrishna-resume"
            target="_blank"
            rel="noreferrer"
          >
            My Resume
          </a>
        </solid>
      </p>
      <h3>Certifications</h3>
      <ul className="list-items">
        {certifications.map((cert) => (
          <li>
            <a href={cert.certLink} target="_blank" rel="noreferrer">
              {cert.name}
            </a>
            <a
              className="org-name"
              href={cert.orgLink}
              target="_blank"
              rel="noreferrer"
            >
              {cert.org}
            </a>
            <small>Issued {cert.date}</small>
          </li>
        ))}
      </ul>
      <h3>Education</h3>
      <ul className="list-items">
        {education.map((edu) => (
          <li>
            <span>{edu.name}</span>
            <span className="org-name">{edu.org}</span>
            <small>Issued {edu.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
