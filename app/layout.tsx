// Добавь это в компонент GlobalUI
const [chatInput, setChatInput] = useState("");
const [isThinking, setIsThinking] = useState(false);

const askMentor = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!chatInput.trim()) return;

  const userMsg = chatInput;
  setChatInput("");
  setIsThinking(true);
  addLog(`[USER]: ${userMsg}`);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: [{ role: "user", content: userMsg }] }),
    });
    
    // Здесь мы получаем ответ (для простоты - как единый блок, 
    // но API поддерживает стриминг)
    const data = await res.text(); 
    addLog(`[MENTOR]: ${data}`); 
  } catch (err) {
    addLog("[ERROR]: Neural Link unstable. Retrying...");
  } finally {
    setIsThinking(false);
  }
};

// В JSX (внутри облака мыслей Викинга)
<form onSubmit={askMentor} className="mt-4 flex items-center bg-black/40 border border-[#A9DDD3]/20 rounded-xl p-2">
  <input 
    type="text"
    value={chatInput}
    onChange={(e) => setChatInput(e.target.value)}
    placeholder="Ask me anything..."
    className="flex-1 bg-transparent border-none outline-none text-[12px] text-white px-2 italic"
  />
  <button type="submit" className="text-[#A9DDD3] hover:scale-110 transition-transform px-2">
    <Zap size={14} className={isThinking ? "animate-pulse" : ""} />
  </button>
</form>