"use client";
import { Snippet } from '@/types'
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import { useState } from 'react';
import {motion} from 'framer-motion'
import Link from 'next/link';
import { api } from '../../../../convex/_generated/api';
import Image from 'next/image'
import { Clock,Trash2,User } from 'lucide-react';
import toast from 'react-hot-toast';
import StarButton from "@/components/SarButton";




export const SnippetCard = ({snippet}:{snippet:Snippet}) => {
  const user = useUser();
  const deleteSnippet = useMutation(api.snippets.deleteSnippet);
  const [isDeleting,setIdDeleting] = useState(false);
  return (
    <motion.div layout
    className='group relative'
    whileHover={{y:-2}}
    transition={{duration:0.2}}>
      <Link href={`/snippets/${snippet._id}`} className="h-full block">
        <div className='relative h-full bg-[#1e1e2e]/80 backdrop-blur-sm rounded-xl border border-[#313244]/50 hover:border-[#313244] transiton-all duration-300 overflow-hidden'>
                <div className='p-6'>
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-center gap-3'>
                        <div className='relative'>
                          <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-all duartion-500' area-hidden= "true">

                          </div>
                          <div className='relative p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500'>
                            <Image src={`/${snippet.language}.png`}
                            alt='logo'
                            className='w-6 h-6 object-contain relative z-10'
                            width={24}
                            height={24}/>
                          </div>
                        </div>
                        <div className='space-y-1'>
                          <span className='px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-medium'>{snippet.language}</span>

                      <div className='flex items-center gap-2 text-xs text-gray-500'>
                        <Clock size={3}/>
                        {new Date(snippet._creationTime).toLocaleDateString()}
                      </div>
                        </div>
                    </div>
                  </div>
                </div>
          </div>
      </Link>

    </motion.div>
  )
}
