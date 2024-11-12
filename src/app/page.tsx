import Location from "./icon/location";
import Image from "next/image";
import Mail from "./icon/mail";
import Call from "./icon/call";
import Dot from "./icon/dot";
import Blackdot from "./icon/blackdot";
export default function resume(){
  return (
    <main>
      <section>
        <div className="bg-black h-2 w-[1000px] sm:mx-[100px] lg:mx[150px] "></div>
        <div className="sm:mx-[100px] flex lg:mx[150px] ">
        <div className="bg-blue-900 h-[1500px]  w-80 mt-3 text-white">
        <div className="h-60 w-60 bg-white rounded-full mx-10 my-6">  
        <Image src="/image 17.png" alt="my-image"
                        height={400}
                        width={400}
                        className="h-52 w-52 ml-4 " ></Image>
          </div>
          <h3 className="text-3xl font-semibold ml-14">
            CONTACT
          </h3>
          <div className="bg-white h-1 w-[200px] ml-14 mt-2"></div>
          <div className="space-y-4 ml-4 mt-4">
          <div className="flex ">
          <Call></Call>
          <p className="ml-3 ">03108079196</p>
          </div>
          <div className="flex">
          <Mail></Mail>
          <p className="ml-4">mt1350@gmail.com</p>
          </div><div className="flex">
          <Location></Location>
          <p className="w-56 pl-3">Sector-6b1 Gulshane-Sheraz Surjani Town</p>
          </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold ml-8 mt-10">
              EDUCATION
            </h3>
          <div className="bg-white h-1 w-[220px] ml-8 mt-2"></div>
          <p className="text-sm font-medium mt-4 ml-4">INTERMEDIATE </p>
          <p className="text-sm font-medium mt-1 ml-4 w-52">(COMPLETED EXAM AND AWAITING RESULTS).</p>
          <p className="text-sm font-medium mt-1 ml-4 w-52">[KHADIJA KAZI ALI MEMORIAL HIGH SCHOOL].</p>
          <p className="text-sm font-medium mt-1 ml-4">GOVERNER SINDH IT PROGRAM, <br /> [KARACHI ,PAKISTAN]</p>
          </div>
          <div>
          <h3 className="text-3xl font-semibold ml-8 mt-10">SKILLS</h3>
          <div className="bg-white h-1 w-[120px] ml-8 mt-2"></div>
          <div className=" mt-6">
            <div className="flex">         
           <Dot></Dot>
          <p className="text-sm font-medium">HTML</p>
          
          </div>
          <div className="flex">
          <Dot></Dot>
          <p className="text-sm font-medium">CSS</p>
          </div>
          <div className="flex">
          <Dot></Dot>
          <p className="text-sm font-medium">TYPESCRIPT</p>
          </div>
          <div className="flex">
          <Dot></Dot>
          <p className="text-sm font-medium">JAVASCRIPT</p>
          </div>
          <div className="flex">
          <Dot></Dot>
          <p className="text-sm font-medium">CANVAS</p>
          </div>
          <div className="flex">
          <Dot></Dot>
          <p className="text-sm font-medium">NEXT.JS (Learning)</p>
          </div>
          <div className="flex">
          <Dot></Dot>
          <p className="text-sm font-medium">AI (Learning)</p>
          </div>
          <div className="flex">
          <Dot></Dot>
          <p className="text-sm font-medium">REACT(LAERNING)</p>
          </div>
          </div>
          </div>
          <h4 className="text-3xl font-semibold ml-8 mt-10">LANGUAGES:</h4>
            <div className="bg-white ml-8 h-1 w-[220px] mt-2"></div>
            <p className="ml-8 mt-4">English(Fluent) <br />
            Urdu(Fluent)</p>
        </div>
          
          <div className="ml-10">
            <h1 className="text-5xl mt-20 ">
              M.Taha
            </h1>
        <div className="bg-blue-800 h-1 w-[200px] mt-2"></div>
            <h4 className="mt-6 text-2xl">
              Frontend Developer
            </h4>
            <h4 className="text-3xl font-semibold  mt-10">PROFESSIONAL SUMMARY</h4>
            
          <div className="bg-blue-900 h-1 w-[500px] mt-2"></div>
            <p className="font-medium mt-6 xl:w-[550px]">A passionate and aspiring professional with a strong foundation in Web 3 and Metaverse, Cloud-Native Computing, Artificial Intelligence (AI) and, Deep Learning Ambient Computing and ,IoT Genomics and Bioinformatics Network Programmability and Automation  known for a commitment to continuous learning and a proactive approach. I developed essential skills in teamwork, problem-solving, and technical proficiency. With a growing portfolio of projects. I am dedicated to advancing in the industry and contributing to innovative projects. Driven by curiosity and a strong work ethic, I bring a fresh perspective and a readiness to tackle new challenges.</p>
         
          <h4 className="text-3xl font-semibold mt-10">PROJECTS:</h4>
          <div className="bg-blue-900 h-1 w-[200px] mt-2"></div>
          <div className="flex mt-6">
          <Blackdot></Blackdot>
          <p className=" font-medium">Type Script Hello World Projects</p>
          </div>
          <div className="flex">
          <Blackdot></Blackdot>
          <p className=" font-medium"> Simple Calculator Projects </p>
          </div>
          <div className="flex">
          <Blackdot></Blackdot>
          <p className=" font-medium"> CLI Number Guessing Game </p>
          </div>
          <div className="flex">
          <Blackdot></Blackdot>
          <p className=" font-medium"> ATM Machine Project</p>
          </div>
          <div className="flex">
          <Blackdot></Blackdot>
          <p className=" font-medium"> To Do List </p>
          </div>
          <div className="flex">
          <Blackdot></Blackdot>
          <p className=" font-medium"> Website of Architect </p>
          </div>
          <div className="flex">
          <Blackdot></Blackdot>
          <p className=" font-medium"> My Portfolio </p>
          </div>
          <h4  className="text-3xl font-semibold mt-10"> CERTIFICATES:</h4>
          <div className="bg-blue-900 h-1 w-[250px] mt-2"></div>
          <div className="flex mt-6">
          <Blackdot></Blackdot>
          <p className=" font-medium"> AKUEB Projects </p>
          </div>
          <div className="flex">
          <Blackdot></Blackdot>
          <p className=" font-medium"> Cricket Certificates </p>
          </div>
          <div className="flex">
          <Blackdot></Blackdot>
          <p className=" font-medium"> Red Crescent Certificate for FIRST AID Training </p>
          </div>
          <h4 className="text-3xl font-semibold mt-10">WORK EXPERIENCE</h4>
          <div className="bg-blue-900 h-1 w-[350px] mt-2"></div>
          <p className=" font-medium mt-6">No Experience</p>
          <h4  className="text-3xl font-semibold  mt-10">REFERENCE</h4>
          <div className="bg-blue-900 h-1 w-[200px]  mt-2"></div>
          <p className=" font-medium mt-6">Available upon request</p>
          </div>
        </div>
      </section>
    </main>
  )
}