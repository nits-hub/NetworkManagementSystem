<a name="br1"></a> 

**Network Management System**

***A project report submitted in the partial fulfillment of the requirement for the award of the***

***degree of Master of Computer Applications (MCA)***

**Submitted by**

Nitesh Ratre

Roll No: 21223044

MCA- VI Semester

(Session: 2023-2024)

**Submitted to**

**Dr. Priyanka Tripathi**

**Head**

Department of Computer Applications

National Institute of Technology Raipur

**Dr. Dibakar Saha**

**Supervisor**

Department of Computer Applications

National Institute of Technology Raipur

**Department of Computer Applications**

**National Institute of Technology, Raipur**



<a name="br2"></a> 

**DECLARATION**

I, **Nitesh Ratre, 21223044**, hereby declare that the work done in the project entitled **Network**

**Management System**  is done on my own.

I confirm that:

● The work contained in this report is original and has been done by me under the guidance

of \_\_\_**Dr. Dibakar Saha, Assistant Professor**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_,

● The work has not been submitted to any other institute for any other degree or diploma;

● I have followed the guidelines provided by the institute in preparing the project report;

● I have conformed to ethical norms and guidelines while writing the project report.

● Whenever I have used materials such as data, models, figures, and text from other

sources, I have given them due credit by citing them in the report and providing their details

in the references.

Place: Raipur

Date:

Student Name and Signature

Roll No:

MCA-VI Semester

1



<a name="br3"></a> 

**CERTIFICATE FROM THE SUPERVISOR**

This is to certify that the project entitled \_\_\_**Network Management System**\_\_\_\_\_\_ has been

carried out by **Nitesh Ratre, 21223044**, MCA 6th Semester, under my guidance.

The matter embodied in this project has not been submitted for the award of any other degree

or diploma to the best of my knowledge.

Place: Raipur

Date:

(Supervisor signature and seal)

2



<a name="br4"></a> 

**BONAFIDE CERTIFICATE BY THE HEAD OF THE DEPARTMENT**

This is to certify that Mr.

**Nitesh Ratre**

a student of the Department of Computer Applications,

National Institute of Technology, Raipur, Roll No. **21223044 ,** has carried out the project training at

**National Informatics Centre, Bilaspur**  as partial fulfillment of the requirement for the award of the

degree of Master of Computer Applications.

He/She has worked in the project entitled

**Network Management System**

**.** Their

performance and conduct have been found to be good.

This certificate issued by the undersigned does not cover my responsibility regarding the statements

made and work carried out by the concerned student. The current dissertation is hereby being forwarded

for evaluation for the purpose for which it has been submitted

Place: Raipur

Date:

(Head signature and seal)

3



<a name="br5"></a> 

**CERTIFICATE OF APPROVAL**

The forgoing project entitled**  **Network Management System**  is hereby approved as a

creditable work for the

partial fulfillment of the requirement for the award of the degree of Master of Computer

Applications and has been presented in a satisfactory manner.

This certificate issued by the undersigned does not cover my responsibility regarding the

statements made and work carried out by the concerned students. The current dissertation is

hereby being forwarded for evaluation for the purpose for which it has been submitted.

Place: Raipur

Date:

(Name and Signature Internal Examiner)

(Name and Signature External Examiner)

4



<a name="br6"></a> 

**CERTIFICATE FROM ORGANIZATION**

5



<a name="br7"></a> 

**List of Content (INDEX)**

**TOPIC**

**PAGE NO.**

1\. INTRODUCTION…………………………………………………………… 09

1\.1. ABOUT ORGANIZATION…………………………………………. 09

1\.2. ABOUT THE PROJECT…………………………………………… 10

1\.3. RELATED WORK…………………………………………………... 10

1\.4. MOTIVATION……………………………………………………….. 11

2\. PROJECT OVERVIEW………………………………………………….... 12

3\. SYSTEM MODEL………………………………………………………….. 14

3\.1. MODULE DESCRIPTION………………………………………… 14

3\.2. MINIMUM HARDWARE AND SOFTWARE REQUIREMENT… 15

3\.3. LIBRARIES USED…………………………………………………. 17

4\. METHODOLOGY…………………………………………………………... 18

4\.1. AUTHENTICATION………………………………………………… 18

4\.2. AUTHORIZATION………………………………………………….. 19

4\.3. DATA ENCRYPTION………………………………………………. 19

