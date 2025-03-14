import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import yc from "./assets/ycourses.netlify.app_.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShootingStars } from "./ui/ss";
import { StarsBackground } from "./ui/sb";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const hero = useRef();
  const one = useRef();
  const two = useRef();
  

  const skillsHeading = useRef();
  const languageSection = useRef();
  const webTechSection = useRef();
  const frameworkSection = useRef();
  const databaseSection = useRef();
  const toolsSection = useRef();

  useEffect(() => {

    //scrolltrigger for hero
    gsap.to(hero.current, {
      scale: 0.5,
      scrollTrigger: {
        trigger: hero.current,
        start: "top 10%",
        end: "end -90% ",
        scrub: true,
        // markers: true,
        id: "scrub",
      },
    });

    //scrolltrigger for creative
    gsap.to(one.current , {
      left : 0 ,
      scrollTrigger: {
        trigger: one.current,
        start: "top 100%",
        end: "end -10% ",
        scrub: true,
        // markers: true,
        id: "scrub",
      }})
      gsap.to(two.current , {
        left : 0 ,
        scrollTrigger: {
          trigger: one.current,
          start: "top 100%",
          end: "end -10% ",
          scrub: true,
          // markers: true,
          id: "scrub",
        }})
  
  

    // gsap.to('.horizontal', {
    //   x: () => horizontalSection.scrollWidth * -1,
    //   xPercent: 100,
    //   scrollTrigger: {
    //     trigger: '.horizontal',
    //     start: 'center center',
    //     end: '+=2000px',
    //     pin: '#horizontal-scoll',
    //     scrub: true,
    //     invalidateOnRefresh: true
    //   }
    // });
// Animation for skills section
gsap.fromTo(skillsHeading.current, 
  { x: -100, opacity: 0 },
  { 
    x: 0, 
    opacity: 1, 
    duration: 1,
    scrollTrigger: {
      trigger: skillsHeading.current,
      start: "top 80%",
      toggleActions: "play none none reverse", // play on enter, reverse on leave
    },
  }
);

// Animation for each skill category
const skillSections = [
  languageSection.current,
  webTechSection.current,
  frameworkSection.current,
  databaseSection.current,
  toolsSection.current
];

skillSections.forEach((section, index) => {
  // Animate section entrance
  gsap.fromTo(section, 
    { y: 50, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse", // play on enter, reverse on leave
      },
    }
  );

  // Animate each skill card inside the section
  const skillCards = section.querySelectorAll('.skill-card');
  gsap.fromTo(skillCards, 
    { scale: 0.8, opacity: 0 },
    { 
      scale: 1, 
      opacity: 1, 
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse", // play on enter, reverse on leave
      },
    }
  );
});
    
  }, []);

  const [adjfac, setAdjfac] = useState(0);

  const skills = [
    {
      name: "React",
      img: "",
      description: "",
    },
    {
      name: "RestAPI",
      img: "",
      description: "",
    },
    {
      name: "Javascript",
      img: "",
      description: "",
    },
    {
      name: "figma",
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
      description: "",
    },
    {
      name: "MongoDB & SQL",
      img: "",
      description: "",
    },
    {
      name: "Redis",
      img: "",
      description: "",
    },
    {
      name: "Socket.io",
      img: "",
      description: "",
    },
    {
      name: "Git",
      img: "",
      description: "",
    },
  ];

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <nav className="w-full fixed bottom-8 z-50 ">
        <div className="w-fit mx-auto bg-black rounded-full bg-opacity-85  py-4 px-8 sm:px-10 flex gap-4 sm:gap-8 text-sm sm:text-xl  shadow">
          <p className="cursor-pointer" onClick={() => scrollToSection("works")}>Works</p>
          <a className="cursor-pointer" onClick={() => scrollToSection("skills")}>Skills</a>
          {/* <a className="cursor-pointer" onClick={() => scrollToSection("section1")}>Experience</a> */}
          <a className="cursor-pointer" onClick={() => scrollToSection("resume")}>Resume</a>
          <a className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</a>
        </div>
      </nav>
      <section className="bg-gray-70 h-screen relative w-full">
        <ShootingStars   starWidth={30}/>
        <StarsBackground/>
        <header className="flex gap-4 md:gap-8 items-center my-10 md:px-20 px-4">
          <div></div>
          <div className="ml-auto uppercase">Banglore , {new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date())} IST</div>
          <div className="flex items-center gap-2 outline outline-[0.5px] w-fit px-4 py-2 rounded-full ">
            <div className="relative">
              <div className="bg-green-400 h-2 w-2 rounded-full "></div>
              <div></div>
            </div>
            <div className="uppercase text-xs md:text-sm lg:text-base">open to work</div>
          </div>
        </header>
        <div className="fixed h-screen w-full -z-30 -top-10">
          <div className="relative scale-100 center shrink-0" ref={hero}>
            <div className=" text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-semibold text-center py-20 ">
              <div className="flex justify-center items-end gap-4 ">
                I'm Piyush
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5c5da592a9ab9540371bec64/1577650055324-W31WDV3JYGX453Z2KUZ5/DSC00274.jpg?format=2500w"
                  alt=""
                  className="h-8 w-[72px] md:h-16 md:w-36  lg:h-24 lg:w-56 object-cover rounded-full "
                />
              </div>
              Creative Fullstack <br />
              Developer.
            </div>
            <div className="text-center text-xs md:text-3xl font-light pb-20 px-4">
              I develop accessible, responsive, interactive, and animated <br />
              websites with a strong focus on performance.
            </div>
          </div>
        </div>
      </section>
      {/* <section className="h-screen bg-green-300"></section>
      <section className="h-screen"></section>
      <section className="h-screen"></section> */}
      <section id="works" className="bg-gray-700 rounded-t-2xl flex flex-col overflow-hidden">
        <div className="flex h-16 items-center gap-8 relative showcase  ">
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
          <img
            className="h-5 invert opacity-25"
            src="https://cdn-icons-png.flaticon.com/64/2280/2280787.png"
            alt=""
          />
          <div className="text-lg uppercase opacity-25 font-light">
            showcase
          </div>
        </div>
        <div className="h-10"></div>
        <div className="flex flex-wrap min-h-screen gap-10 justify-around pb-20">
          <div className="h-[90vh] w-[27rem] /w-96 mx-16 pt-10 pb-40 flex flex-col gap-4 ">
            <div className="text-7xl pb-4">
              Selected <br /> Works
            </div>
            <div className="text-xl font-extralight">
              I've played a key role in developing impactful projects. Here's a
              curated selection showcasing my expertise and the achieved
              results.
            </div>
            <button className="mt-auto bg-yellow-300 w-fit px-6 my-4 py-2 rounded-full text-lg text-black" onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>
          <ProjectElement project={{ name : "YCourses", year : "2023", image : yc}} />
          {/* <ProjectElement project={{ name : "YCourses", year : "2023", image : yc}} /> */}
          {/* <ProjectElement project={{ name : "YCourses", year : "2023", image : yc}} /> */}
        </div>
      </section>

      <section id="skills" className="min-h-screen w-full bg-slate-900 py-20 px-[7%] flex flex-col">
  <div className="text-7xl mb-20" ref={skillsHeading}>
    My <br /> Skillsets
  </div>
  
  {/* Languages */}
  <div ref={languageSection} className="mb-16">
    <h2 className="text-3xl font-semibold mb-8 text-yellow-400 border-b-2 border-yellow-400 pb-2 w-fit">
      Programming Languages
    </h2>
    <div className="flex flex-wrap gap-5">
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="TypeScript" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="JavaScript" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="C++" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" />
      </div>
    </div>
  </div>

  {/* Web Technologies */}
  <div ref={webTechSection} className="mb-16">
    <h2 className="text-3xl font-semibold mb-8 text-green-400 border-b-2 border-green-400 pb-2 w-fit">
      Web Technologies
    </h2>
    <div className="flex flex-wrap gap-5">
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png" alt="HTML" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png" alt="CSS" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/3245/PNG/512/node_icon_198061.png" alt="NodeJS" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://miro.medium.com/v2/resize:fit:1300/format:webp/1*4BtGcPz3JauG9qsNXzLMXA.gif" alt="RESTful API" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*7kx2CABxc38topzfJ_vZsQ.jpeg" alt="Auth" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/graphql_logo_icon_171045.png" alt="GraphQL" />
      </div>
    </div>
  </div>

  {/* Frameworks and Libraries */}
  <div ref={frameworkSection} className="mb-16">
    <h2 className="text-3xl font-semibold mb-8 text-blue-400 border-b-2 border-blue-400 pb-2 w-fit">
      Frameworks & Libraries
    </h2>
    <div className="flex flex-wrap gap-5">
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" alt="ReactJS" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169186.png" alt="Express" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png" alt="Tailwind" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_prisma_icon_130444.png" alt="Prisma" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/socketio_logo_icon_168806.png" alt="Socket.io" />
      </div>
    </div>
  </div>

  {/* Database */}
  <div ref={databaseSection} className="mb-16">
    <h2 className="text-3xl font-semibold mb-8 text-purple-400 border-b-2 border-purple-400 pb-2 w-fit">
      Databases
    </h2>
    <div className="flex flex-wrap gap-5">
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="MongoDB" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/postgresql_vertical_logo_icon_168900.png" alt="PostgreSQL" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/redis_original_wordmark_logo_icon_146369.png" alt="Redis" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/mysql_official_logo_icon_169938.png" alt="MySQL" />
      </div>
    </div>
  </div>

  {/* Tools */}
  <div ref={toolsSection} className="mb-16">
    <h2 className="text-3xl font-semibold mb-8 text-red-400 border-b-2 border-red-400 pb-2 w-fit">
      Development Tools
    </h2>
    <div className="flex flex-wrap gap-5">
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/15466/15466163.png" alt="Git" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="GitHub" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Figma" />
      </div>
      <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center skill-card hover:scale-105 transition-transform">
        <img className="h-20" src="https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_alt_macos_bigsur_icon_189814.png" alt="Postman" />
      </div>
    </div>
  </div>
