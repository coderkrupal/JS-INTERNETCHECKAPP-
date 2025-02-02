# Internet Status Checker

A simple and responsive web application to check your internet connection status in real-time. Built using **HTML**, **CSS**, and **JavaScript**.

## Features

- Real-time detection of internet connectivity status.
- Visual indicator for online and offline modes:
  - **Online**: Green indicator with a "You are Online" message.
  - **Offline**: Red indicator with a "You are Offline" message.
- Lightweight and user-friendly interface.



## Technologies Used

- **HTML**: Provides the structure of the app.
- **CSS**: Adds styling and design.
- **JavaScript**: Implements real-time connectivity status detection using the `navigator.onLine` property.

## How It Works

1. The app uses the `navigator.onLine` property in JavaScript to check if the device is connected to the internet.
2. If the device is **online**, the app displays:
   - A green indicator.
   - A "You are Online" message.
3. If the device is **offline**, the app displays:
   - A red indicator.
   - A "You are Offline" message.
4. The app updates automatically when the internet connection status changes.

## Installation

Follow these steps to set up the app locally:

1. **Clone the Repository**  
   Open your terminal and run:
   ```bash
  https://github.com/coderkrupal/JS-INTERNETCHECKAPP-
2. **Navigate to the Project Folder
   cd internet-status-checker
   
3.Run the App
Open the index.html file in your browser.

Usage
Open the app in your web browser.
Turn your internet connection on or off to see the connectivity status update in real-time.

internet-status-checker/
├── index.html   # Main HTML file
├── style.css    # Stylesheet for the app
├── script.js    # JavaScript file for functionality
└── README.md    # Project documentation


Contributing
Contributions are always welcome!

If you'd like to contribute:

1.Fork the repository.

2.Create a feature branch:
git checkout -b feature-name

3.Commit your changes:
git commit -m "Add a feature"

4.Push to the branch:
git push origin feature-name

5.Open a Pull Request.


License
This project is licensed under the MIT License.



