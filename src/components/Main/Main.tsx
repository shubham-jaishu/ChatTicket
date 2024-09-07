"use client";

import React, { useContext, useState } from 'react';
import "./Main.css";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { Context } from '@/context/Context';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

const Main = () => {
    const context = useContext(Context);
    const router = useRouter(); // Initialize the Next.js router

    if (!context) {
        return <div>Error: Context not available</div>;
    }

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = context;

    // Handle the 'Enter' key press
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSent(input); // Send the input if 'Enter' is pressed
        }
    };

    const handleImageClick = () => {
        router.push('/login'); // Navigate to the /login route
    };

    return (
        <div className='main bg-slate-500'>
            <div className="nav">
                <p>ChatTicket</p>
                <Image src={assets.user_icon} alt="User Icon" onClick={handleImageClick} />
            </div>

            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, User.</span></p>
                            <p className='text-5xl'>Discover Museums, Reserve Your Spot</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest me the best Museums of India with its location</p>
                                <Image src={assets.compass_icon} alt='Compass Icon' />
                            </div>
                            <div className="card">
                                <p>Are the tickets refundable if I cant attend?</p>
                                <Image src={assets.bulb_icon} alt='Bulb Icon' />
                            </div>
                            <div className="card">
                                <p>What are the safety guidelines and rules during the museum visit?</p>
                                <Image src={assets.message_icon} alt='Message Icon' />
                            </div>
                            <div className="card">
                                <p>Do I need to book tickets in advance, or can I buy them at the museum?</p>
                                <Image src={assets.code_icon} alt='Code Icon' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <Image src={assets.user_icon} alt='User Icon' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <Image src={assets.gemini_icon} alt='Gemini Icon' />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder='Enter a prompt here'
                            onKeyPress={handleKeyPress}
                        />
                        <div>
                            <Image src={assets.gallery_icon} alt='Gallery Icon' />
                            <Image src={assets.mic_icon} alt='Mic Icon' />
                            {input && (
                                <Image onClick={() => onSent(input)} src={assets.send_icon} alt='Send Icon' />
                            )}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Our voice assistant could give little inaccurate data as it is in testing phase right now. Inconvenience is sorry
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
