import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import styles from '../../../style';
import { beatsbinTracks, beatsbinFilter, beatsbinUpload } from '../../../assets';
import { beatsbinData } from "../../../data/projectsData"; // Update the import path accordingly
import { useParams } from 'react-router-dom';

const ProjectDetails: React.FC = () => {
    const { projectName } = useParams<{ projectName: string }>();
    let projectData;

    if (projectName && projectName.toLowerCase() === 'beatsbin') {
        projectData = beatsbinData;
    }
    // Add more conditions for other projects

    if (!projectData) {
        return <div>Project not found</div>;
    }

    const { name, subTitle, technologies, details, description } = projectData;
    const { about, features, report } = description;

    return (
        <div className={`bg-background ${styles.flexStart} flex flex-col w-[100%] justify-center items-center h-full`}>
            <div className={`${styles.boxWidth} flex flex-col md:flex-row w-full border-white/20`}>
                {/* Main Content */}
                <div className="flex flex-col md:flex-row w-full">
                    {/* Left Side */}
                    <div className={`flex flex-col bg-background items-start py-8 ${styles.paddingX} w-full md:w-2/5 md:h-[100vh] md:overflow-y-auto md:sticky top-0`}>
                        <div className="text-white/50 hover:text-white/75 hover:cursor-pointer bg-clip-text text-sm font-light tracking-wide py-2 w-full inline-flex gap-2 items-center">
                            <HiArrowLeft /> Back to Projects
                        </div>
                        <h1 className="text-white bg-clip-text text-4xl font-bold tracking-wide w-full py-2">{name}</h1>
                        <p className="text-white/50 font-light w-full">{subTitle}</p>
                        <p className="text-white/50 font-semibold text-sm w-full py-2 mt-6">Technologies Used</p>
                        {technologies.map((technology, index) => (
                            <div className="flex border-t border-white/20 w-full py-2 justify-between" key={index}>
                                <p className="text-white/50 font-light text-sm">{technology.label}</p>
                                <p className="text-white/50 font-light text-sm text-end">{technology.value}</p>
                            </div>
                        ))}
                        <p className="text-white/50 font-semibold text-sm w-full py-2 mt-6">Details</p>
                        {details.map((detail, index) => (
                            <div className="flex border-t border-white/20 w-full py-2 justify-between" key={index}>
                                <p className="text-white/50 font-light text-sm">{detail.label}</p>
                                <p className="text-white/50 font-light text-sm text-end">{detail.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className={`flex flex-col bg-background items-center py-8 ${styles.paddingX} w-full md:w-3/5 md:border-l border-white/20`}>
                        <img className="w-full border border-white/20 rounded-md" src={beatsbinTracks} alt="BeatsBin Tracks Page" />
                        <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide w-full mt-8 mb-2">About</h1>
                        <p className="text-white/50 font-light mb-4 w-full">{about}</p>

                        <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide w-full mt-8 mb-2">Features</h1>
                        <ul className="text-white/50 font-light mb-4 w-full">
                            {features.map((feature, index) => (
                                <li className="mt-2" key={index}>{feature}</li>
                            ))}
                        </ul>

                        <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide w-full mt-8 mb-2">Project Report</h1>
                        {report.map((rep, index) => (
                            <p className="text-white/50 font-light mb-4 w-full" key={index}>{rep}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
