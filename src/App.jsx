import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import yc from "./assets/ycourses.netlify.app_.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const hero = useRef();
  const one = useRef();
  const two = useRef();

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

  return (
    <>
      <nav className="w-screen fixed bottom-8 z-50 ">
        <div className="w-fit mx-auto bg-black rounded-full bg-opacity-45  py-4 px-10 flex gap-5 text-xl">
          <a href="">Works</a>
          <a href="">Skills</a>
          <a href="">Experience</a>
          <a href="">Resume</a>
          <a href="">Contact</a>
        </div>
      </nav>
      <section className="bg-gray-70 h-screen relative w-screen ">
        <header className="flex gap-8 items-center my-10 px-20">
          <div></div>
          <div className="ml-auto">Burla , WA 7:34 PM IST</div>
          <div className="flex items-center gap-2 outline outline-[0.5px] w-fit px-4 py-2 rounded-full ">
            <div className="relative">
              <div className="bg-green-400 h-2 w-2 rounded-full "></div>
              <div></div>
            </div>
            <div className="uppercase">open to work</div>
          </div>
        </header>
        <div className="fixed h-screen w-screen -z-30 -top-10">
          <div className="relative scale-100 center shrink-0" ref={hero}>
            <div className="text-9xl font-semibold text-center py-20">
              <div className="flex justify-center items-end gap-4">
                I'm Piyush
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5c5da592a9ab9540371bec64/1577650055324-W31WDV3JYGX453Z2KUZ5/DSC00274.jpg?format=2500w"
                  alt=""
                  className="h-24 w-56 object-cover rounded-full "
                />
              </div>
              Creative Fullstack <br />
              Developer.
            </div>
            <div className="text-center text-3xl font-light pb-20">
              I develop accessible, responsive, interactive, and animated <br />
              websites with a strong focus on performance.
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-700 rounded-t-2xl flex flex-col overflow-x-auto">
        <div className="flex h-16 items-center gap-8 relative showcase">
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
        <div className="flex h-screen ">
          <div className="h-full max-w-[40rem] w-96 mx-16 pt-20 pb-40 flex flex-col">
            <div className="text-7xl pb-8">
              Selected <br /> Works
            </div>
            <div className="text-xl font-extralight">
              I've played a key role in developing impactful projects. Here's a
              curated selection showcasing my expertise and the achieved
              results.
            </div>
            <button className="mt-auto bg-yellow-300 w-fit px-6 py-2 rounded-full text-lg text-black">
              Contact
            </button>
          </div>

          <div className="group h-full max-w-[40rem] w-[30rem] mx-16 pt-20 pb-40 flex flex-col flex-shrink-0">
            <div className="bg-orange-300 w-full h-full rounded-2xl px-6 overflow-hidden">
              <div className="flex my-10">
                <div>
                  <div className="text-black text-3xl ">YCourses</div>
                  <div className="text-black opacity-0 group-hover:opacity-100">
                    2023
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
                <img className="rounded-lg" src={yc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen bg-stone-400 relative overflow-hidden hidden">
        <div className="text-7xl m-20">
          My <br /> Skillset
        </div>
        <div className="h-[135vh] relative">
          <div className="bg-purple-400 w-60 h-60 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="absolute spelc ">
            {skills.map((e, i) => {
              const rotationAngle = adjfac + i * (360 / skills.length) + 45;
              return (
                <div
                  className="bg-white w-48 h-48 absolute top-1/2 left-1/2  rounded-xl flex spel"
                  style={{ rotate: `${rotationAngle}deg` }}
                >
                  <img className="m-auto -rotate-90" src={e.img} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full bg-slate-900 py-20 px-[7%] flex flex-col  ">
        <div className="text-7xl mb-16 ">
          My <br /> Skillsets
        </div>
        //Language
        <div className="flex gap-5 mb-8">
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="" />
          </div>
        </div>

        //Web Technologies
        <div className="flex gap-5 mb-8">
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png" alt="html" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png" alt="css" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/3245/PNG/512/node_icon_198061.png" alt="js" />
          </div>

          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://miro.medium.com/v2/resize:fit:1300/format:webp/1*4BtGcPz3JauG9qsNXzLMXA.gif" alt="" />
          </div>

          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://miro.medium.com/v2/resize:fit:600/format:webp/1*7kx2CABxc38topzfJ_vZsQ.jpeg" alt="" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/graphql_logo_icon_171045.png" alt="" />
          </div>
        </div>

        //Framework and Libraries
        <div className="flex gap-5 mb-8">
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" alt="Reactjs" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169186.png" alt="express" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png" alt="tailwind" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_prisma_icon_130444.png" alt="prisma" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/socketio_logo_icon_168806.png" alt="socket.io" />
          </div>
        </div>

        //Database
        <div className="flex gap-5 mb-8">
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="mongodb" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/postgresql_vertical_logo_icon_168900.png" alt="postgresql" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/redis_original_wordmark_logo_icon_146369.png" alt="redis" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/mysql_official_logo_icon_169938.png" alt="Mysql" />
          </div>
        </div>

        //Tools
        <div className="flex gap-5 mb-8">
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/15466/15466163.png" alt="git" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="github" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="figma" />
          </div>
          <div className="w-40 h-40 bg-white rounded-md flex justify-center items-center">
            <img className="h-20" src="https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_alt_macos_bigsur_icon_189814.png" alt="postman" />
          </div>
        </div>

      </section>
      <section className=" w-screen px-20  bg-slate-800 ">
        <div className="py-20">
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
            View Resume
          </div>
          <div className="flex gap-2  mx-auto my-6 ">
            <a href="https://www.linkedin.com/in/piyush-cv/">Linkedin</a>
            <a href="https://github.com/piyush-bit/">Github</a>
            <a href="https://www.geeksforgeeks.org/user/pyshkmr2017/">GFG</a>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-screen px-20 py-20 flex flex-col bg-[#141414] ">
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

export default App;
