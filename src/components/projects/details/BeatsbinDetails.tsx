import { HiArrowLeft } from 'react-icons/hi';
import styles from '../../../style';
import { beatsbinTracks } from '../../../assets';
import { beatsbinFilter } from '../../../assets';
import { beatsbinUpload } from '../../../assets';

const BeatsbinDetails = () => {


    return (
        <div className={`bg-background ${styles.flexStart} flex flex-col w-[100%] justify-center items-center h-full border-t border-white/20`}>
            <div className={`${styles.boxWidth} flex flex-col md:flex-row w-full border-white/20`}>
                {/* Main Content */}
                <div className="flex flex-col md:flex-row w-full">
                    {/* Left Side */}
                    <div className={`flex flex-col bg-background items-start py-8 ${styles.paddingX} w-full md:w-2/5 md:h-[100vh] md:overflow-y-auto md:sticky top-0`}>
                        <div className="text-white/50 hover:text-white/75 hover:cursor-pointer bg-clip-text text-sm font-light tracking-wide py-2 w-full inline-flex gap-2 items-center"><HiArrowLeft /> Back to Projects</div>
                        <h1 className="text-white bg-clip-text text-4xl font-bold tracking-wide w-full py-2">BeatsBin</h1>
                        <p className="text-white/50 font-light w-full">Cloud File Storage & Sharing SaaS Platform</p>
                        <p className="text-white/50 font-semibold text-sm w-full py-2 mt-6">
                            Technologies Used
                        </p>
                        <div className="flex border-t border-white/20 w-full py-2 justify-between">
                            <p className="text-white/50 font-light text-sm">
                                Language
                            </p>
                            <p className="text-white/50 font-light text-sm  text-end">
                                TypeScript
                            </p>
                        </div>
                        <div className="flex border-t border-white/20 w-full py-2 justify-between">
                            <p className="text-white/50 font-light text-sm">
                                Front End
                            </p>
                            <p className="text-white/50 font-light text-sm text-end">
                                React, Next.js, Tailwind
                            </p>
                        </div>
                        <div className="flex border-t border-white/20 w-full py-2 justify-between">
                            <p className="text-white/50 font-light text-sm">
                                Data & Storage
                            </p>
                            <p className="text-white/50 font-light text-sm text-end">
                                PostgreSQL, AWS S3
                            </p>
                        </div>


                        <p className="text-white/50 text-sm font-semibold w-full py-2 mt-6">
                            Project Details
                        </p>
                        <div className="flex border-t border-white/20 w-full py-2 justify-between">
                            <p className="text-white/50 font-light text-sm">
                                Type
                            </p>
                            <p className="text-white/50 font-light text-sm text-end">
                                Team Project
                            </p>
                        </div>
                        <div className="flex border-t border-white/20 w-full py-2 justify-between">
                            <p className="text-white/50 font-light text-sm">
                                Role
                            </p>
                            <p className="text-white/50 font-light text-sm text-end">
                                Technical Lead
                            </p>
                        </div>
                        <div className="flex border-t border-white/20 w-full py-2 justify-between">
                            <p className="text-white/50 font-light text-sm">
                                Start Date
                            </p>
                            <p className="text-white/50 font-light text-sm text-end">
                                4th July 2023
                            </p>
                        </div>
                        <div className="flex border-t border-white/20 w-full py-2 justify-between">
                            <p className="text-white/50 font-light text-sm">
                                Duration
                            </p>
                            <p className="text-white/50 font-light text-sm text-end">
                                3 Months
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className={`flex flex-col bg-background items-center py-8 ${styles.paddingX} w-full md:w-3/5 md:border-l border-white/20`}>
                        <img className="w-full border border-white/20 rounded-md" src={beatsbinTracks} alt="BeatsBin Tracks Page" />
                        <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide w-full mt-8 mb-2">About</h1>
                        <p className="text-white/50 font-light mb-4 w-full">BeatsBin is a cloud-based SaaS tailored uniquely for music producers, offering comprehensive cloud storage and sharing with specialized track metadata
                            including BPM, key, and tags for efficient track filtering. Bins can hold a collection of tracks. Each track is an object that can contain associated files within it.</p>


                        <div className="grid grid-cols-2 gap-4 my-4">
                            <div>
                                <img className="w-full border border-white/20 rounded-md" src={beatsbinUpload} alt="BeatsBin Tracks Page" />
                                <p className="text-white/50 text-sm font-light pt-2">Easily upload and input metadata.</p>
                            </div>
                            <div>
                                <img className="w-full border border-white/20 rounded-md" src={beatsbinFilter} alt="BeatsBin Tracks Page" />
                                <p className="text-white/50 text-sm font-light pt-2">Filter tracks to find exactly what you need.</p>
                            </div>
                        </div>

                        <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide w-full mt-8 mb-2 ">Features</h1>
                        <p className="text-white/50 font-light mb-4 w-full">Below is the list of our core features which we planned out before starting development.</p>
                        <ul className="text-white/50 font-light mb-2 w-full">
                            <li className="mt-2"><b className="font-bold">Users: </b>secure authentication and account profile with settings</li>
                            <li className="mt-2"><b className="font-bold">Tracks: </b>create with custom metadata, store associated files (e.g. cover art) inside each track</li>
                            <li className="mt-2"><b className="font-bold">Bins: </b>create with custom metadata, add tracks, share to a public URL, manage visibility settings</li>
                            <li className="mt-2"><b className="font-bold">Contacts: </b>create and manage, create groups for categorized file sharing</li>
                            <li className="mt-2"><b className="font-bold">Sharing: </b>share bins to a unique link, share via email directly to contacts or a group of contacts</li>
                        </ul>



                        <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide w-full mt-8 mb-2 ">Project Report</h1>
                        <p className="text-white/50 font-light mb-4 w-full">During a summer break at university, I collaborated with two fellow students covering the entire development lifecycle within an Agile framework. As the project lead,
                            I oversaw the phases of design, implementation, testing and team management.
                        </p>
                        <p className="text-white/50 font-light mb-4 w-full">This experience enriched my skills in web application development using React and TypeScript. Additionally, I deepened my understanding of system design, relational databases, and the REST API architecture.
                        </p>



                        <p className="text-white/50 font-light mb-4 w-full">Our most significant challenge was facilitating large file uploads directly to the S3 bucket, bypassing our server.
                            We overcame this by generating a signed URL on our server, enabling direct client-to-S3 uploads.
                        </p>

                        <p className="text-white/50 font-light mb-4 w-full">We were successful in delivering all core features we had planned within the timeframe. Most notably, we streamlined our process by using custom SQL functions to
                            bundle multiple queries into one API request and by crafting reusable components for consistent application development.
                        </p>
                    </div>

                </div>


            </div>
            <div className="bg-background2 w-full h-[500px]">

            </div>
        </div>
    );
}

export default BeatsbinDetails;