4\.4. TOKEN AUTHENTICATION………………………………………. 20

5\. IMPLEMENTATION………………………………………………………… 21

5\.1. ENTITY RELATIONSHIP DIAGRAM…………………………….. 21

5\.2. DATA FLOW DIAGRAM…………………………………………… 22

6\. RESULTS…………………………………………………………………… 26

7\. CONCLUSION AND FUTURE WORK…………………………………... 33

8\. BIBLIOGRAPHY……………………………………………………………. 34

**List of Figures**

**FIG 5.1(a)** [E-R Diagram].................................................................................. 21

**FIG 5.2(b)** [DFD-lvl0]......................................................................................... 22

**FIG 5.2(c)** [DFD-lvl1]......................................................................................... 23

**FIG 5.2(d)** [DFD-lvl2]......................................................................................... 24

6



<a name="br8"></a> 

**Acknowledgement**

We would like to extend our sincere gratitude to everyone who contributed to the

successful completion of this project. First and foremost, we thank our advisor,

**Dr. Dibakar Saha**, Assistant Professor, for their invaluable guidance, continuous support,

and constructive feedback throughout this research. Their expertise and encouragement

were instrumental in overcoming various challenges and achieving our project goals.

We also wish to express our appreciation to the **National Informatics Centre (NIC**

**Bilaspur)** for providing the necessary resources and facilities that enabled us to carry out

this project effectively. Special thanks go to the members of the information for their

assistance and collaboration, which greatly enriched our research experience.

7



<a name="br9"></a> 

**NETWORK MANAGEMENT SYSTEM**

***Abstract:*** The increasing complexity of managing network-related issues in organizations

necessitates a robust system for efficiently handling employee complaints.Employees often

encounter problems related to internet connectivity and system performance while working on

their personal computers. Traditionally, these issues were reported manually via phone calls,

leading to delays and inefficiencies in problem resolution.

The primary task was to develop a comprehensive network management system that would

allow for real-time complaint receiving and resolving, with employees registered under the

specified departments. These departments could address the issues themselves and escalate

them to an admin in case of unresolved problems.

We developed a network management system using the MERN Stack—MongoDB, Express.js,

React.js, Node.js—fused with CSS frameworks like Tailwind CSS and React Material UI. The

system was designed for three account types: Admin, Department, and Employee. Employees

could raise a complaint related to a network issue, which departments would then attempt to

resolve. If any department failed to resolve the complaint, it could be forwarded to the admin for

further action. The system is built to make the handling of complaints seamless and designed

for structured workflow in the resolution of issues.

The implementation of this network management system has significantly improved the

efficiency of handling and resolving network-related complaints. Departments can now manage

and address issues in real-time, ensuring minimal disruption to employees' work.

**Keywords:-** Employee Complaints, Departmental Management, Real-time Complaint Handling etc.

8



<a name="br10"></a> 

**1. Introduction**

**1.1. About Organization Profile**

**Organization name:** National Informatics Centre (NIC).

National Informatics Centre (NIC) under the Ministry of Electronics and

Information Technology (MeitY) is the technology partner of the Government

of India. It was established in 1976 to provide technology-driven solutions to

Central and State Governments in various aspects of development. NIC has

been instrumental in adopting and providing Information and Communication

Technology (ICT) and governance support to the Central Government.

NIC has also developed several digital platforms for the socioeconomic

development of the country with the ‘One-Nation One-Platform’ initiative to

empower citizens digitally. Its services have created a perfect interaction of

the Government with citizens, Government employees and businesses. With

the objective of focused study of new technology, exploring and experimenting

with its use in governance, NIC has set up a Centre of Excellence (CoE) in

Data Analytics, Artificial Intelligence, Blockchain and Application Security.

National Informatics Centre (NIC) Mantralaya, Nava Raipur Chhattisgarh. NIC

has played an important role as an active catalyst and facilitator in informatics

development programmed in Governments at the national, state and district

levels, during the last 26 years.

The efforts of NIC Chhattisgarh for providing start-of-the art e-Governance

solutions to state government, district government and citizens of

Chhattisgarh have been recognized with various prestigious awards at the

National, State and District levels. Chhattisgarh State Centre (CGSC), of NIC,

was set up at Raipur, in the year 2001 to provide ICT (Information &

Communication Technologies) services to government departments and

organizations.

NIC Chhattisgarh, Department of Electronics and Information Technology,

