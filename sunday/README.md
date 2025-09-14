# Interactive Quiz App

A modern, responsive quiz application built with HTML, CSS, and JavaScript. Test your knowledge across 10 different programming languages with this interactive, 3D-styled quiz platform.

![Quiz App Screenshot](https://img.shields.io/badge/Status-Active-brightgreen) ![Tech Stack](https://img.shields.io/badge/Tech-HTML%2FCSS%2FJS-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## Features

### 🎯 Core Functionality
- **10 Programming Language Categories**: JavaScript, Python, Java, C++, C#, Ruby, Go, Rust, Swift, and PHP
- **Interactive Questions**: Multiple choice questions with immediate feedback
- **Timer Functionality**: Track your quiz completion time
- **Progress Indicators**: Visual progress bars and question counters
- **Score Calculation**: Automatic scoring with percentage and grade display

### 🎨 User Experience
- **3D Futuristic Design**: Modern, visually appealing interface with 3D effects
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS transitions and animations for better user experience
- **Keyboard Navigation**: Support for arrow keys and number keys for navigation
- **Category Selection**: Intuitive category selection screen with hover effects

### 📊 Results & History
- **Detailed Results**: Comprehensive results screen showing score, time, and performance
- **Review Wrong Answers**: Click on wrong answers to review them with explanations
- **Quiz History**: Local storage integration to save and view past quiz attempts
- **Performance Tracking**: Track your progress over time across different categories

### 🔧 Technical Features
- **Local Storage**: Persistent storage for quiz history and preferences
- **No External Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required
- **Cross-browser Compatible**: Works on all modern browsers
- **Clean Code Structure**: Well-organized and maintainable codebase

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/interactive-quiz-app.git
   cd interactive-quiz-app
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - OR use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     
     # Then visit http://localhost:8000
     ```

## Usage

### 1. Start the Quiz
- Open the application in your browser
- Click the "Start Quiz" button on the welcome screen

### 2. Select a Category
- Choose from 10 programming language categories
- Each category contains 10 unique questions
- Hover over categories to see visual effects

### 3. Take the Quiz
- Read each question carefully
- Select your answer by clicking on the option buttons
- Use keyboard shortcuts:
  - **Arrow Keys**: Navigate between questions
  - **Number Keys (1-4)**: Select answers quickly
- Track your progress with the progress bar and question counter

### 4. View Results
- See your final score and grade
- Review time taken to complete the quiz
- Click on wrong answers to review them with explanations

### 5. Review History
- Access your quiz history from the main menu
- View past attempts across all categories
- Clear history if needed

## Project Structure

```
sunday/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript logic and functionality
├── README.md           # Project documentation
└── .git/              # Git version control
```

## Customization

### Adding New Questions
To add questions to existing categories or create new ones:

1. Open `script.js`
2. Locate the `quizCategories` object
3. Add questions in the following format:
   ```javascript
   categoryName: [
       {
           question: "Your question here?",
           options: ["Option 1", "Option 2", "Option 3", "Option 4"],
           correct: 0, // Index of correct answer (0-based)
           explanation: "Explanation of the correct answer"
       }
   ]
   ```

### Styling Customization
- Modify `styles.css` to change colors, fonts, and layout
- The CSS is well-organized with clear sections for different components
- 3D effects can be adjusted in the `.container` and various screen classes

### Adding New Categories
1. Add the category to the `quizCategories` object in `script.js`
2. Update the category selection in `index.html` if needed
3. Add corresponding styles in `styles.css`

## Browser Compatibility

| Browser       | Version | Status |
|---------------|---------|--------|
| Chrome        | 60+     | ✅ Full Support |
| Firefox       | 55+     | ✅ Full Support |
| Safari        | 12+     | ✅ Full Support |
| Edge          | 79+     | ✅ Full Support |
| Internet Explorer | 11 | ❌ Not Supported |

## Performance

- **Fast Loading**: No external dependencies ensure quick load times
- **Responsive Design**: Optimized for various screen sizes
- **Local Storage**: Efficient data storage for quiz history
- **Minimal Resources**: Low memory and CPU usage

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow the existing code structure and naming conventions
2. Add comments for complex logic
3. Test across different browsers and devices
4. Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by modern web development practices
- Built with vanilla JavaScript to showcase core web technologies
- Designed with user experience and accessibility in mind

## Support

If you encounter any issues or have questions:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include browser and device information for bug reports

---

**Built with ❤️ using HTML, CSS, and JavaScript**
