# Health Tracker Web App

This project is a comprehensive health application that currently has BMI calculator functionality. The app will be designed to go beyond BMI calculation, expanding its features to include personal bio information, blood pressure tracking, and readings for blood oxygen levels and heart rate. Built using Node.js, Express, MongoDB, and Docker, this app will provide a holistic solution for users to monitor various health metrics in one centralized platform.  

## Features

1. **BMI Calculation**: Users can input their name, height in feet and inches, and weight in pounds to calculate their BMI.

2. **BMI Classification**: The calculated BMI is then classified into categories such as Underweight, Normal weight, Overweight, or Obese.

3. **MongoDB Integration**: BMI data, including name, height, weight, BMI, and classification, is stored in a MongoDB database.

4. **History Page**: Users can view a history page that displays all the BMI entries stored in the database.

5. **Dockerized Environment**: The project includes Docker configuration for easy deployment in a containerized environment.

## Upcoming Features

1. **Personl Biodata page.**
2. **Blood Pressure monitoring.**
3. **Oxygen Saturation (SpO<sub>2</sub>) monitoring.**
4. **Heart rate monitoring.**  

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed
- [Docker](https://www.docker.com/) installed (optional, for containerized deployment)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/health-app.git
   cd cd health-app
   ```

2. Install the dependencies

   ```bash
   npm install
   ```
3. Set up MongoDB:

    - Ensure MongoDB is running.
         - You can directly install the DB or run a container using a MongoDB image pulled from Docker hub.
         - If you use a container, you can optionaly use Mongo Express for testing or viewing DB entries.  
    - Update the MongoDB connection URI in app.js and docker-compose.yml if necessary.

4. Run the application:
   
   ```bash
   npm start
   ```
   OR

   ```bash
   node app.js
   ```

## Docker Deployment

1. Build the Docker image:
   
    ```bash
   docker-compose build
   ```

2. Run the Docker containers:

    ```bash
   docker-compose up
   ```

3. The app will be accessible at ```http://localhost:3000```

## Usage

  - Access the current BMI calculator function at ```http://localhost:3000``` in your browser.
  - Input your details and calculate BMI.
  - View BMI history at ```http://localhost:3000/history```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

    
