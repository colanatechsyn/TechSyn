import React, { useState } from "react";

import Woman from "../../assets/imgs/UsuarioPagina/woman.png";

export default function Settings({ userData, onSave }) {
  const [name, setName] = useState(userData.name || "");
  const [email, setEmail] = useState(userData.email || "");
  const [phone, setPhone] = useState(userData.phone || "");
  const [address, setAddress] = useState(userData.address || "");
  const [bio, setBio] = useState(userData.bio || "");
  const [photo, setPhoto] = useState(userData.photo || "");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, email, phone, address, bio, photo });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-6 rounded-lg text-white">
      {/* Top section: Foto + Bio */}
      <div className="flex items-start gap-20 mb-6">
        <div>
          <label className="cursor-pointer w-69 h-69 rounded-full  flex items-center justify-center text-4xl overflow-hidden">
            {Woman ? (
              <img
                src={Woman}
                alt="Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              "+"
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Linha entre foto e bio */}
        <div className="flex-1">
          <label className="block mb-2 font-semibold">Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border-1 rounded text-white"
            rows="9"
            placeholder="Descreva um pouco sobre você, seus interesses e experiências..."
          />
        </div>
      </div>

      {/* Linha entre bio e inputs */}
      <div className="border-b border-gray-300 my-10" />

      {/* Bottom section: inputs em 2 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <label className="block mb-1">Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border-1 rounded text-white"
            placeholder="Ex: Caio Garcia white"
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border-1 rounded text-white"
            placeholder="Ex: caio@email.com white"
          />
        </div>

        <div>
          <label className="block mb-1">Telefone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 border-1 rounded text-white"
            placeholder="Ex: (11) 91234-5678 white"
          />
        </div>

        <div>
          <label className="block mb-1">Endereço:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-4 border-1 rounded text-white"
            placeholder="Ex: Rua StanFoard - 14°"
          />
        </div>
      </div>

      {/* Botão Salvar */}
      <div className="text-center transform translate-y-10">
        <button
          type="submit"
          className="bg-gradient-to-br from-[#ffffff] to-[#ffffff] text-[#414141] px-6 py-2 rounded hover:bg-purple-700 w-70 h-14"
        >
          SALVAR
        </button>
      </div>
    </form>
  );
}
