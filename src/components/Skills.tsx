
import Image from 'next/image';
import dynamic from 'next/dynamic'

const Card = dynamic(()=> import("components/Carta"))


const Skills = ({info}:{info:{allSkills:{skill:{title:String,img:String},_id:undefined}}}) => {


    if(info){

        const skills = [...info.allSkills]
        return (
            <div id='skill' className='w-full min-h-screen h-auto relative grid gap-5 p-20'>
                <h2 className='m-auto text-center text-4xl font-medium font-sans text-gray-700'>Skills</h2>
                <section className='grid min-w-max m-auto w-3/5 h-auto min-h-4/5 gap-12 grid-cols-[repeat(auto-fill,9rem)] items-center p-10 justify-around grid-flow-row-dense'>
                {skills && (
                    skills.map(({skill,_id})=> <Card key={_id} img={skill.img} title={skill.title}/>)
                )}
                </section>
            </div>
        )
    }
    

    return (    
        <div></div>
    )
    
}

export default Skills;
//