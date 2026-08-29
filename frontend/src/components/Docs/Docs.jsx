import { Link } from "react-router-dom";
import "./Docs.css";

const sections = [
  {
    title: "Getting started",
    steps: [
      "Click Get Started on the home page or Register in the header.",
      "Fill in your name, email, and password, then submit the form.",
      "After registering, you are taken to your task list automatically.",
      "Already have an account? Use Sign In or the Login link in the header.",
    ],
  },
  {
    title: "Creating a task",
    steps: [
      "Open the Tasks page from the header after logging in.",
      "Click Add New Task to open the task form.",
      "Enter a title (required), description, priority, status, and due date.",
      "Click Create Task to save it to your list.",
    ],
  },
  {
    title: "Editing a task",
    steps: [
      "Find the task card you want to change on the Tasks page.",
      "Click Edit on that task.",
      "Update any fields in the form and click Update Task.",
    ],
  },
  {
    title: "Completing & deleting tasks",
    steps: [
      "Click Complete on a task to mark it as done.",
      "Click Undo if you marked a task complete by mistake.",
      "Click Delete to permanently remove a task from your list.",
    ],
  },
  {
    title: "Logging out",
    steps: [
      "Click Logout in the header when you are finished.",
      "You will be redirected to the login page.",
    ],
  },
];

function Docs() {
  return (
    <section className="docs">
      <div className="docs-inner">
        <div className="docs-header">
          
          <h1>How to use Task Manager</h1>
          <p>
            A quick walkthrough of everything you need to register, manage tasks,
            and stay organized.
          </p>
        </div>

        <div className="docs-sections">
          {sections.map((section, index) => (
            <article key={section.title} className="docs-section">
              <div className="docs-section-number">{index + 1}</div>
              <div className="docs-section-content">
                <h2>{section.title}</h2>
                <ol>
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>

        <div className="docs-footer">
          <p>Ready to try it yourself?</p>
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Docs;
