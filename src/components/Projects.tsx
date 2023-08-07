import styles from '../style'
import ProjectCard from './ui/project-card'

const Projects = () => {
  return (
    <section className={`flex flex-col bg-background items-center w-screen py-[100px] ${styles.paddingX}`}>
        <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide pb-[50px]">Projects</h1>
        <div className="py-4 gap-y-4 grid grid-cols-6 w-full">
          <ProjectCard className="col-span-6 sm:col-span-3 lg:col-span-2" name="test" />
          <ProjectCard className="col-span-6 sm:col-span-3 lg:col-span-2" name="test" />
          <ProjectCard className="col-span-6 sm:col-span-3 lg:col-span-2" name="test" />
        </div>
    </section>
  )
}

export default Projects