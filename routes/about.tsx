/** @jsx h */
import { h } from "preact";
import { tw } from '@twind';

export default function AboutPage() {
    return (
        <main>
            <h1>about</h1>
            <p>This is a about page.</p>
            <div className={tw`flex justify-center`}>
                <img className={tw`max-w-sm h-auto`} src={`chloegan.jpg`} alt="chloegan profile image" />
            </div>
        </main>
    )  
}