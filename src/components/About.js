import profileImg from "../assets/profile-photo.jpg"

function About(props) {


  return (
    <section className="bg-oxford flex justify-around relative h-[800px]">
      <div className="relative w-1/4">
        <div className="bg-cornflower absolute top-10 left-10 w-fit h-fit shadow-xl shadow-lavender rounded-3xl p-5 m-5">
          <img src={profileImg} className="object-contain h-[400px] rounded-3xl"></img>
        </div>
      </div>
      <div className="relative w-2/3">
        <div className="bg-cornflower flex flex-col items-center absolute top-40 left-0 w-3/4 h-fit shadow-xl shadow-lavender rounded-xl m-5">
          <div className="text-white text-3xl w-full border-b-2 border-lavender p-5">
            About Me
          </div>
          <div className="text-white p-5">
          Full Stack Web Developer with an ability to learn quickly and adapt from working collaboratively
          and self-starting. I’m eager to start a challenging position in web development and to be able to
          use my skills in communication, critical thinking, and leadership to collaborate on a high performing, 
          positive, and creative team.
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;