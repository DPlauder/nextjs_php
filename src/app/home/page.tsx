import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Home() {
// State für Projekte und Kategorien
const [projects, setProjects] = useState([]);
const [categories, setCategories] = useState([]);

const [isAddingProject, setIsAddingProject] = useState(false);
const [projectName, setProjectName] = useState("");
const [projectDescription, setProjectDescription] = useState("");
const [githubUrl, setGithubUrl] = useState("");
const [category, setCategory] = useState("");


const [isAddingCategory, setIsAddingCategory] = useState(false);
const [newCategoryName, setNewCategoryName] = useState("");
const [newCategoryUrl, setNewCategoryUrl] = useState("");

// State für Techs hinzufügen
const [techs, setTechs] = useState([]);
const [isAddingTech, setIsAddingTech] = useState(false);
const [newTechName, setNewTechName] = useState("");
const [newTechUrl, setNewTechUrl] = useState("");

const [selectedTechs, setSelectedTechs] = useState([]);


  // Funktion zum Abrufen der Kategorien von der Datenbank
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost?ressource=category", {
        method:"GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.error("Fehler beim Laden der Kategorien");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
   // useEffect, um Kategorien zu laden, wenn die Komponente gemountet wird
   useEffect(() => {
    fetchCategories();
  }, []);

  const fetchTechs = async() => {
    try{
      const response = await fetch("http://localhost?ressource=tech", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if(response.ok){
        const data = await response.json();
        setTechs(data);
      }else{
        console.error("Fehler beim Laden der Techs");
      }
    }catch(error){
      console.error("Eroor fetching techs:", error);
    }
  };
  useEffect(() => {
    fetchTechs();
  }, []);


  // Funktion zum Hinzufügen eines Projekts
  const addProject = async () => {
    console.log(category);
      if (projectName.trim() !== "" && projectDescription.trim() !== "") {
        const newProjectData = {
          name: projectName,
          description: projectDescription,
          github_url: githubUrl,
          category_uuid: category,
          tech_uuids: selectedTechs,
        };
        
        try {
          const response = await fetch("http://localhost?ressource=project", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProjectData),
          });
          if (response.ok) {
            const responseData = await response.json();
            setProjects([...projects, newProjectData]);
            setProjectName("");
            setProjectDescription("");
            setGithubUrl("");
            setCategory(categories[0]?.uuid || "Keine Kategorien");
            setSelectedTechs([]);
            setIsAddingProject(false);
          } else {
            console.error("Failed to add project");
          }

        } catch (error) {
          console.error("Error adding project:", error);
      }
    };
  }
  
  // Funktion zum Hinzufügen einer neuen Kategorie
  const addCategory = async () => {
    if (newCategoryName.trim() !== "") {

      const newCategoryData = {
        name: newCategoryName,
        url: newCategoryUrl,
      };
  
      try {
        const response = await fetch("http://localhost?ressource=category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCategoryData),
        });
        if (response.ok) {  
          // If the category is successfully added to the database
          const responseData = await response.json();
          setCategories([...categories, newCategoryData]);
          setNewCategoryName("");
          setNewCategoryUrl("");
          setIsAddingCategory(false);
        } else {
          console.error("Failed to add category");
        }
      } catch (error) {
        console.error("Error adding category:", error);
      }
    }
  };
  const addTech = async() => {
    if (newTechName.trim() !== "" && newTechUrl.trim() !== "") {
      const newTech = {
        name: newTechName,
        url: newTechUrl,
      };
      try{
        const response = await fetch("http://localhost?ressource=tech",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTech),
        });
        if(response.ok){
          setTechs([...techs, newTech]);
          setNewTechName("");
          setNewTechUrl("");
          setIsAddingTech(false);
        } else{
          console.error("Failed to add tech");
        }  
      } catch(error){
        console.error("Error adding category:", error);
      }
      
    }     
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-2 md:hidden" />
            <h1 className="text-2xl font-bold text-gray-800">Projekt Manager</h1>
          </div>
        </div>
      </header>

      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          {!isAddingProject ? (
            <button
              onClick={() => setIsAddingProject(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Neues Projekt hinzufügen
            </button>
          ) : (
            <div className="space-y-4 bg-white p-6 shadow-md rounded-lg">
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Projektname eingeben"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Projektbeschreibung eingeben"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="GitHub URL eingeben"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat.uuid}>
                    {cat.name}
                  </option>
                ))}
              </select>
              
              <select
                multiple
                value={selectedTechs}
                onChange={(e) =>
                  setSelectedTechs(Array.from(e.target.selectedOptions, (option) => option.value))
                }
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {techs.map((tech, index) => (
                  <option key={index} value={tech.uuid}>
                    {tech.name}
                  </option>
                ))}
              </select>
              <div className="flex space-x-4">
                <button
                  onClick={addProject}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Projekt speichern
                </button>
                <button
                  onClick={() => setIsAddingProject(false)}
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsAddingCategory(true)}
            className="bg-green-600 text-white mt-4 px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Neue Kategorie hinzufügen
          </button>

          {isAddingCategory && (
            <div className="space-y-4 bg-white p-6 shadow-md rounded-lg mt-4">
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Kategoriename eingeben"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                value={newCategoryUrl}
                onChange={(e) => setNewCategoryUrl(e.target.value)}
                placeholder="Kategorie URL eingeben"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <div className="flex space-x-4">
                <button
                  onClick={addCategory}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Kategorie speichern
                </button>
                <button
                  onClick={() => setIsAddingCategory(false)}
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          )}
          <button
      onClick={() => setIsAddingTech(true)}
      className="bg-purple-600 text-white mt-4 px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
    >
      Neue Tech hinzufügen
    </button>

    {/* Formular zum Hinzufügen einer neuen Tech */}
    {isAddingTech && (
      <div className="space-y-4 bg-white p-6 shadow-md rounded-lg mt-4">
        <input
          type="text"
          value={newTechName}
          onChange={(e) => setNewTechName(e.target.value)}
          placeholder="Tech-Name eingeben"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <input
          type="text"
          value={newTechUrl}
          onChange={(e) => setNewTechUrl(e.target.value)}
          placeholder="Tech URL eingeben"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <div className="flex space-x-4">
          <button
            onClick={addTech}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Tech speichern
          </button>
          <button
            onClick={() => setIsAddingTech(false)}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Abbrechen
          </button>
        </div>
      </div>
    )}
        </div>
      </section>

      <main className="flex-grow">
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
              Projekte
            </h2>
            {projects.length > 0 ? (
              <ul className="space-y-4">
                {projects.map((project, index) => (
                  <li key={index} className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {project.name}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {project.githubUrl}
                    </a>
                    <p className="text-gray-500 text-sm">Kategorie: {project.category}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-600">
                Keine Projekte vorhanden. Fügen Sie ein neues Projekt hinzu.
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Projekt Manager. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
