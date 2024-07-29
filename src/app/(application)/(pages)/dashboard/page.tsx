'use client'
 
import { useRouter } from 'next/navigation'
import Dashboard from "@/components/Dashboard";

export default function dashboard() {
    const router = useRouter()
    return (
        <div><Dashboard /></div>
    )
}