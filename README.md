# The Thirsty Student Shop - Complete Web Application

This is a **complete and comprehensive** Express.js web application featuring a full-stack drinks shop platform with dynamic templating, form handling, and modern responsive design. The project demonstrates professional web development practices with a complete implementation of all core features including product management, user registration, search functionality, and customer surveys.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Routes](#available-routes)
- [Key Functionalities](#key-functionalities)
- [Form Handling](#form-handling)
- [Design & Styling](#design--styling)
- [Future Enhancements](#future-enhancements)

## 🎯 Overview

**The Thirsty Student Shop** is a fully-featured web application built with Node.js and Express.js that manages a multi-location drinks retail business. The application uses EJS (Embedded JavaScript) templating to dynamically render content and implements both GET and POST HTTP methods for comprehensive form handling.

This project showcases:
- Dynamic content rendering with EJS templates
- RESTful routing architecture
- Form data collection via GET and POST requests
- Multi-location business management
- Customer survey functionality
- Modern, responsive UI design
- Static file serving for CSS and assets

## ✨ Features

### Core Features
- **Dynamic Product Display**: Products are driven by data rather than hard-coded, allowing easy updates
- **Multi-Location Management**: Display of 4 shop locations with manager information
- **User Registration System**: Collect user details with email validation
- **Search Functionality**: Search products by keyword and category
- **Customer Survey System**: Comprehensive survey with multiple input types
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Modern UI**: Clean, professional design with cyan/blue gradient theme

### Technical Features
- Modular routing with Express Router
- Dynamic data binding with EJS
- Form validation (HTML5 + server-side)
- Static file serving
- Body parser middleware for form handling
- RESTful API design patterns

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **EJS (Embedded JavaScript)** - Templating engine
- **HTML5** - Markup language with semantic elements
- **CSS3** - Modern styling with gradients, flexbox, and animations
- **JavaScript (ES6+)** - Client and server-side scripting

## 📁 Project Structure

```
05_thirsty_33797028/
│
├── index.js                 # Main application entry point
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Dependency lock file
├── README.md               # This file
│
├── routes/
│   └── main.js             # Route handlers for all endpoints
│
├── views/                  # EJS templates
│   ├── index.ejs           # Home page with product list
│   ├── about.ejs           # About page with shop locations
│   ├── search.ejs          # Search form page
│   ├── register.ejs        # User registration form
│   └── survey.ejs          # Customer survey form
│
└── public/                 # Static assets
    └── styles.css          # Global stylesheet with modern design
```

## 🚀 Installation

### Prerequisites
- Node.js (v12.0 or higher)
- npm (Node Package Manager)

### Setup Steps

1. **Navigate to the project directory**:
   ```bash
   cd 05_thirsty_33797028
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install:
   - Express.js
   - EJS

## ▶️ Running the Application

Start the development server:

```bash
node index.js
```

The application will start on **http://localhost:8000**

You should see the message:
```
Example app listening on port 8000!
```

## 🌐 Available Routes

### Public Pages

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Home page displaying shop name and product categories |
| `/about` | GET | About page with business information and shop locations |
| `/search` | GET | Search form for products |
| `/search_result` | GET | Display search results with keyword and category |
| `/register` | GET | User registration form |
| `/registered` | POST | Process registration and display confirmation |
| `/survey` | GET | Customer survey form |
| `/survey_results` | POST | Process and display survey responses |

## 🎨 Key Functionalities

### 1. Dynamic Product Management

Products are stored in a central data object and dynamically rendered:

```javascript
productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"]
```

- Easy to add/remove products
- Automatically updates across all pages
- Used in dropdowns, lists, and radio buttons

### 2. Shop Location Management

The application manages multiple shop locations:

```javascript
shopLocations: [
    { manager: "Sarah Johnson", address: "123 High Street, Manchester, M1 1AA" },
    { manager: "David Chen", address: "45 Queen's Road, London, SW1A 1AA" },
    // ... more locations
]
```

- Display all locations on About page
- Manager name and full address for each location
- Easy to scale to more locations

### 3. Search Functionality

**Features**:
- Keyword-based search
- Category filtering
- Uses GET method (query parameters visible in URL)
- Real-time search result display

**Example**: `/search_result?search_text=Lemonade&category=Soft%20Drinks`

### 4. User Registration

**Collected Information**:
- First Name
- Last Name
- Email (with HTML5 validation)

**Features**:
- Uses POST method for security
- Email validation
- Personalized confirmation message
- Required field validation

### 5. Customer Survey System

**Survey Fields**:
- Customer name (first & surname)
- Email address
- Age (text input)
- Drink category preference (radio buttons)
- Student status (checkbox)

**Features**:
- Dynamic radio buttons from product categories
- Checkbox for boolean data
- Comprehensive results page
- No registration required
- Clean, organized display of responses

## 📝 Form Handling

### GET Method Forms (Search)
- Data sent via URL query parameters
- Visible in browser address bar
- Suitable for searches and filters
- Accessed via `req.query`

### POST Method Forms (Registration, Survey)
- Data sent in HTTP request body
- Not visible in URL
- More secure for sensitive information
- Accessed via `req.body`
- Requires `express.urlencoded()` middleware

## 🎨 Design & Styling

### Color Scheme
- **Primary Gradient**: Cyan (#06b6d4) to Blue (#3b82f6)
- **Accent Colors**: Teal (#0891b2) and Blue (#2563eb)
- **Background**: Full-page gradient with centered content
- **Content Cards**: Clean white containers with shadows

### Design Features
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Centered Content**: Vertically and horizontally centered containers
- **Modern Forms**: Styled inputs with focus effects
- **Interactive Elements**: Hover animations on buttons and list items
- **Typography**: Professional font stack with proper hierarchy
- **Accessibility**: Proper labels and semantic HTML

### CSS Highlights
- Flexbox for layout
- CSS transitions and transforms
- Gradient backgrounds
- Box shadows for depth
- Border radius for modern look
- Mobile-responsive breakpoints

## 📦 Data Structure

The application uses a centralized data object:

```javascript
shopData = {
    shopName: "Juicy drinks",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shopLocations: [
        { manager: "Sarah Johnson", address: "123 High Street, Manchester, M1 1AA" },
        { manager: "David Chen", address: "45 Queen's Road, London, SW1A 1AA" },
        { manager: "Emma Williams", address: "78 Park Lane, Birmingham, B1 1BB" },
        { manager: "Michael Brown", address: "22 Castle Street, Edinburgh, EH1 2NG" }
    ]
}
```

This centralized approach makes the application:
- Easy to maintain
- Simple to update content
- Consistent across all pages
- Scalable for future features

## 🔧 Configuration

### Port Configuration
Default port: **8000**

To change the port, modify `index.js`:
```javascript
const port = 8000; // Change this value
```

### Shop Data
To update shop information, edit `routes/main.js`:
- Change shop name
- Add/remove product categories
- Update shop locations

## 🚀 Future Enhancements

Potential features for future development:
- Database integration (MySQL/MongoDB)
- User authentication and sessions
- Shopping cart functionality
- Product images and detailed descriptions
- Admin panel for content management
- Order processing system
- Payment gateway integration
- Email notifications
- Customer reviews and ratings
- Inventory management
- Analytics dashboard

## 📚 Learning Outcomes

This project demonstrates proficiency in:
- Node.js and Express.js framework
- Server-side templating with EJS
- RESTful API design
- HTTP methods (GET/POST)
- Form handling and validation
- Middleware implementation
- Modular code organization
- Static file serving
- Responsive web design
- Modern CSS techniques
- Data-driven applications

## 🐛 Troubleshooting

### Common Issues

**Port already in use**:
```bash
Error: listen EADDRINUSE: address already in use :::8000
```
Solution: Change the port number in `index.js` or kill the process using port 8000.

**Module not found**:
```bash
Error: Cannot find module 'express'
```
Solution: Run `npm install` to install dependencies.

**EJS template errors**:
- Check that all variables passed to templates are defined in `shopData`
- Verify template syntax (especially closing tags)

## 📄 License

This project is for educational purposes.

## 👤 Author

Created as part of a comprehensive web development lab assignment.

## 🙏 Acknowledgments

- Express.js community for excellent documentation
- EJS for simple and powerful templating
- Node.js for enabling server-side JavaScript

---

**Project Status**: ✅ Complete and fully functional

**Last Updated**: November 2025

**Version**: 1.0.0
