import React, { useState } from "react";

const tags = [
  "Web",
  "Mobile",
  "Kotlin",
  "Ruby",
  "DevOps",
  "Java",
  "JavaScript",
  "Python",
  "API",
  "Crud",
  "Games",
  "Back-end",
  "Front-end",
  "Cloud",
  "C#",
  "React",
  "Segurança",
  "Robótica",
  "Dados",
  "IA",
  "Softskills",
  "Cobol",
  "Carreira",
  "Empreender",
  "Startups",
  "Liderança",
  "Design",
  "Ágil",
  "Frameworks",
  "C++",
  "Networking",
  "Futuro",
  "Fintech",
  "BI",
  "TypeScript",
  "Node.js",
  "Express",
  "Docker",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "NoSQL",
  "Azure",
  "Google Cloud",
  "Machine Learning",
  "Deep Learning",
  "Blockchain",
  "Smart Contracts",
  "Ethereum",
  "Microservices",
  "Serverless",
  "Sass",
  "Tailwind CSS",
  "Next.js",
  "Swift",
  "Objective-C",
  "Unity",
  "Unreal Engine",
  "Big Data",
  "Data Science",
  "Ansible",
  "Linux",
  "Shell Script",
  "Agile",
  "Scrum",
];

export default function Preferencias() {
  const [selecionadas, setSelecionadas] = useState([]);

  const toggleTag = (tag) => {
    if (selecionadas.includes(tag)) {
      setSelecionadas(selecionadas.filter((t) => t !== tag));
    } else {
      setSelecionadas([...selecionadas, tag]);
    }
  };

  const salvar = () => {
    alert("Preferências salvas: " + selecionadas.join(", "));
    // Futuramente enviar para backend
  };

  return (
    <div className="flex items-center justify-center px-4  border-">
      <div className="rounded-xl p-2 w-full text-center font-sans ">
        <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
          O que você curte?
        </h2>
        <p className="mb-6 text-gray-600">
          Gosto não se discute! Escolha os assuntos que mais te interessam no
          mundo da tecnologia
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {tags.map((tag, i) => {
            const ativo = selecionadas.includes(tag);
            return (
              <button
                key={i}
                onClick={() => toggleTag(tag)}
                className={`relative rounded-full cursor-pointer text-sm font-medium overflow-hidden
                  ${ativo ? "bg-purple-700" : "bg-white"}
                `}
              >
                {/* Borda com gradient */}
                <span className="block rounded-full p-[2px] bg-gradient-to-r from-purple-500 to-indigo-600">
                  {/* Fundo interno: roxo se ativo, branco se inativo */}
                  <span
                    className={`block rounded-full px-4 py-1 select-none ${
                      ativo
                        ? "bg-gradient-to-r from-purple-500 to-indigo-600"
                        : "bg-white"
                    }`}
                  >
                    {/* Texto branco se ativo, gradient se inativo */}
                    <span
                      className={`${
                        ativo
                          ? "text-white"
                          : "bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"
                      }`}
                    >
                      {tag}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
