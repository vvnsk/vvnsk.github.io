import HomeLink from "../../components/HomeLink/HomeLink";
import GitHubCalendar from "react-github-calendar";
import "./Work.css";

function Work() {
  let workData = [
    {
      org: "Axxess",
      location: "Dallas, TX",
      title: "Front End Development",
      duration: "February 2018 - Present",
      desc: [
        "Developing a Hospice Application for agencies which provide Hospice for Terminally Ill Patients. Optimized load times of application by chunking, CSS minification and other techniques by 70%.",
        "Created KPI Dashboards using High charts for Entities in the application and provided drill down to various pages. Developed messaging center which integrates with application and uses Signal R.",
        "Implemented Schedule Center which uses Full Calendar to display Patient and Employee Schedule. Created components and build Form Builder to documents visits which are reused throughout the application. Worked on Missed Visit and Visit Exports for submission on both Front End and Server side.",
        "Introduced Unit Testing with Jest and integrated with Aurelia and Team city, which reduced bugs by 60%.",
        "Maintained and configured in-house OAuth provider which follows OAuth 2.0 and OIDC.",
        "Developed Webservices using ASP.NET, MVC and Entity Framework. Integration with Full Calendar, High charts, Signal R, OIDC, Text Editor, Moment, Toastr and other technology.",
        "Worked with ASP.NET framework and develop new components with Agile Methodology.",
      ]
    },
    {
      org: "Lincare",
      location: "Clearwater, FL",
      title: "Billing Data Analyst",
      duration: "October 2017 - December 2017",
      desc: [
        "Successfully developed a Dashboard application to monitor the status of all metrics based on existing reports.",
        "Created Tableau Dashboards with interactive views, trends and drill downs along with user level security.",
        "Provide guidance in maximizing the potential of SharePoint and Tableau as it relates to company KPI."
      ]
    },
    {
      org: "INTO USF",
      location: "Tampa, FL",
      title: "Information Technology Tutor",
      duration: "September 2017 - December 2017",
      desc: [
        "The Role involved in overseeing the co-ordination of issues; change control, risks, documentation and any other logs that need control in projects associated with University and Students.",
        "Performed reviews, Audits, compliance, health checks, and configuration management were also performed in projects demanding the same.",
        "Ensured Good practice which reflect the method, standard, process, tools of project management and procedures that team needs to work efficiently."
      ]
    },
    {
      org: "Leapdoctor.com",
      location: "Tampa, FL",
      title: "Software Engineer",
      duration: "September 2016 - August 2017",
      desc: [
        "Administered Mongo Database Administration, Security, and Maintenance. Performed analytics to perform Visualizations, Exploratory Data Analysis to identify Key Performance Indicators, perform ANOVA along with Supervised and Unsupervised techniques with pre-processes such as PCA for analyzing Physician recruitment for Locum Positions. Performed ETL and migrated of data from Mongo DB to Redshift on AWS to incorporate a snowflake staging data model for staging using Pentaho data integration tool. Developed Website using Blaze Templates, Meteor JS and Mongo DB and deployed over Amazon Web Services platform. Further, Incorporated Design techniques to solve business problems related to Website, and communicated these solutions to executive stakeholders."
      ]
    },
    {
      org: "Cognizant",
      location: "Hyderabad, India",
      title: "Programmer Analyst",
      duration: "September 2013 - July 2016",
      desc: [
        "Being the first Company I've been associated with, it has been a great experience through which I learned a lot. Working on multiple projects of diverse domains, the extensive knowledge and expertise the company offers, is a class apart.",
        "Primary technologies used are HTML, CSS and OO JavaScript wrote using Closure. I make extensive use of progressive enhancement and responsive design techniques. Am very experienced in use of the latest HTML5, Google APIs and CSS3 techniques for presentation and interactivity.",
        "I’ve developed resources for team and company-wide including various Proof of Concepts of latest Front end technologies. With JavaScript readability, I do regular code reviews and have written a number of reusable front-end modules for the team that are used company wide.",
        " As a global operation, I am well versed in working with multifunctional teams across multiple time zones. Used to working in a high-pressure environment developing sites for coordinated application launches."
      ]
    },
  ];
  return (
    <div className="page-wrapper work-wrapper">
      <HomeLink />
      <h2>Work</h2>
      <p className="github-desc">Explore some of my recent projects and experiements in my <a href="https://github.com/vvnsk" target="_blank" rel="noreferrer">GitHub Profile</a></p>
      <GitHubCalendar username="vvnsk" />
      {workData.map((work) => (
        <div>
          <h3>{work.org}</h3>
          <p>{work.title}</p>
          <small>{work.location}</small>
          <small>{work.duration}</small>
          {(work.desc.map((desc) => (<p>{desc}</p>)))}
        </div>
      ))}
    </div>
  );
}

export default Work;
