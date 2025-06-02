function Button() {
  return (
    <div className="more">
      {/* Botão principal para ações como "Ver mais".
        Estilizado com um gradiente de roxo a índigo e texto branco.
        
        Classes Tailwind CSS:
        - px-4 py-2: Padding interno.
        - bg-gradient-to-r from-purple-500 to-indigo-600: Fundo com gradiente.
        - text-white: Cor do texto.
        - mt-[-100px]: Margem superior negativa para posicionamento específico.
                       (Atenção: essa margem pode afetar o layout e deve ser usada com cuidado)
        - rounded-sm: Bordas levemente arredondadas.
        - text-sm: Tamanho da fonte.
        - hover:bg-purple-700: Efeito de hover (o gradiente pode sobrepor parcialmente este efeito).
      */}
      <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white mt-[-100px] rounded-sm text-sm hover:bg-purple-700">
        Ver mais
      </button>
    </div>
  );
}

export default Button;
