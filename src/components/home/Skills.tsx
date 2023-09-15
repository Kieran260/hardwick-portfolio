import styles from '../../style'
import SkillBadge from '.././ui/skill-badge'
import { AiOutlineFileText } from 'react-icons/ai'

const Skills = () => {

  return (
    <section className={`flex flex-col bg-background items-center w-full py-[100px] border-b border-white/20 ${styles.paddingX}`}>


      <div className={`${styles.boxWidth} flex flex-col lg:flex-row justify-between gap-8 gap-y-16 w-full`}>
        <div className="flex flex-col flex-grow max-w-1/5">
          <h3 className="text-blue-400 font-semibold text-sm tracking-wide mb-4">About Me</h3>
          <h1 className="text-white bg-clip-text text-3xl font-bold tracking-wide mb-4">Welcome</h1>
          <p className="text-gray-400 text-md mb-4">
            I'm Kieran Hardwick, a Computer Science student at the University of Liverpool, specializing in Software Development. My project portfolio, showcased below, reflects a blend of academic insights and hands-on experience.
          </p>
          <p className="text-gray-400 text-md mb-4">
            {`If you're seeking a dedicated software developer to enhance your team or contribute to your projects, please contact me at `}
            <a href="mailto:kieranhardwick260@gmail.com" className="hover:underline text-blue-500">kieranhardwick260@gmail.com</a>
          </p>

          <div className="inline-flex gap-2 mt-2">
            <button className="bg-background text-gray-200 hover:border-gray-200 hover:bg-white/5 transition-colors border-white/20 inline-flex justify-center text-sm items-center gap-x-2 px-4 h-10 text-center border rounded-lg mb-4"><AiOutlineFileText size={18} className="text-white" />View Resume</button>
            <button className="bg-background text-gray-200 hover:border-gray-200 hover:bg-white/5 transition-colors border-white/20 inline-flex justify-center text-sm items-center gap-x-2 px-4 h-10 text-center border rounded-lg mb-4">Learn More</button>
          </div>
        </div>

        <div className="lg:min-w-[600px]">
          <h1 className="text-white bg-clip-text text-2xl font-bold tracking-wide mb-4">Skills</h1>
          <div className={`${styles.boxWidth} grid grid-cols-1 sm:grid-cols-2 w-[1000px] items-center font-normal text-lg gap-x-4`}>
            <div className="py-1 my-4 rounded-md col-span-1 bg-gradient-to-r from-blue-400 at-50 to-purple-400">
              <div className="relative justify-center bg-background2 w-full p-4 h-[120px]">
                <h1 className="text-white text-sm font-normal mb-2">Web Development</h1>
                <div className="grid grid-cols-2 gap-2">
                  <SkillBadge className="col-span-1" skillName='HTML' />
                  <SkillBadge className="col-span-1" skillName='CSS' />
                  <SkillBadge className="col-span-1" skillName='React' />
                  <SkillBadge className="col-span-1" skillName='Tailwind' />
                </div>
              </div>
            </div>
            <div className="py-1 my-4 rounded-md col-span-1 bg-gradient-to-r from-purple-400 at-50 to-pink-400">
              <div className="relative bg-background2 col-span-1 p-4 h-[120px]">
                <h1 className="text-white text-sm font-normal mb-2">Programming Languages</h1>
                <div className="grid grid-cols-6 gap-2">
                  <SkillBadge className="col-span-2" skillName='Java' />
                  <SkillBadge className="col-span-2" skillName='Swift' />
                  <SkillBadge className="col-span-2" skillName='Python' />
                  <SkillBadge className="col-span-3" skillName='JavaScript' />
                  <SkillBadge className="col-span-3" skillName='TypeScript' />
                </div>
              </div>
            </div>
            <div className="py-1 my-4 rounded-md col-span-1 bg-gradient-to-r from-pink-400 at-50 to-red-400">
              <div className="relative bg-background2 w-full p-4 h-[120px]">
                <h1 className="text-white text-sm font-normal mb-2">Database & Cloud</h1>
                <div className="grid grid-cols-4 gap-2">
                  <SkillBadge className="col-span-2" skillName='SQL' />
                  <SkillBadge className="col-span-2" skillName='NoSQL' />
                  <SkillBadge className="col-span-2" skillName='PostgreSQL' />
                  <SkillBadge className="col-span-2" skillName='AWS' />
                </div>
              </div>
            </div>
            <div className="py-1 my-4 rounded-md col-span-1 bg-gradient-to-r from-red-400 at-50 to-yellow-400">
              <div className="relative bg-background2 w-full p-4 h-[120px]">
                <h1 className="text-white text-sm font-normal mb-2">Tools & Frameworks</h1>
                <div className="grid grid-cols-6 gap-2">
                  <SkillBadge className="col-span-2" skillName='Git' />
                  <SkillBadge className="col-span-2" skillName='Node' />
                  <SkillBadge className="col-span-2" skillName='NextJS' />
                  <SkillBadge className="col-span-3" skillName='JUnit' />
                  <SkillBadge className="col-span-3" skillName='Spring Boot' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



    </section>
  )
}

export default Skills
