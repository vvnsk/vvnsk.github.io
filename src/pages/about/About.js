import HomeLink from "../../components/HomeLink/HomeLink";

function About() {
  let currentYear = new Date().getFullYear();
  let experience = currentYear - 2013;
  return (
    <div className="page-wrapper">
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
      <h3>Certifications</h3>
      <ul className="list-items">
        <li>
          <a href="https://www.credly.com/badges/fa900ce1-0421-4a70-9741-f605e48ba65f?source=linked_in_profile">
            Professional Scrum Master™ I (PSM I)
          </a>
          <a
            className="org-name"
            href="https://www.credly.com/organizations/scrum-org/badges"
          >
            Scrum.org
          </a>
          <small>Issued Jun 2020</small>
        </li>
        <li>
          <a href="https://www.credly.com/badges/6a98702a-a3f1-46ee-8211-e5b830a12937/linked_in_profile">
            Exam 480: Programming in HTML5 with JavaScript and CSS3
          </a>
          <a
            className="org-name"
            href="https://www.credly.com/organizations/microsoft-certification/badges"
          >
            Microsoft
          </a>
          <small>Issued Dec 2018</small>
        </li>
        <li>
          <a href="https://www.credly.com/badges/1d633d8b-56c9-4b2c-928e-a23de65a8823/linked_in_profile">
            Oracle Certified Associate, Java SE 8 Programmer
          </a>
          <a
            className="org-name"
            href="https://www.credly.com/organizations/oracle/badges"
          >
            Oracle
          </a>
          <small>Issued Dec 2018</small>
        </li>
        <li>
          <a href="https://www.datacamp.com/statement-of-accomplishment/track/3120f7203097bfa4cdfbc0aaa1961d5790d3c496">
            Data Scientist with R Track
          </a>
          <a className="org-name" href="https://www.datacamp.com">
            Datacamp
          </a>
          <small>Issued Jul 2017</small>
        </li>
        <li>
          <a href="https://catalog.usf.edu/preview_program.php?catoid=9&poid=2813&returnto=968">
            Analytics and Business Intelligence - USF
          </a>
          <a className="org-name" href="https://www.sas.com/en_us/home.html">
            SAS
          </a>
          <small>Issued Nay 2017</small>
        </li>
      </ul>
      <h3>Education</h3>
      <ul className="list-items">
        <li>
          <span>Masters in Management and Information Systems</span>
          <span className="org-name">University of South Florida</span>
          <small>Issued Dec 2017</small>
        </li>
        <li>
          <span>Bachelor of Engineering</span>
          <span className="org-name">
            Osmania University - Vasavi College of Engineering
          </span>
          <small>Issued Jul 2013</small>
        </li>
      </ul>
    </div>
  );
}

export default About;