Government of India is providing network backbone and e-Governance

support to Chhattisgarh State Government and Districts National Informatics

Centre is a premier organization in the field of Information Technology (IT) in

India.

Projects for both Central Government and State Government in the areas of:

a. Central Sector

b. State sector

c. District

District centers are operational in the districts with state-of-the-art VC studios,

high-speed NICNET connectivity and DIO/DIA to manage the district centers'

activities and support various e-governance initiatives for achieving the

targeted goal of delivering efficient citizen services to the common public in

the State.

9



<a name="br11"></a> 

**NIC Quality Policy:** The National Informatics Centre is committed to

meeting and exceeding customer requirements by providing Quality and

Reliable ICT services and global solutions. For this, we shall continually

improve our Processes through a team of Competent Professionals, Adoption

of Appropriate Technologies, use of International Standards and Best

Practices.

**NIC Services:** NIC is providing network backbone and e-Governance

support to the Central Government, State Governments, UT Administrations,

Districts and other Government bodies. It offers a wide range of ICT services

including the Nationwide Communication Network for decentralized planning,

improvement in Government services and wider transparency of national and

local Governments. Such as bio-metric attendance, cloud, e-office,

messaging, network, cyber security, VC, and Webcast data centre.

**Evolution of National Informatics Centre:** NIC was set up in March

1975 by the Government of India to play a promotional role in creating

computer awareness and for developing and implementing computer-based

information systems for decision support in the Ministries and the Department

of central Government.

**1.2. About The Project**

**1.2.1. Project Title:** Network Management System.

**1.2.2. Project Objective:** The objective of the Network Management

System project is to develop a comprehensive and efficient platform for

managing and resolving network-related issues within an organization.

This system aims to streamline the process of receiving and

addressing complaints from employees who encounter internet

connectivity and system performance problems while working on their

personal computers. By utilizing the Network Management System, the

project seeks to facilitate real-time complaint handling and resolution.

**1.3. Related Works**

In the realm of network management and technical support, numerous

systems have been developed to address the challenges of handling

employee complaints and ensuring efficient resolution of network-related

issues. Traditional methods, such as manual phone call reporting, have long

been used but are plagued by inefficiencies, delays, and a lack of structured

tracking and resolution mechanisms. Our project builds upon these concepts

of integrating the strengths of real-time monitoring and structured systems into

10



<a name="br12"></a> 

a unified platform tailored for an organizational setting. Utilizing the MERN

Stack, our Network Management System offers a responsive and interactive

user interface, ensuring ease of use for employees and efficiency for IT

departments. By incorporating real-time complaint handling and resolution

capabilities, alongside the ability to escalate unresolved issues to an admin,

our system addresses the gaps identified in previous solutions.

**1.4. Motivation**

In today’s fast-paced work environment, effective management of

network-related issues is crucial for maintaining productivity and ensuring

smooth operations. Employees frequently encounter technical problems

related to internet connectivity, system performance, and other

network-related issues while working on their personal computers. Traditional

methods of addressing these problems, such as manual phone calls to IT

support, often result in delays, inefficiencies, and a lack of structured tracking.

The motivation behind developing the Network Management System stems

from the need to streamline and modernize the process of handling and

resolving these technical issues. By automating the complaint reporting and

resolution process, we aim to enhance the efficiency of technical support and

minimize downtime for employees. The traditional approach of handling

complaints via phone calls is outdated and does not meet the demands of

today’s dynamic work environments, where real-time problem resolution is

essential.

Our project seeks to address these challenges by providing a comprehensive

solution that integrates real-time complaint handling, structured workflows,

and user-friendly interfaces. The use of modern technologies such as the

MERN Stack and advanced CSS frameworks ensures that the system is both

scalable and intuitive. This approach not only improves the speed and

effectiveness of issue resolution but also offers a more organized and

transparent method of managing network-related complaints.

The ultimate goal is to create a system that enhances overall organizational

efficiency, supports a seamless user experience, and allows departments to

address technical issues proactively. By bridging the gap between traditional

manual methods and advanced automated solutions, the Network

Management System is designed to meet the evolving needs of modern

workplaces and ensure that employees can work without unnecessary

interruptions.

11



<a name="br13"></a> 

**2. Project Overview**

In contemporary work environments, employees frequently face technical issues

related to internet connectivity, system performance, and other network-related

problems while using their personal computers. Traditional methods of reporting and

