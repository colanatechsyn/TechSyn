import React, { useState } from "react";
import Image from "../../assets/imgs/MaxineImages/Maxine.png";
import Preferencias from "../../components/layout/Preferencias";

const ProfileForm = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [photoUrl, setPhotoUrl] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email] = useState("exemplo@email.com");
  const [gender, setGender] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [github, setGithub] = useState("");
  const [bio, setBio] = useState("");

  // Novo estado para mensagem de sucesso
  const [successMessage, setSuccessMessage] = useState("");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhotoUrl(URL.createObjectURL(file));
  };

  const handleCepBlur = () => {
    if (cep === "12345678") {
      setRua("Rua Exemplo");
      setCidade("São Paulo");
      setEstado("SP");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Em vez do alert, seta a mensagem de sucesso
    setSuccessMessage("Dados enviados com sucesso!");

    // Limpa a mensagem depois de 3 segundos
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const tabs = [
    { id: "info", label: "Informações" },
    { id: "localidade", label: "Localidade" },
    { id: "preferencias", label: "Preferências" },
    { id: "finalize", label: "Finalização" },
  ];

  const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);

  // Função que valida os campos obrigatórios da aba atual
  const isCurrentTabValid = () => {
    switch (activeTab) {
      case "info":
        return (
          firstName.trim() !== "" &&
          lastName.trim() !== "" &&
          telefone.trim() !== "" &&
          gender !== ""
        );
      case "localidade":
        return (
          cep.trim() !== "" &&
          rua.trim() !== "" &&
          numero.trim() !== "" &&
          cidade.trim() !== "" &&
          estado.trim() !== ""
        );
      case "preferencias":
        // Pode validar algo aqui, por enquanto considera válido sempre
        return true;
      case "finalize":
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isCurrentTabValid() && currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-[#8548ff]">
        Editar Perfil
      </h2>

      {/* Abas - DESABILITADO O CLIQUE */}
      <div className="flex justify-center mb-10 space-x-8 pointer-events-none opacity-80">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => {}}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === id
                ? "bg-[#8548ff] text-white shadow-md"
                : "bg-gray-100 text-gray-700"
            } cursor-default`}
            tabIndex={-1}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mensagem de sucesso visual, aparece e desaparece */}
      {successMessage && (
        <div className="mb-6 text-center text-green-600 font-semibold">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* INFORMAÇÕES */}
        {activeTab === "info" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
            <div className="flex items-center col-span-full flex-col">
              <img
                src={photoUrl || Image}
                alt="Foto de perfil"
                className="w-32 h-32 rounded-full border-4 border-[#8548ff] object-cover shadow-lg"
              />
              <label className="cursor-pointer text-[#8548ff] font-semibold hover:underline">
                Alterar Foto
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </label>
            </div>

            <input
              type="text"
              placeholder="Nome"
              className="input-purple border-2 p-4 border-purple-800 rounded-xl"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Sobrenome"
              className="input-purple border-2 p-4 border-purple-800 rounded-xl"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input-purple border-2 p-4 border-purple-800 rounded-xl"
              value={email}
              readOnly
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="input-purple border-2 p-4 border-purple-800 rounded-xl"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
            <div className="flex items-center gap-8 col-span-full">
              <label className="text-sm font-semibold text-gray-700">
                Gênero:
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Masculino"
                  checked={gender === "Masculino"}
                  onChange={() => setGender("Masculino")}
                  className="accent-[#8548ff]"
                />
                Masculino
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Feminino"
                  checked={gender === "Feminino"}
                  onChange={() => setGender("Feminino")}
                  className="accent-[#8548ff]"
                />
                Feminino
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Outro"
                  checked={gender === "Outro"}
                  onChange={() => setGender("Outro")}
                  className="accent-[#8548ff]"
                />
                Outro
              </label>
            </div>
          </div>
        )}

        {/* LOCALIDADE */}
        {activeTab === "localidade" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            <input
              type="text"
              placeholder="CEP"
              className="input-purple border-2 p-4 border-purple-800 rounded-xl"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={handleCepBlur}
              required
            />
            <input
              type="text"
              placeholder="Rua"
              className="input-purple border-2 p-4 border-purple-800 rounded-xl"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Número"
              className="input-purple border-2 p-4 border-purple-800 rounded-xl"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Complemento"
              className="input-purple border-2 p-4 border-purple-800 rounded-xl"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
            <input
              type="text"
              placeholder="Cidade"
              className="input-purple border-2 p-4 border-purple-800 rounded-xl"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Estado"
              className="input-purple border-2 p-4 border-purple-800 rounded-xl"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </div>
        )}

        {/* PREFERÊNCIAS */}
        {activeTab === "preferencias" && <Preferencias />}

        {/* FINALIZAÇÃO */}
        {activeTab === "finalize" && (
          <div className="space-y-8 max-w-3xl mx-auto">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 ">
                Link do GitHub
              </label>
              <input
                type="text"
                placeholder="https://github.com/seuperfil "
                className="input-purple w-full border-2 p-4 border-purple-800 rounded-xl"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Biografia
              </label>
              <textarea
                placeholder="Fale sobre você..."
                className="input-purple w-full h-60 resize-none border-2 p-4 border-purple-800 rounded-xl"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* BOTOES VOLTAR / CONTINUAR / FINALIZAR */}
        <div className="flex justify-center gap-6 mt-8">
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
            >
              Voltar
            </button>
          )}

          {currentIndex < tabs.length - 1 && (
            <button
              type="button"
              onClick={handleNext}
              disabled={!isCurrentTabValid()}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                isCurrentTabValid()
                  ? "bg-[#8548ff] text-white hover:bg-[#6f38d9]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continuar
            </button>
          )}

          {currentIndex === tabs.length - 1 && (
            <button
              type="submit"
              className="bg-[#8548ff] px-8 py-3 rounded-lg font-semibold text-white hover:bg-[#6f38d9] transition"
            >
              Finalizar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
