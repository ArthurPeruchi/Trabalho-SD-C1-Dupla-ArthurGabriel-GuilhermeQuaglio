import { useNavigate } from "react-router-dom";

export default function LoginSucesso() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen form-container">
      <h2 className="text-2xl mb-4"> Login bem-sucedido! :)</h2>
      <img src="happy-cat.gif" className="rounded-lg shadow-lg mb-4" />
      <button
        onClick={() => navigate("/")}
        className="bg-gray-500 text-white px-4 py-2 rounded"
        style={{
            color: "#fff",
            backgroundColor: "#1976d2", 
        }}
      >
        Voltar
      </button>

              <footer
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "#1976d2",
                color: "#fff",
                textAlign: "center",
                fontSize: "0.95rem",
                boxShadow: "0 -1px 6px rgba(0,0,0,0.07)",
                zIndex: 100,
            }}
        >
            <p>
                Projeto desenvolvido por Arthur Gabriel Peruchi Trindade (RA: 2410487) e Guilherme Quaglio e Silva (RA: 2410513).
            </p>
        </footer>
    </div>

  );
}
