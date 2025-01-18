# Equity Track : Stock Portfolio Application

**Equity Track** is a powerful web application designed to help users manage and monitor their investment portfolios with ease. Featuring real-time equity tracking and performance insights, the app ensures users stay informed and in control of their investments.

---

## Project Overview

**Equity Track** empowers users to:
- Maintain a personalized portfolio.
- Track stock values in real-time.
- Gain insights into portfolio performance, including gains and losses.
- Stay updated with live stock price changes.

---

## Key Features

### 🔒 **User Authentication**
Secure access with JWT-based authentication, ensuring personalized portfolio management.

### 💼 **Portfolio Management**
- Add or remove stocks.
- Specify the quantity owned.
- Record and track purchase prices.

### 📊 **Real-Time Stock Price Updates**
Stay informed with live stock prices fetched via the **Alpha Vantage API**.

### 🧮 **Portfolio Value Calculation**
Automatically compute the total value of the portfolio, including gains and losses.

### 📈 **Performance Tracking**
Visualize portfolio performance over time with detailed profit/loss breakdowns and percentage changes.

### 📅 **Transaction History** *(Coming Soon)*
Track stock purchases, sales, and adjustments with a comprehensive timeline view of transactions and their impacts.

---

## Technologies Used

### **Frontend**
- **React.js**: Dynamic and responsive user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for elegant and efficient styling.

### **Backend**
- **Node.js**: Robust JavaScript runtime for backend development.
- **Express.js**: Lightweight and flexible web framework for building APIs.
- **JWT**: Secure authentication and session management.

### **Database**
- **MongoDB**: Reliable NoSQL database for user and portfolio data.
- **Mongoose**: Simplified data modeling and interaction with MongoDB.

### **Stock Price API**
- **Alpha Vantage API**: Real-time stock price updates and data.

---

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
$ git clone https://github.com/RevanasiddaNK/EquityTrack.git
```

### 2. Navigate to the Project Directory
```bash
$ cd EquityTrack
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```plaintext
NODE_ENV=production
PORT=5000
SECRET_KEY=your_secret_key_here
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key_here
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.x5e13.mongodb.net/?retryWrites=true&w=majority
```

### 4. Install Dependencies
```bash
$ npm install
```

### 5. Build the Application
```bash
$ npm run build
```

### 6. Start the Application
```bash
$ npm start
```

---

## Live Demo

Explore the live version of the Stock Portfolio Application:

[**Equity Track Live Demo**](https://equitytrack.onrender.com)

---

## Screenshots 
---

## Contributing

We welcome contributions to improve **Equity Track**! Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or support, feel free to reach out:
- **Email**: support@equitytrack.com
- **GitHub**: [RevanasiddaNK](https://github.com/RevanasiddaNK)