resolving these issues, such as manual phone calls to IT support, are often

inefficient, resulting in delays and a lack of structured tracking. The absence of a

streamlined system for managing complaints leads to prolonged downtime and

diminished productivity. Therefore, there is a need for an effective solution that can

facilitate real-time complaint receiving and resolution, ensuring that technical issues

are addressed promptly and systematically.

**Key Features:**

**1. User Registration and Authentication:**

● Departments can register through email ID and password.

● Department Registration is effective only after approval from an

admin. Until then, the department will not be active.

● Approved departments can directly register their employees

using email ID and password.

● Users can log in with their registered email ID and password.

**2. Password Recovery:**

● Users who lose their passwords can reset them through a

secure process.

● The password reset process includes email verification to

ensure security.

**3. Role based access:**

● The system supports role-based login, allowing different levels of

access based on user roles. Each role has a distinct dashboard,

tailored to the specific tasks and responsibilities associated with

that role.

**4. Dashboard and Task management:**

● Customized dashboards display relevant information and

metrics for each role. Users can manage and track their tasks,

ensuring they stay on top of their responsibilities.

● Users can manage and track their tasks, ensuring they stay on

top of their responsibilities.

12



<a name="br14"></a> 

The application is powered by the MERN Stack framework. The MERN stack is a

powerful and popular technology stack for building modern web applications. Here

are some key features and benefits of using the MERN stack for your project:

**Key Features:**

**1. MongoDB:**

● **NoSQL Database:** A flexible, schema-less database that allows for the

storage of JSON-like documents.

● **Scalability:** Easily handles large amounts of data and scales

horizontally.

**2. Express.js:**

● **Backend Framework:** A minimal and flexible Node.js web application

framework<sup>[2]</sup>.

● **Middleware Support:** Provides a robust set of features to develop web

and mobile applications.

● **API Development:** Simplifies the process of building RESTful APIs.

**3. React.js:**

● **Frontend Library:** A powerful library for building user interfaces,

especially single-page applications<sup>[1]</sup>.

● **Component-Based Architecture:** Encourages reusable UI

components.

● **Virtual DOM:** Improves performance by efficiently updating and

rendering the UI.

**4. Node.js:**

● **Server-Side Environment:** Enables JavaScript to be used for

server-side scripting.

● **Event-Driven:** Handles asynchronous operations efficiently.

● **Scalability:** Supports building scalable network applications.

**Benefits:**

**1. Unified Language:**

● **JavaScript Throughout:** Allows both client-side and server-side

development using JavaScript, streamlining the development process

and reducing context switching.

**2. Strong Community Support:**

● **Vast Ecosystem:** Access to a large number of libraries, tools, and

resources, as well as a strong community for support and development.

**3. Full-Stack Development:**

● **End-to-End Solution:** Provides a complete solution for building

13



<a name="br15"></a> 

modern web applications, covering both frontend and backend needs.

**4. Scalability and Performance:**

● **Efficient Performance:** React’s virtual DOM and Node.js’s

event-driven architecture ensure high performance and scalability<sup>[1]</sup>.

● **Horizontal Scaling:** MongoDB and Node.js support horizontal scaling,

making it easier to handle large amounts of data and high traffic.

**5. Rapid Development:**

● **Reusable Components:** React’s component-based architecture

promotes reusability and faster development<sup>[1]</sup>.

● **Express Middleware:** Simplifies the handling of HTTP requests and

responses with built-in middleware support.

**6. Real-Time Capabilities:**

● **Node.js:** Supports real-time applications and services, such as chat

applications or live data feeds.

**7. Single Page Applications (SPA):**

● **React:** Facilitates the development of dynamic and responsive

single-page applications that provide a seamless user experience<sup>[1]</sup>.

**3. System Model**

**3.1. Module Description**

**3.1.1. User Module**

The User Module is a fundamental component of the Work Monitoring

System, designed to manage and track user-related activities and data,

ensuring efficient monitoring, reporting, and management of tasks,

performance, and productivity. This module facilitates secure access, effective

task management, real-time performance tracking, and robust communication

and collaboration among users. Below is a detailed description of the User

Module and its key functionalities:

**3.1.1.1. User Management**

**User Registration and Authentication:** New users can create accounts by

providing essential information such as name, email, role, and department to an

administrator. The module manages secure login and logout processes, employing

robust authentication mechanisms like two-factor authentication.

