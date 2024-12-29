import Header from  "./_components/Header";
import Editor from "./_components/EditorPanel";
import OutputPanel from "./_components/OutputPanel";
import { SignUpButton } from "@clerk/nextjs";

export default function Home(){
    return (
        <div className="min-h-screen">
            <div className="max-w-[1800px] mx-auto p-4">
                <Header/>
                <SignUpButton/>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Editor/>
                    <OutputPanel/>
                </div>
            </div>
        </div>
    )
}