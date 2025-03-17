const About = () => {
  return (
    <div className="flex flex-col gap-4 bg-dark-900 rounded-lg shadow-lg">
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2 h-full">
          <div className="h-2 w-2 rounded-full bg-black shadow-[0px_0px_10px] shadow-white"></div>
          <h2 className="text-2xl font-bold">About</h2>
        </div>

        <div className="pl-4 flex flex-col gap-4">
          <h2 className="text-black-300 text-xl font-bold">Hi, I'm Mike 👋</h2>
          <p className="text-black-400 leading-loose mt-3 text-sm">
            As a passionate and driven Bachelor of Science in Information
            Systems (BS-IS) student, I am dedicated to leveraging my technical
            expertise and problem-solving abilities to develop innovative
            solutions. My strong foundation in programming, database management,
            and web development allows me to excel in creating efficient and
            user-friendly applications. With hands-on experience in various
            projects, I have honed my skills in software development, project
            management, and UI/UX design, ensuring that I can adapt to
            fast-paced technological environments.{" "}
          </p>
          <p className="text-black-400 leading-loose mt-3 text-sm">
            Beyond my technical abilities, I am an eager learner who thrives in
            collaborative settings. My experience working on academic and
            freelance projects has strengthened my ability to work with diverse
            teams, meet deadlines, and tackle challenges head-on. I am
            enthusiastic about applying my knowledge in a real-world setting and
            making meaningful contributions through an internship that will
            further enhance my skills and industry understanding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