**User Profiles:** Comprehensive user profiles store detailed information, including

personal details, contact information, job titles, departments, and roles within the

organization.

**Role-Based Access Control (RBAC):** This feature ensures that users have

appropriate access levels and permissions based on their roles (e.g., admin, nodal,

14



<a name="br16"></a> 

employee), enhancing system security and operational efficiency.

**3.1.1.2. Complaint Management**

●

●

●

**Complaint Submission:** Facilitate easy submission of complaints by employees

through a user-friendly interface.

**Complaint Tracking:** Allow employees to track the status of their complaints in

real-time.

**Automated Routing:** Automatically route complaints to the appropriate department

or individual for resolution.

**3.2. Minimum Hardware and Software Requirements**

**3.2.1. Hardware Requirements**

● **Processor:** Minimum 1.2 GHz, i3 or above

● **RAM:** Minimum 4 GB or above

● **Internal Storage (HDD or SSD):** 80 to 100 GB (Recommended) or

above

● **Mouse: Optical (Recommended) Keyboard:** Multimedia

(Recommended)

**3.2.2. Software Requirements**

● **Operating System:**

○ Windows 10 or later (64-bit)

○ macOS Mojave (10.14) or later

○ Linux distributions (e.g., Ubuntu 20.04 LTS or later)

**● Development Environment:**

○ Node.js v20 or later

○ npm (Node Package Manager) included with Node.js installation

**● Database:**

○ MongoDB v8 or later

○ MongoDB Compass (optional, for GUI management)

**● Server:**

**○** Express v4.19.2<sub>[2]</sub>

**● Additional Tools:**

**○** VSCode (Visual Studio Code) or any preferred code editor

**○** Postman (for API testing).

**● Frontend Framework:**

**○** React v18<sup>[1]</sup>

**○** Browsers: Latest versions of Google Chrome, Mozilla Firefox,

15



<a name="br17"></a> 

Microsoft Edge, or Safari

**3.3. Technology Description**

**3.3.1. React**

React is a popular JavaScript library for building user interfaces, primarily

developed and maintained by Facebook. It is widely used for creating

single-page applications where efficiency, flexibility, and scalability are

paramount. React allows developers to build reusable UI components, which

can manage their own state and compose them to create complex user

interfaces. This component-based architecture not only promotes code reuse

but also makes it easier to manage and maintain large-scale applications<sup>[1]</sup>.

**3.3.2. Node**

Node.js, commonly referred to as Node, is a powerful, open-source,

cross-platform runtime environment that allows developers to execute

JavaScript code outside of a web browser. Initially developed by Ryan Dahl in

2009, Node.js has revolutionized the way server-side and network application

development is approached. Built on Google Chrome's V8 JavaScript engine,

Node.js enables efficient and scalable server-side scripting, making it a

popular choice for building fast, responsive applications. One of the key

features that sets Node.js apart is its non-blocking, event-driven architecture.

**3.3.3. Express**

Express.js, commonly referred to as Express, is a minimal and flexible

Node.js web application framework that provides a robust set of features for

building web and mobile applications. As a lightweight framework, Express is

designed to simplify the development process of server-side applications by

offering a thin layer of fundamental web application features without obscuring

the core Node.js functionalities. Its minimalistic nature makes it an ideal

choice for developers seeking to build APIs and web applications quickly and

efficiently <sup>[2]</sup>.

**3.3.4. Mongo Database**

MongoDB is a leading NoSQL database, renowned for its flexibility and

scalability, making it a popular choice for modern application development.

Unlike traditional relational databases, MongoDB utilizes a document-oriented

data model, which allows for the storage of data in flexible, JSON-like

documents. This model supports dynamic schemas, enabling developers to

store and manage data without needing to define the structure in advance <sup>[3]</sup>.

16



<a name="br18"></a> 

**3.3.5. Tailwind CSS**

Tailwind CSS is a highly versatile utility-first CSS framework that has

revolutionized the way developers approach styling web applications. Unlike

traditional CSS frameworks that come with pre-designed components and rely

on extensive class definitions, Tailwind CSS focuses on providing low-level

utility classes. These classes can be combined to construct custom designs

directly in the markup. One of the standout features of Tailwind CSS is its

utility-first philosophy, which emphasizes the use of small, reusable classes

that can be composed to create complex designs<sup>[4]</sup>.

**3.3.6. React MUI**

React MUI (Material-UI) is a popular React component library that provides a

