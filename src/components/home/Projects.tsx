import styles from '../../style'
import ProjectCard from '../ui/project-card'
import ProjectCardFt from '../ui/project-card-ft'
import ProjectCardIos from '../ui/project-card-ios'
import ProjectCardSt from '../ui/project-card-stec'

const Projects = () => {
  return (
    <section className={`flex flex-col bg-background items-center w-screen py-[100px] ${styles.paddingX}`}>
        <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide pb-[50px]">Projects</h1>
        <div className="py-4 gap-y-4 grid grid-cols-8 w-full">
          <ProjectCard className="col-span-8 sm:col-span-4 lg:col-span-2" name="test" />
          <ProjectCardFt className="col-span-8 sm:col-span-4 lg:col-span-2" name="test" />
          <ProjectCardSt className="col-span-8 sm:col-span-4 lg:col-span-2" name="test" />
          <ProjectCardIos className="col-span-8 sm:col-span-4 lg:col-span-2" name="test" />
        </div>
    </section>
  )
}

export default Projects