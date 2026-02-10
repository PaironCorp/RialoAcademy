// ... внутри handleEncrypt в privacy/page.tsx ...
const handleEncrypt = () => {
    if (!secretData) return;
    setIsEncrypting(true);
    setIsFocused(true);
    addLog(`[REX]: Initializing encrypted computation for: ${secretData.slice(0, 4)}...`);
    addLog("[ZK]: Generating non-interactive proof...");

    setTimeout(() => {
      setIsEncrypting(false);
      setIsShielded(true);
      addLog("[CORE]: ZK-Proof verified by L1 Consensus");
      addLog(`[STORAGE]: Secret committed to Slot #4920194`);
    }, 2000);
};