comprehensive set of pre-designed, customizable components following

Google's Material Design guidelines. It is widely used in the React ecosystem

due to its ease of use, aesthetic consistency, and extensive functionality. The

library simplifies the process of building visually appealing and responsive

user interfaces, making it a go-to choice for both individual developers and

large development teams.

**3.4. Libraries Used**

**3.4.1. NPM Libraries**

NPM (Node Package Manager) is a package manager for JavaScript and the

default package manager for Node.js. It helps developers manage and share

reusable code. Here are some key aspects of npm:

● **mongoose:** An Object Data Modeling (ODM) library for MongoDB and

Node.js, which provides a straightforward schema-based solution to model

application data.

● **express:** A minimal and flexible Node.js web application framework that

provides a robust set of features for web and mobile applications<sup>[2]</sup>.

● **body-parser:** Middleware to parse incoming request bodies in a middleware

before your handlers, available under the req.body property.

● **cors:** Middleware to enable Cross-Origin Resource Sharing (CORS) with

various options.

● **cookie-parser:** Middleware to parse cookies attached to the client request

object.

● **dotenv:** Loads environment variables from a .env file into process.env

17



<a name="br19"></a> 

● **nodemon:** Utility that monitors for any changes in your source and

automatically restarts your server.

● **react:** Library for building user interfaces<sup>[1]</sup>.

● **react-dom:** Provides DOM-specific methods that can be used at the top level

of your app to manage the root node.

● **react-router-dom:** Declarative routing for React web applications<sup>[1]</sup>.

● **redux:** Predictable state container for JavaScript apps.

● **react-redux:** Official React bindings for Redux.

● **@mui/material:** Material-UI components for faster and easier web

development.

● **tailwindcss:** A utility-first CSS framework for rapid UI development.

● **axios**: Promise-based HTTP client for the browser and Node.js.

**4. Methodology**

The main steps involved in creating the system are as follows:

**4.1. Authentication**

Authentication is a critical component of ensuring secure access to the application. In

our project, the authentication process is implemented using JWT (JSON Web

Tokens) and bcrypt for password hashing. The process begins when a user attempts

to log in by providing their email and password. The application checks if the user

exists in the database and then compares the provided password with the hashed

password stored in the database using bcrypt.

If the credentials are correct, the system generates a JWT token that includes the

user's email, ID, and account type. This token is then sent to the client and stored in

an HTTP-only cookie to prevent client-side access. The token has a validity period of

24 hours, after which it will expire and require re-authentication. This approach

ensures that user authentication is secure and that sensitive information is protected.

18



<a name="br20"></a> 

**4.2. Authorization**

Authorization controls what authenticated users are permitted to do within the

application. This is managed through role-based access control (RBAC), where

users are assigned specific roles (Admin, Department, Employee), each with

different permissions. The role-based access control is enforced using middleware

functions that check the user's role before allowing access to certain routes or

resources.

The middleware functions isAdmin, isDepartment, and isEmployee verify the user's

role based on the account type extracted from the JWT token. If a user tries to

access a route that is not allowed for their role, the middleware responds with an

appropriate HTTP status code and message, ensuring that only authorized users can

perform specific actions.

Additionally, the isDepartmentOrAdmin middleware allows access to routes

designated for both Departments and Admins, providing flexible access control

based on user roles. This role-based authorization mechanism ensures that each

user type has access only to the resources and actions pertinent to their role,

thereby enforcing a secure and organized access control system.

**4.3. Data Encryption**

Data encryption is a crucial aspect of securing sensitive information in any

application. In our project, encryption is employed both for user authentication and

for protecting sensitive data during transmission.

For user authentication, passwords are encrypted using bcrypt, a popular library for

hashing passwords. The bcrypt library applies a one-way hashing algorithm to

passwords, which converts the plain text password into a hashed format that cannot

be easily reversed. Here’s how it works:

● **Hashing Passwords:** When a user creates an account or updates their

password, the plaintext password is hashed using bcrypt. This hashed

password is then stored in the database instead of the plaintext password.

bcrypt applies a salt to the password before hashing it, adding an extra layer

of security against rainbow table attacks.

● **Password Verification:** During login, the plaintext password provided by

the user is hashed using the same bcrypt algorithm, and the resulting hash is

compared with the hashed password stored in the database. If they match,

the authentication is successful.

19



<a name="br21"></a> 

