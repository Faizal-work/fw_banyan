function App() {

  const modules = [
    {
      "title": "Banyan.Trees",
      "description":"urban tree management"
    },
    {
      "title": "Banyan.Analytics",
      "description":"Analytics derived from Oil Analysis"
    },
    {
      "title": "Banyan.Notifications",
      "description":"Event Driven Management"
    },
    {
      "title": "Banyan.Documents",
      "description":"Report generation"
    },
    {
      "title": "Banyan.Entertainment",
      "description":"Lightweight InFlight Entertainment"
    }
  ];

  const moduleList = modules.map(module => (
        <li key={module.title}>{module.title} - {module.description}</li>
      ));

  return (
    <>
    <header>
      <h1>Banyan Project</h1>
      <p>A decade worth of experience, modernised to the current ecosystem</p>
      <nav>
        <a href="#modules">Modules</a>
        <a href="#">React</a>
        <a href="./vue">Vue</a>
      </nav>
    </header>
    <div>
    <ul>
      {moduleList}
    </ul>
    </div>
    <footer>
      <p>Banyan Project &copy; {new Date().getFullYear()}</p>
    </footer>
    </>
  )
}

export default App
