import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";
import { ContextProvider } from "@/context/Context";

export default function Home() {
    return (
        <ContextProvider> {/* Wrap the page with the context provider */}
            <div className="wrapper">
                <Sidebar />
                <Main />
            </div>
        </ContextProvider>
    );
}