**4.4. Token Generation and Authentication**

**Token Generation**

1\. **User Login:** When a user logs in, they provide their email and password.

2\. **Password Verification:** The provided password is hashed using bcrypt and

compared to the hashed password stored in the database.

3\. **Token Creation:** If the password is correct, a JSON Web Token (JWT) is

generated using jsonwebtoken. The token includes encoded user information

(email, user ID, account type) and is signed with a secret key to ensure its

integrity.

4\. **Token Storage:** The generated token is sent to the client and stored in an

HTTP-only cookie to enhance security by preventing client-side scripts from

accessing it.

**Authentication**

1\. **Token Extraction:** For subsequent requests, the JWT is extracted from the

HTTP-only cookie or authorization headers.

2\. **Token Verification:** The token is verified using the jsonwebtoken library and

the secret key. This process ensures that the token is valid and has not been

tampered with.

3\. **User Validation:** If the token is valid, user information encoded in the token is

retrieved and used to authenticate the user, granting access to protected

routes or resources based on their role.

This process ensures that only authenticated users with a valid token can access

specific parts of the application, enhancing security and access control.

20



<a name="br22"></a> 

**5. Implementation**

**5.1. Entity Relationship Diagram**

An Entity-Relationship (ER) diagram is a visual representation of the entities within a system

and the relationships between those entities. It is a fundamental tool used in database

design and data modelling to illustrate the structure of a database in a clear and organized

manner.

**Fig - 5.1(a) Entity Relationship Diagram**

21



<a name="br23"></a> 

**5.2. Data Flow Diagram**

A Data Flow Diagram (DFD) is a visual representation that depicts how data flows through a

system or process. It's widely used in software engineering and systems analysis to model

the flow of data within an information system.

**5.2.1. Level 0**

**Fig - 5.2(b) DFD LEVEL 0**

**External Entities**

● Admin

● Department

● Employee

**Processes**

● Network Management System

**Data Flows**

● The employee raises a complaint to their respective department.

● The Network Management forwards the complaint to the department

● The Department listens to the complaint and resolves it.

● The Network Management System transfers the complaint update to the

employee.

The Level 0 DFD of the Network Management System, illustrates the interaction between

external entities and the Network Management System , highlighting the flow of data and

tasks throughout the system. Each 23 external entities interact with the WMS through

specific data flows, facilitating efficient communication and task management

22



<a name="br24"></a> 

**5.2.2. Level 1**

**Fig - 5.2(c) DFD LEVEL 1**

**External Entities**

●

●

●

Admin

Department

Employee

**Processes**

●

●

Network Management System

Manages User / Complaints

**Data Flows:**

**● From Department to Employee**

○

○

Employee Raises complaints to Departments

Department listens to the employee and responds to the complaint status.

**● From Admin to Department**

○

Admin receives the complaints from the department which were unable to be resolved

by the Department.

○

Admin submits the status directly to the employee after the resolution of complaints.

23



<a name="br25"></a> 

**5.2.3. Level 2**

**Fig - 5.2(d) DFD LEVEL 2**

**External Entities**

●

●

●

Admin

Department

Employee

24



<a name="br26"></a> 

**Processes**

●

●

●

●

Network Management System

New Request Handler

Complaint Handler

Network Handler

**Data Flows:**

**● From Employee to Department**

○

Employee raises a complaint to the Department.

**● From Department to Employee**

○

○

○

Department listens to the complaint and responds to the employee.

If a complaint is not resolved by the department then it is transferred to the admin.

Department can manage employee details.

**● From Department to Admin**

○

The Department can send complaints received from the employee for resolving the

problem at a higher level.

○

Newly created department approval requests are sent to the admin.

**● From Admin to Department**

○

Admin receives the complaints from the department which were unable to be resolved

by the Department.

○

○

Admin submits the status directly to the employee after resolving the complaints.

Admin can manage Employee and Department details.

25



<a name="br27"></a> 

**6. Results**

**6.1. Home Page**

When the user visits our web application, the first page they encounter is the homepage.

This page serves as an introduction and overview of the website's purpose and

functionality.

**Fig - 6(a) Home Page**

26



<a name="br28"></a> 

**6.2. Department Signup Page**

The Department Signup page allows departments to register themselves on the platform.

Once registered, the department's account will be pending approval from an admin. After

approval, the department can start using the system to manage their work.

**Fig 6(b) Department Signup Page**

