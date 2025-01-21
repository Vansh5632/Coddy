"use client"

import { useCodeEditorStore } from "@/store/useCodeEditor"

function OutputPanel(){
  const {output,error,isRunning} = useCodeEditorStore();
  const [isCopied, setIsCopied] = useState(false);

  const hasContent = error|| output;

  const handleCopy = async()=>{
    if(!hasContent) return;
    await navigator.clipboard.writeText(hasContent);
    setIsCopied(true);

    setTimeout(()=> setIsCopied(false),2000);
  };

  return(
    <div>

    </div>
  )
}