</section>
      <section id="resume" className=" w-full px-20  bg-slate-800 hidden ">
        <div className="py-20 hidden">
          <div className="w-96 text-xl">
            I've worked in UI design and front-end development, so I can
            understand designs well and builds effective communication between
            team members.
          </div>

          <div className="my-36 relative mx-auto w-fit">
            <div className="text-[9rem] font-semibold -my-24 py-2 relative left-[-30rem]" ref={one}>
              Creative
            </div>
            <div className="text-[9rem] font-semibold -my-24 py-2 relative">
              FullStack
            </div>
            <div className="text-[9rem] font-semibold -my-24 py-2 relative left-[30rem] ctwo" ref={two}>
              Developer
            </div>
          </div>
          <div className="w-96 text-xl ml-auto">
            Currently, I live in _________.  In my personal life, I love to travel
            with my backpack, watch documentaries about geography, and explore
            new traditional music.
          </div>
        </div>

        <div className="w-full flex flex-col py-40 ">
          <div className="my-20 ml-80 flex relative group">
            <div className="bg-yellow-400 h-[27rem] w-80 mx-auto rounded-lg relative right-32 group-hover:rotate-6 transition-all duration-200 origin-bottom top-5">
            </div>
            <img className="h-[30rem] -rotate-2 absolute right-1/2 group-hover:-rotate-12 transition-all duration-200 origin-bottom" src="/Portfolio.png" alt="" />

          </div>
          <div className="mx-auto bg-yellow-400 text-black text-lg px-6 py-3 rounded-full">
            <a href="https://drive.google.com/file/d/1DltfgAmzGgCoQI5zuAUjNbuWQSOJ-yWJ/view?usp=sharing">View Resume</a>
          </div>
          <div className="flex gap-2  mx-auto my-6 ">
            <a href="https://www.linkedin.com/in/piyush-cv/">Linkedin</a>
            <a href="https://github.com/piyush-bit/">Github</a>
            <a href="https://www.geeksforgeeks.org/user/pyshkmr2017/">GFG</a>
          </div>
        </div>
      </section>
      <section id="contact" className="min-h-screen w-full px-5 sm:px-10 md:px-20 py-20 flex flex-col bg-[#141414]">
        <div className="flex">
          <div className="w-80">
            <div className="text-7xl mt-10">
              Let's <br />
              Connect.
            </div>
            
            <div className="my-10"><a href="mailto:mr.piyush.cv@gmail.com">mr.piyush.cv@gmail.com</a></div>
            <div className="flex justify-between">
              <a href="https://twitter.com/Piyush_cv"><img
                className="h-5 invert "
                src="https://cdn-icons-png.flaticon.com/64/5968/5968830.png"
                alt="x"
              /></a>
              <a href="https://www.instagram.com/piyush.cv/">
              <img
                className="h-5 invert "
                src=" https://cdn-icons-png.flaticon.com/64/717/717392.png"
                alt="insta"
              />
              </a>
              
              <a href="https://www.linkedin.com/in/piyush-cv/"><img
                className="h-5 invert "
                src="https://cdn-icons-png.flaticon.com/64/3128/3128219.png"
                alt="linkedin"
              /></a>
              <a href="https://github.com/piyush-bit/"><img
                className="h-5 invert "
                src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png"
                alt="github"
              /></a>
              <a href="https://www.geeksforgeeks.org/user/pyshkmr2017/"><img
                className="h-5 invert "
                src="https://cdn-icons-png.flaticon.com/512/10478/10478244.png"
                alt="CLI"
              /></a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="text-center mt-auto">© 2024 Piyush Kumar</div>
      </section>
    </>
  );
}

const ProjectElement = ({ project }) => {
    return <div className="bg-orange-300 w-full h-full rounded-2xl px-6 overflow-hidden max-w-[35rem] max-h-[90vh]">
    <div className="flex my-10 ">
      <div>
        <div className="text-black text-3xl ">{project.name}</div>
        <div className="text-black opacity-0 group-hover:opacity-100">
          {project.year}
        </div>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <div className="text-black text-xl font-light">Visit</div>
        <div className=" h-6 w-6 rounded-full bg-black flex">
          <img
            className="h-4 -rotate-45 invert m-auto"
            src="https://cdn-icons-png.flaticon.com/64/545/545682.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="pt-8">
      <img className="rounded-lg" src={project.image} alt="" />
    </div>
  </div>;
}

export default App;