**6.3. Login Page**

The login page is a crucial component of our web application, serving as the primary

gateway for users to access the system. It ensures that only authorized users can access

the application, maintaining the security and integrity of user data and resources.

**Fig 6(c) Login Page**

27



<a name="br29"></a> 

**6.4. Forgot Password Page**

Our web application features a robust forgotten password mechanism, allowing users to

recover their passwords through their registered email. This mechanism enhances the

security and user-friendliness of our authentication system.

**Fig 6(d) Forgot Password Page**

**6.5. OTP Verification Page**

After the user correctly enters their credentials, they will be directed to the OTP page. The

OTP (One-Time Password) verification page is a critical component of our web application,

designed to enhance security during user authentication and password recovery processes.

This page ensures that only authorized users can access the application or reset their

passwords by requiring them to enter a unique OTP sent to their registered email.

**Fig 6(e) OTP Confirmation Page**

28



<a name="br30"></a> 

**6.6. Reset Password View**

Users will see this page when they log into their account for the first time, as the password

is generated by the Nodals. From this page, they can change their password.

**Fig 6(f) Password Reset Page**

**6.7. Admin Dashboard**

**Fig 6(g) Admin Dashboard**

29



<a name="br31"></a> 

**6.7.1. Resolve Complaints**

**Fig 6(h) Admin - Resolve Complaints page**

**6.8. Department Dashboard**

**Fig 6(i) Department Dashboard**

30



<a name="br32"></a> 

**6.8.1. Add new employee**

**Fig 6(j) Department - Add New Employee Page**

**6.8.2. View employee details**

**Fig 6(k) Department - Manage Employee Details Page**

31



<a name="br33"></a> 

**6.8.3. Manage employee complaints**

**Fig 6(l) Manage Employee Complaints Page**

**6.9. Employee Dashboard**

**Fig 6(m) Employee Dashboard**

**6.9.1. Raise complaints**

32



<a name="br34"></a> 

**Fig 6(n) Employee - Raise Complaints**

**6.9.2. Manage complaints**

**Fig 6(o) Employee - Manage Complaints**

**7. Conclusion and Future Work**

**7.1. Conclusion**

The Network Management System represents a significant leap forward in

addressing the inefficiencies and challenges associated with traditional methods of

handling network-related issues in organizations. By leveraging the power of the

MERN Stack and modern CSS frameworks like Tailwind CSS<sup>[4]</sup> and React Material

UI, this system offers real-time complaint handling, structured workflows, and an

intuitive user interface. These innovations collectively enhance the efficiency of

technical support, minimize downtime for employees, and ensure a seamless

resolution of network-related complaints. The successful implementation of this

project demonstrates its potential to improve organizational productivity and

streamline the management of technical issues.

**7.2. Future Work**

33



<a name="br35"></a> 

While the Network Management System already provides substantial benefits, there

are several avenues for future enhancement and expansion:

1\. **Mobile Application Development:** Developing a mobile application for the

Network Management System can increase accessibility and convenience for

employees and IT staff. A mobile app would allow users to report and manage

complaints on the go, further streamlining the resolution process.

2\. **Enhanced Security Features:** As cybersecurity threats continue to evolve,

incorporating advanced security measures such as multi-factor authentication,

encryption, and intrusion detection can ensure the system remains secure and

reliable.

3\. **AI-Powered Issue Resolution:** Integrating artificial intelligence and machine

learning algorithms can enhance the system’s capability to predict and

automatically resolve common technical issues. AI can assist in diagnosing

problems, recommending solutions, and even automating routine

maintenance tasks.

4\. **Integration with Other IT Systems:** Expanding the system’s integration

capabilities with other IT management tools and software can create a more

cohesive IT ecosystem and other enterprise solutions to provide a

comprehensive approach to IT management.

In conclusion, the Network Management System is a robust solution that significantly

improves the management and resolution of network-related complaints. By continually

evolving and incorporating new technologies and features, this system can adapt to future

challenges and continue to provide exceptional support for organizational network

management.

**8. Bibliography**

[ 1 ] React Documentation -

<https://legacy.reactjs.org/docs/getting-started.html>

[ 2 ] Express Documentation -

<https://expressjs.com/>

[ 3 ] Mongo Database Documentation -

<https://www.mongodb.com/docs/>

[ 4 ] Tailwind CSS framework Documentation -

<https://tailwindcss.com/docs/installation>

34

