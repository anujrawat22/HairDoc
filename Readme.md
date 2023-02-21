<h1>It is a collaborative projects build by a team of three members</h1>
<h3>Name of the project is HairDoc using this user can book salon appointment.</h3>


<h3>Contributors</h3>
<ul>
<li>Anuj Rawat</li>
<li>Ekta</li>
<li>Ankesh Kewat</li>
</ul>


<!-- working flow of the -->

<h1>Working flow of the website</h1>

<ol>

   <li>
   <h3>User Interface:</h3>
   The frontend of the web application allow customers to view available services and schedule appointments with hair stylists based on their availability. The frontend will also allow user, to book hair treatment. User can read hairtreatment blogs as well if user want.
   For using our services customers has to login first.
   </li>

   
   <li>
   <h3>Load Balancer:</h3>
 The load balancer distribute incoming traffic evenly across multiple servers, ensuring the high availability of the application. In this project we used AWS load balancer.
   </li>

   <li>
   <h3>Database:</h3>
 The database store all customer data, including personal information, all services including availability of that service and appointment history.The application used MongoDB database for storing all the data. For caching purpose we use Redish database.
   </li>

   <li>
   <h3>Amazon SES:</h3>
The application use Amazon SES to send appointment confirmations and reminders to customers via email or SMS. The email or SMS content will be created by the backend servers whenever customers book any service.

   </li>
   <li>
   <h3>Admin side:</h3>
   When a customer book any service the data will go to admin page. Admin can see all details about the customers.
   An admin can manage availability of any service.
   </li>

</ol>

<h1>Functional requirements</h1>
<ol>
  <li>
  <h3>User Registration:</h3>
 The system should allow customers to create a new account and store their personal information such as name, email, and phone number.
  </li>

<li>
  <h3>Scheduling: </h3>
The system should allow customers to schedule an appointment with a hair stylist based on the stylist's availability and the customer's preferred date and time.

</li>

<li>
  <h3>Stylist Availability:  </h3>
The system should allow hair stylists to set their availability based on their working hours.

</li>

<li>
  <h3>Appointment Management: </h3>
The system should allow customers to view their upcoming appointments and cancel or reschedule an existing appointment.
</li>

<li>
  <h3> Confirmation and Reminders: </h3>
The system should send appointment confirmation and reminder messages to customers via email or SMS.
</li>

<li>
  <h3>Service Selection: </h3>
The system should allow customers to select a hair styling service from a list of available services.
</li>
<li>
  <h3>Payment: </h3>
The system should allow customers to make payment for their appointment online or in-person at the salon.
</li>
<li>
  <h3> Admin Panel:</h3>
The system should have an admin panel that allows the salon staff to manage the scheduling, view customer information, and manage stylist availability.
</li>
<li>
  <h3>Feedback: </h3>
The system should allow customers to leave feedback about their appointment experience and rate the hair stylist's service. 
</li>
</ol>

<h1>Non-functional requirements</h1>

<ol>
<li>
  <h3>Usability: </h3>
  The system should be easy to use, with a clear and simple user interface that is accessible on different devices such as desktops, laptops, and mobile phones.
</li>
<li>
  <h3>Performance:</h3>
The system should be responsive and fast, with quick loading times and minimal downtime.
</li>
<li>
  <h3>Scalability: </h3>
The system should be designed to handle a large number of users and appointments, and be able to scale as the user base grows.

</li>
<li>
  <h3>Security:</h3>
The system should be secure, with proper authentication and authorization mechanisms to protect customer information and prevent unauthorized access. Customers personal details like password should be hashed before storing into the database. For storing token cookies can be secure option.
</li>
<li>
  <h3>Availability:</h3>
The system should be highly available and reliable, with a backup and disaster recovery plan in place to ensure business continuity.
</li>
<li>
  <h3>Compatibility: </h3>
The system should be compatible with different browsers and operating systems, ensuring a consistent user experience across different devices.


</li>
<li>
  <h3>Localization:</h3>
The system should support multiple languages and regions, it will allow our system to connect better to our customers.
</li>
<li>
  <h3>Maintainability:</h3>
The system should be easy to maintain and update, with proper documentation .
</li>

</ol>