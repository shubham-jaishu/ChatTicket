"use client"

import { createContext,useContext, useState } from "react";
import run from "@/config/gemini";

export interface ContextType {
    input: string;
    setInput: (value: string) => void;
    recentPrompt: string;
    setRecentPrompt: (value: string) => void;
    prevPrompts: string[];
    setPrevPrompts: (value: string[]) => void;
    showResult: boolean;
    setShowResult: (value: boolean) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
    resultData: string;
    setResultData: (value: string) => void;
    onSent: (prompt: string) => Promise<void>;
    newChat: () => void;
}

const Context = createContext<ContextType | null>(null);

const ContextProvider = (props: any) => {
    const [input, setInput] = useState<string>("");
    const [recentPrompt, setRecentPrompt] = useState<string>("");
    const [prevPrompts, setPrevPrompts] = useState<string[]>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [resultData, setResultData] = useState<string>("");

    const delayPara = (index: number, nextWord: string) => {
        setTimeout(function (){
            setResultData(prev => prev + nextWord)
        }, 25 * index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt: string) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
    
        // Ensure the prompt is always added to prevPrompts
        if (prompt) {
            setPrevPrompts((prev) => [...prev, prompt]);
            setRecentPrompt(prompt);
        } else if (input) {
            setPrevPrompts((prev) => [...prev, input]);
            setRecentPrompt(input);
            prompt = input; // Use input as the prompt if no prompt is passed
        }
    
        const response = await run(prompt);
    
        // Split and format response
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 0) {
                newResponse += "<b class='bold-text-mid'>" + responseArray[i] + "</b>";
            } else {
                newResponse += responseArray[i];
            }
        }
    
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponse3 = newResponse2.replace(/(\d+\.)/g, "<br>$1");
        let newResponseArray = newResponse3.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }
    
        setLoading(false);
        setInput("");
    };
    
    

    const ContextValue: ContextType= {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        setShowResult,
        setLoading,
        setResultData,
        newChat
    }

    return (
        <Context.Provider value = {ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}