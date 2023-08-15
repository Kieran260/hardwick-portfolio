import styles from '../../style'
import ProjectCard from '../ui/project-card';
import ProjectCardIos from '../ui/project-card-ft';
import ProjectCardFt from '../ui/project-card-ft';
import ProjectCardSt from '../ui/project-card-stec';


const ProjectsPage = () => {
    return (
        <div className={`bg-background items-center flex flex-col`}>
            <div className={`flex flex-col bg-background items-center w-screen py-8 ${styles.paddingX} ${styles.boxWidth}`}>
                <div className="text-white bg-clip-text text-2xl font-bold tracking-wide w-full">All Projects</div>

                <div className="py-4 gap-4 grid grid-cols-8 w-full">
                    <ProjectCard className="col-span-8 sm:col-span-4 lg:col-span-2" name="test" />
                    <ProjectCardFt className="col-span-8 sm:col-span-4 lg:col-span-2" name="test" />
                    <ProjectCardSt className="col-span-8 sm:col-span-4 lg:col-span-2" name="test" />
                    <ProjectCardIos className="col-span-8 sm:col-span-4 lg:col-span-2" name="test" />
                </div>

            </div>
        </div>
    )
};

export default ProjectsPage;


