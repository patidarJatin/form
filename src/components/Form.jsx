import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("Male");
  const [subject, setSubject] = useState({
    English: true,
    Hindi: false,
    Maths: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [option, setOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      subject,
      resume,
      url,
      option,
      about
    );
  };
  const handleChangeButton = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName(""),
      setLastName(""),
      setEmail(""),
      setContact(""),
      setGender("Male"),
      setSubject({
        English: true,
        Hindi: false,
        Maths: false,
      }),
    setOption(""), setResume(""),
    setUrl(""), setAbout("")
  };
  return (
    <div>
      <div className="w-full h-auto  flex justify-center items-center bg-gray-300">
        <div className="w-[50%]  bg-white rounded-md shadow-xl/30  ">
          <div className="md:text-xl  px-[35%] py-2 m-auto text-md  font-bold text-green-600 ">
            Form In React
          </div>

          <form action="#" className="flex flex-col px-10 py-5" method="post">
            {/* firstName */}
            <label htmlFor="FirstName" className="text-base font-semibold">
              First Name
            </label>
            <input
              className="border-1 rounded px-2 py-0.5 font-medium text-[90%] mb-1"
              type="text"
              name="FirstName"
              id="FirstName"
              placeholder="Enter your First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/* lastName */}
            <label htmlFor="LastName" className="text-base font-semibold">
              Last Name
            </label>
            <input
              className="border-1 rounded px-2 py-0.5 font-medium text-[90%] mb-1"
              type="text"
              name="LastName"
              id="LastName"
              placeholder="Enter your Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {/* email */}
            <label htmlFor="email" className="text-base font-semibold">
              Enter Email
            </label>
            <input
              className="border-1 rounded px-2 py-0.5 font-medium text-[90%] mb-1"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* contact */}
            <label htmlFor="Contact" className="text-base font-semibold">
              Contact
            </label>
            <input
              className="border-1 rounded px-2 py-0.5 font-medium text-[90%] mb-1"
              type="Contact"
              name="Contact"
              id="Contact"
              placeholder="Enter your Contact Number"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            {/* gender */}
            <label htmlFor="Gender" className="text-base font-semibold">
              Gender
            </label>
            <div className="flex justify-center md:gap-5 gap-0.5 text-wrap font-medium mb-1">
              <input
                type="radio"
                name="Gender"
                id="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
              <input
                type="radio"
                name="Gender"
                id="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
              <input
                type="radio"
                name="Gender"
                id="Other"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </div>
            {/* subjects */}
            <label htmlFor="Subject" className="text-base font-semibold">
              Your Best Subject
            </label>
            <div className="flex justify-center md:gap-5 gap-0.5 text-wrap font-medium mb-1">
              <input
                type="checkbox"
                name="Subject"
                id="English"
                checked={subject.English === true}
                onChange={(e) => {
                  handleChangeButton("English");
                }}
              />
              English
              <input
                type="checkbox"
                name="Subject"
                id="Hindi"
                checked={subject.Hindi === true}
                onChange={(e) => {
                  handleChangeButton("Hindi");
                }}
              />
              Hindi
              <input
                type="checkbox"
                name="Subject"
                id="Maths"
                checked={subject.Maths === true}
                onChange={(e) => {
                  handleChangeButton("Maths");
                }}
              />
              Maths
            </div>
            {/* resume */}
            <label htmlFor="Resume" className="text-base font-semibold">
              Upload Your Resume
            </label>
            <input
              className="border-1 rounded px-2 py-0.5 font-medium text-[90%] mb-1"
              type="file"
              name="Resume"
              id="Resume"
              required
              value={resume}
              onChange={(e) => {
                setResume(e.target.value);
              }}
            />
            {/* URL */}
            <label htmlFor="URL" className="text-base font-semibold">
              Enter URL
            </label>
            <input
              className="border-1 rounded px-2 py-0.5 font-medium text-[90%] mb-1"
              type="url"
              name="URL"
              id="URL"
              placeholder="Enter URL"
              required
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            {/* select */}
            <label className="text-base font-semibold">
              Select Your Choice
            </label>
            <select
              className="border-1 rounded px-2 py-0.5 font-medium text-[90%] mb-1"
              name="select"
              id="select"
              value={option}
              onChange={(e) => {
                setOption(e.target.value);
              }}
            >
              <option value="" disabled 
              // selected={setOption === ""}
              >
                Select Your Ans
              </option>
              <optgroup label="beginner">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">JavaScrpit</option>
              </optgroup>
              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Angular</option>
                <option value="6">Node.js</option>
              </optgroup>
            </select>

            <label htmlFor="about" className="text-base font-semibold">
              About
            </label>
            <textarea
              className="border-1 h-40 rounded px-2 py-0.5 font-medium"
              name="About"
              id="About"
              cols="30"
              rows="10"
              placeholder="About Your "
              required
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            ></textarea>
            <div className="flex justify-evenly items-center mt-3 ">
              <input
                onClick={handleReset}
                className="md:px-7 md:py-1 bg-green-600 px-[7%] py-1 rounded-md shadow-2xl "
                type="reset"
              />
              <input
                onClick={handleSubmitButton}
                className="md:px-7 md:y-1 bg-green-600 px-[8%] py-1 rounded-md shadow-2xl "
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
