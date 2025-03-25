import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
        Hello, I'm Sriharish, a dedicated Software Developer with expertise in Frontend Development and Machine Learning. With a strong IT background, I focus on building seamless, high-performance, and visually compelling digital solutions that elevate user experiences and drive technological innovation.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <p>
          Currently pursueing Bachelors of Technology in Information and
          Communications Technology from SASTRA Deemed University.
        </p>
        <span>Expected to graduate in June 2025.</span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <p>Proficient in C++ , Python , HTML , CSS , Javascript , Bootstrap , React js.</p>
        <p>
        Proficient in various software tools and technologies with a strong understanding of OOP concepts , along with hands-on experience in Machine Learning frameworks such as TensorFlow, PyTorch, and Scikit-Learn.
        </p>
        <p>
          Excellent problem-solving skills , Good negotiater ,Effective communicator and
          collaborator
        </p>
        <br />
        {/* <br /> */}
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions]
        </span> */}
        {/* <br />
        <br /> */}
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span>
        <br />
        <br /> */}
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
        My mission is to harness my skills and creativity to develop cutting-edge solutions in [Your Field] , delivering exceptional results and enhancing the digital landscape. With a commitment to continuous learning and growth, I embrace new challenges and opportunities to refine my expertise.
        </p>
      </div>
    </div>
  );
}

export default About;
