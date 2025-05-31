# 💬 AngularJS Chat Interface 

![AngularJS Chat Interface Screenshot](./screenshot.png)

✨ A modern, responsive chat application built with AngularJS featuring light/dark theme toggle, real-time messaging simulation, and interactive UI components.

## 🚀 Features

- **🌓 Light/Dark Theme Toggle** - User-selectable interface themes with localStorage persistence
- **⚡ Real-Time Messaging** - Simulated chat with typing indicators and message timestamps
- **📱 Responsive Design** - Mobile-friendly layout with adaptive components
- **🎨 Interactive UI** 
  - 💚 Online status indicators
  - ✍️ Animated typing bubbles
  - 💬 Message bubbles with timestamps
  - 🍔 Hamburger menu for mobile

## 🛠 Technology Stack

- **🧩 Framework**: AngularJS (1.x)
- **🎨 Styling**: Pure CSS with Flexbox/Grid
- **🖼 Icons**: Font Awesome
- **🔨 Build**: Vanilla JS (no additional build tools required)

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sunilkumar-Bhoi/Chat-interface-angularjs.git
   ```

2. Navigate to project directory:
   ```bash
   cd Chat-interface-angularjs
   ```

3. Open `index.html` in your browser:
   ```bash
   open index.html  # On Mac
   start index.html # On Windows
   ```

## 📂 Project Structure

```
/
├── 📄 index.html            # Main application entry point
├── 📁 app/
│   ├── 📄 app.js            # AngularJS application module
│   ├── 📁 controllers/      # AngularJS controllers
│   ├── 📁 directives/       # Custom AngularJS directives
│   ├── 📁 services/         # AngularJS services
│   └── 📁 styles/           # CSS stylesheets 
|
📄 README.md             # This documentation file
```

## 🎨 Customization

### Changing Themes
Modify the CSS variables in `app/styles/main.css`:
```css
:root {
  --primary-color: #4361ee;      /* 🔵 Primary brand color */
  --bg-color: #ffffff;          /* ⚪ Light theme background */
  --text-color: #212529;        /* ⚫ Text color */
}

[data-theme="dark"] {
  --bg-color: #121212;          /* ⚫ Dark theme background */
  --text-color: #f8f9fa;        /* ⚪ Text color */
}
```

### Adding Features
1. Create new directives in `app/directives/` 📂
2. Register them in `app/app.js` 📝
3. Add corresponding styles in `app/styles/main.css` 🎨

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Edge (latest)
- ✅ Safari (latest)

❌ *Internet Explorer is not supported*

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎮 Live Demo

Try the live demo: [https://sunilkumar-bhoi.github.io/Chat-interface-angularjs](https://sunilkumar-bhoi.github.io/Chat-interface-angularjs) 🔗

## 🤝 Contributing

1. 🍴 Fork the project
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 🚀 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔄 Open a Pull Request

---

**👨‍💻 Created by Sunil Kumar Bhoi**  
[🔗 GitHub Profile](https://github.com/Sunilkumar-Bhoi)  
💌 sunilbhoi.dev@gmail.com