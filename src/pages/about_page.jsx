import React from "react";
import aboutMeData from "../about-me.json";
import MyPhoto from "../../src/assets/images/myself.jpg";
import { calculateAge } from '../services/function_services.js';

const AboutPage = () => {
  const { name, birthday, my_training_school, my_major, my_university, working_company, job_position, hobbies } = aboutMeData;
  const age = calculateAge(birthday);

  const commaSeparatedString = my_training_school.join(', ');
  const hobbiesString = hobbies.join(', ');
  return (
    <section className="h-screen bg-white" id="about">
      <div className="flex items-center justify-center pt-40">
        <div className="w-2/4 flex flex-col justify-center items-center space-y-6">
          <img src={MyPhoto} alt="Image Description" className="rounded-full w-72 h-72" />
        </div>
        <div className="w-2/4">
          <div className="w-3/4">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="text-gray-600 text-sm indent-10 text-justify my-5">
              I am {name}, a passionate {age}-year-old professional dedicated to constant growth in the technology field. I hold a background in {my_major} from {my_university}. While initially pursuing this major, my journey has led me to transition my focus toward technology. I further honed my skills at {commaSeparatedString}, where I thrived in real-world projects, enhancing my technical prowess and collaborative aptitude.

              Currently, I excel as a {job_position} at {working_company}. Beyond my career, I find joy in {hobbiesString}, adding a diverse perspective to my problem-solving abilities.

              Looking ahead, my ambition is to continually challenge boundaries. The allure of impactful projects drives me, backed by a strong educational foundation, unquenchable curiosity, and genuine technology enthusiasm. I am poised to embrace new opportunities, leaving an indelible mark on the realm of innovation.
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-gray-600 text-sm">
                  Email:{" "}
                  <a href="mailto:kyawlwinsoe812@gmail.com" className="text-blue-500">
                    kyawlwinsoe812@gmail.com
                  </a>
                  <br />
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/kyaw-lwin-soe-035460203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Kyaw Lwin Soe
                  </a>
                  <br />
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/kyawlwinsoe27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Kyaw Lwin Soe
                  </a>
                </p>
              </div>
              <div>
              <p className="text-gray-600 text-sm">
              Stackoverflow:{" "}
              <a href="https://stackoverflow.com/users/17939115/kyaw-lwin-soe" className="text-blue-500">
                Kyaw Lwin Soe
              </a>
              <br />
              Github:{" "}
              <a
                href="https://github.com/KyawLwinSoe27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Kyaw Lwin Soe
              </a>
              <br />
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
