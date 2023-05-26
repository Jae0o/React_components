import React, { useContext } from 'react'
import { DarkModeContext, DarkModeProvider } from './DarkModeContext'
import '../Css/DarkMode.css'

export default function AppDarkMode() {
    return (
        <DarkModeProvider>
            <Body>
                <DarkModeButton />
                <ContentMain>
                    <ContentSection>
                        <ContentArticle />
                    </ContentSection>
                    <ContentSection />
                </ContentMain>
            </Body>
        </DarkModeProvider>
    )
}

function Body({ children }) {
    return (
        <body className='Body'>
            {children}
        </body>
    );
}

function DarkModeButton() {
    const { DarkState, ToggleDarkMode } = useContext(DarkModeContext);

    return (
        <div className='Button'>
            <h4> Dark Mode Toggle Button </h4>
            <p> Dark Mode State : <span>{DarkState.toString()}</span></p>
            <button onClick={() => ToggleDarkMode()}> Toggle!</button>
            {DarkState ?
                <span
                    style={{
                        backgroundColor: "black",
                        color: "white"
                    }}> Dark Mode
                </span> : <span> White Mode </span>}
        </div>
    )
}

function ContentMain({ children }) {
    const { DarkState } = useContext(DarkModeContext);
    return (
        <main className='MainBox'>
            <h2>Main Box</h2>
            {children}
            {DarkState ?
                <span
                    style={{
                        backgroundColor: "black",
                        color: "white"
                    }}> Dark Mode
                </span> : <span> White Mode </span>}
        </main>
    )
}

function ContentSection({ children }) {
    const { DarkState } = useContext(DarkModeContext);
    return (
        <section className='SectionBox'>
            <h4>Section Bodx</h4>
            {children}
            {DarkState ?
                <span
                    style={{
                        backgroundColor: "black",
                        color: "white"
                    }}> Dark Mode
                </span> : <span> White Mode </span>}
        </section>
    )
}

function ContentArticle() {
    const { DarkState } = useContext(DarkModeContext);
    return (
        <article className='ArticleBox'>
            <h6>Article Box</h6>
            <p>Test Dark Mode State : <span>{DarkState.toString()}</span></p>
            {DarkState ?
                <span
                    style={{
                        backgroundColor: "black",
                        color: "white"
                    }}> Dark Mode
                </span> : <span> White Mode </span>}
        </article>
    )
}