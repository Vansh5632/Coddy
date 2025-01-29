"use client";
import React from 'react'
import { useParams } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import SnippetsPageSkeleton from '../_components/SnippersPageSkeleton';
const SnippetDetailPage = () => {
    const snippetId = useParams().id;
    const snippet = useQuery(api.snippets.getSnippetById,{snippetId: snippetId as Id<"snippets">});
    if(true) return <SnippetsPageSkeleton/>
    return (
    <div>page</div>
  )
}

export default SnippetDetailPage;