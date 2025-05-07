import React from "react";

const Biomark = () => {
  return (
    <>
      <div className="mt-10 py-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-3">Biomark</h1>
        <h4 className="mb-2">Introduction</h4>
        <p className="text-gray-700 mt-2">
          The Biomark Volunteer Mobile Application was developed for Biomark, a
          research organization dedicated to using personal data from voluntary
          participants to build predictive models that personalize digital
          services. The app aims to provide a secure, user-friendly platform
          where volunteers can register, manage their profiles, and contribute
          to Biomark’s research initiatives. This document outlines the
          development process, technical architecture, and security measures
          implemented to meet the requirements of the assignment, ensuring data
          security, privacy, and seamless usability for volunteers.
        </p>
        <h4 className="mt-2">Requirements Analysis</h4>
        <p className="text-gray-700 mt-2">
          The application requirements include creating a user-friendly
          interface that allows volunteers to register, log in, and manage their
          profiles. Key functionalities include account recovery based on
          security questions, strict data storage policies, and the ability for
          volunteers to unsubscribe from the program and delete their profiles.
          Additionally, the assignment specifies that the app must securely
          separate identity information from model-building data, avoiding any
          direct mapping between the two to ensure participant anonymity. This
          ensures compliance with Biomark’s security and privacy standards,
          protecting volunteer identities while allowing data scientists to
          access depersonalized data for research purposes.
        </p>
        <h4 className="mt-2">Technologies Used</h4>
        <p className="text-gray-700 mt-2">
          To build a robust, cross-platform mobile application, we selected
          Flutter for its support for web, iOS, and Android platforms and its
          ability to create intuitive, consistent UIs across devices. Firebase
          Authentication was chosen for secure user login and account
          management, offering a streamlined experience and reducing the
          development workload for handling passwords. Firestore Database stores
          identity and recovery information securely, ensuring easy retrieval
          for account recovery and profile management. For model-building data
          storage, we used a separate backend with Express.js and MongoDB to
          avoid any risk of direct mapping to personal data, enhancing data
          security and compliance with the assignment’s privacy requirements.
        </p>
        <h4 className="mt-2">Application Architecture</h4>
        <p className="text-gray-700 mt-2">
          The application architecture is designed to balance data accessibility
          with privacy. We implemented a data separation strategy to ensure the
          secure handling of personal and model-building data. Identity-related
          data, such as user registration information, is stored in Firebase
          Firestore, which includes data like the volunteer’s name, date of
          birth, and answers to recovery questions. The information used for
          model building (such as height, blood group, and ethnicity) is stored
          in a MongoDB database(Biomark Database). A unique user ID assigned to
          each volunteer acts as a key to link data between Firestore and
          MongoDB in a masked way, enabling profile access without revealing
          personal details. This unique ID is stored as a shared preference on
          the user's device for seamless access while remaining anonymous to
          Biomark’s technical team.
        </p>
        <h4 className="mt-2">Features Implemented</h4>
        <p className="text-gray-700 mt-2">
          The application includes several core features to provide a
          comprehensive user experience. Registration and Login functionality
          are handled through Firebase Authentication, where volunteers create
          accounts using their email and password. During registration, users
          set up security questions that will facilitate account recovery in
          case they forget their login credentials. Profile Management allows
          volunteers to view and update basic information like their email
          address and password, but model-building data remains uneditable after
          initial input. Account Recovery is facilitated by a security
          question-based process, ensuring that recovery data cannot be directly
          queried from the application after initial storage. Finally, the
          Unsubscribe and Delete Account options allow users to completely
          remove their profile from Biomark’s database, maintaining user
          autonomy over their data.
        </p>
        <h4 className="mt-2">Security and Privacy Measures</h4>
        <p className="text-gray-700 mt-2">
          To protect user data, the app employs several security measures. Data
          Masking ensures that even technical staff who access the
          model-building data cannot identify individual volunteers. The No
          Direct Mapping principle is enforced by separating identity data in
          Firebase Firestore and model-building data in MongoDB. This setup
          prevents any direct linkage between recovery information and the data
          used for research, thereby safeguarding volunteers’ identities and
          preventing potential misuse of their personal information. This
          layered approach to security helps maintain trust with users and
          aligns with Biomark’s ethical standards.
        </p>
        <h4 className="mt-2">User Interface Design</h4>
        <p className="text-gray-700 mt-2">
          The app’s User Interface Structure was designed with simplicity and
          accessibility in mind. Each screen was crafted to provide an intuitive
          experience, minimizing the number of steps required to complete tasks
          like registration, profile viewing, and account recovery. Usability
          and Accessibility were prioritized by ensuring that buttons, text, and
          forms were clearly labeled and easily navigable, even on smaller
          screens. The use of Flutter enabled consistent styling across devices
          while also ensuring platform adaptability, allowing users to access
          the app on both iOS and Android without compromising the experience.
        </p>
        <p className="text-gray-700 mt-2">
          Youtube Video :{" "}
          <a
            href="https://youtu.be/M_IHaXyjdrg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link 🔗
          </a>
        </p>
        <p className="text-gray-700 mt-2">
          FrontEnd Repository :{" "}
          <a
            href="https://github.com/Chamalfernando/Biomark_Frontend.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Link 🔗
          </a>
        </p>
        <p className="text-gray-700 mt-2">
          BackEnd Repository :{" "}
          <a
            href="https://github.com/Chamalfernando/Biomark_Backend.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Link 🔗
          </a>
        </p>
      </div>
    </>
  );
};

export default Biomark;
