import { useAuthStore } from "./stores/authStore";
import { useDocumentStore } from "./stores/documentStore";
import { useChatStore } from "./stores/chatStore";

function App() {
  const login = useAuthStore((s) => s.login);
  const logout = useAuthStore((s) => s.logout);
  const uploadDocument = useDocumentStore((s) => s.uploadDocument);
  const sendQuery = useChatStore((s) => s.sendQuery);

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>

      <button onClick={() => uploadDocument({ name: "Tax Reform.pdf" })}>
        Upload Doc
      </button>

      <button onClick={() => sendQuery("Explain this document")}>
        Ask AI
      </button>
    </div>
  );
}

export default App;
