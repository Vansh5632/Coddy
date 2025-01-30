"use client"
import {useUser} from "@clerk/nextjs";
import { usePaginatedQuery,useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "../../../convex/_generated/api";
import NavigationHeader from "@/components/NavigationHeader";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileHeaderSkeleton from "./_components/ProfileHeaderSkeleton";
import {ChevronRight,Clock,Code,ListVideo,Loader2,Star} from "lucide-react";
import {motion,AnimatePresence} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { StarButton } from "@/components/StarButton";
import CodeBlock from "../snippets/[id]/_components/CodeBlock";

