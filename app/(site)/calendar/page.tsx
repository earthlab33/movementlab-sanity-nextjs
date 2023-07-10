import Image from 'next/image';
import Link from 'next/link';

export default function Calendar() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold text-black">
                 MovementLab Calendar
                </h1>
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                {/* <div dangerouslySetInnerHTML={{ __html: */}
                <iframe src="https://calendar.google.com/calendar/embed?src=c_dbvhkr1p1uasf3jpb3laopst2s%40group.calendar.google.com&ctz=America%2FDenver" style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                {/* }} /> */}
                </div>
            </main>
            </div>
        </div>
    )
}