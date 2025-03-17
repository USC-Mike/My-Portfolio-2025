import React from "react";

const Profile = () => {
  return (
    <section className="px-6 py-10">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-purple-100 rounded-lg shadow">
          <h2 className="text-xl font-mono font-bold">John Doe</h2>
          <p className="mt-2 text-gray-700">
            Full-stack developer with 5 years of experience specializing in React, Node.js, and cloud technologies.
          </p>
          <div className="mt-4">
            <button className="bg-purple-500 text-white px-4 py-2 rounded font-mono">Download Resume</button>
            <a href="#" className="ml-4 text-purple-500 font-mono">View LinkedIn</a>
          </div>
        </div>
        <div className="p-6 bg-purple-100 rounded-lg shadow">
          <h2 className="text-xl font-mono font-bold">Skills</h2>
          <p className="mt-2 text-gray-700">
            JavaScript, TypeScript, React, Node.js, AWS, Docker, MongoDB, PostgreSQL, UI/UX Design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
