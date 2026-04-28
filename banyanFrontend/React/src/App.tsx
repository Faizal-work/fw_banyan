function App() {

  const modules = [
    {
      "id": "trees",
      "title": "Banyan.Trees",
      "description": "Urban tree management"
    },
    {
      "id": "analytics",
      "title": "Banyan.Analytics",
      "description": "Analytics derived from Oil Analysis"
    },
    {
      "id": "notifications",
      "title": "Banyan.Notifications",
      "description": "Event Driven Management"
    },
    {
      "id": "documents",
      "title": "Banyan.Documents",
      "description": "Report generation"
    },
    {
      "id": "entertainment",
      "title": "Banyan.Entertainment",
      "description": "Lightweight InFlight Entertainment"
    }
  ];

  const moduleList = modules.map(module => (
    <li
      key={module.id}
      className="mt-3 rounded-lg border border-gray-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
      <p className="mt-2 text-sm text-gray-500">{module.description}</p>
    </li>
  ));

  return (
    <div className="min-h-screen bg-gray-25 text-gray-800">

      {/* Nav */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-sm font-bold tracking-wide">FW Banyan</span>
        <div className="flex gap-6 text-sm">
          <a href="#modules" className="text-gray-600 hover:text-gray-900">Modules</a>
          <a href="#" className="font-medium text-gray-900">React</a>
          <a href="./vue" className="text-gray-600 hover:text-gray-900">Vue</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Banyan Project
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          A decade worth of experience, modernised to the current ecosystem
        </p>
        
        <a href="#modules"
          className="mt-8 inline-block rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
        >
          Explore Modules
        </a>
      </header>

      {/* Modules */}
      <section id="modules" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-gray-900">Banyan Modules</h2>
        <p className="mt-2 text-center text-gray-500">The building blocks of Banyan</p>
        <ul className="py-6 pl-3 pr-3 text-left grid grid-cols-2 gap-4 ">
          {moduleList}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 py-8 text-center text-sm text-gray-400">
        <p>Banyan Project &copy; {new Date().getFullYear()}</p>
      </footer>

    </div>
  );
}

export default App