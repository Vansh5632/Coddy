"use client";
import React, { useState } from 'react'
import { useQuery } from "convex/react";
import {api} from "../../../convex/_generated/api";
import SnippetsPageSkeleton from './_components/SnippersPageSkeleton';
import NavigationHeader from '@/components/NavigationHeader';

function SnippetsPage() {
    const snippets = useQuery(api.snippets.getSnippets);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLanguage,setSelectedLanguage] = useState<string|null>(null);
    const [view,setview] = useState<"grid"|"list">("grid");
if(true){

    return (
        <div className='min-h-screen'>
        <NavigationHeader/>
        <SnippetsPageSkeleton/>

    </div>
  )
}
}

export default SnippetsPage;