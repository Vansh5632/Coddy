"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'
import {motion} from 'framer-motion'
import { Loader2 } from 'lucide-react'
export const RunButton = () => {
  const {user} = useUser();
  const {runCode, language,isRunning,executionResult} = useCodeEditorStore();

  const handleRun = async()=>{
    await runCode();
    const result = getExecutionResult();

    if(user && result){
      await saveExecution({
        language,
        code:getCode(),
        output:result.output||undefined,
        error:result.error||undefined,
      })
    }
  }
  return (
    <motion.button onClick={handleRun} disabled={isRunning} whileHover={{scale:1.05}} whileTap={{scale:0.95}} className={`group relative inline-flex items-center gap-2.5 px-5 py-2.5 disabled:cursor-not-allowed focus:outline-none`}>
      <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl opacity-100 transition-opacity group-hover:opacity-90'>
        <div className='relative flex items-center gap-2.5'>
          {isRunning?(
            <>
              <div className='relative'>
                <Loader2 className='w-4 h-4 animate-spin text-white/70'/>
                <div className='absolute inset-0 blur animate-pulse'></div>
              </div>
            </>
          ):(
            <>
              <div className='relative '>

              </div>
            </>
          )}

        </div>
      </div>

    </motion.button>
  )
}
