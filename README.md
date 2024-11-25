# Dummy Chat  
A lightweight real-time chat application with Google Authentication, allowing users to chat in dedicated rooms.  

[Live Demo](https://dummy-chat-react.vercel.app)

---

## Features  
- **Google Authentication:** Secure and fast login with Google.  
- **Chat Rooms:** Join or create custom chat rooms for personalized communication.  
- **Real-time Messaging:** Seamless real-time chat experience powered by modern web technologies.  
- **Open Source:** Contributions are welcome to enhance functionality and features.  

---

## Screenshots  

### Login Screen  
<img width="1655" alt="Screenshot 2024-10-29 at 7 54 24 AM" src="https://github.com/user-attachments/assets/737664ff-68bb-489c-9888-c8a37ef7e077">

### Room Selection  
<img width="1680" alt="Screenshot 2024-10-29 at 3 45 51 PM" src="https://github.com/user-attachments/assets/c322166d-cbc9-44ea-8672-108b82742781">

### Chat Section  
<img width="1680" alt="Screenshot 2024-10-29 at 3 46 53 PM" src="https://github.com/user-attachments/assets/9f535d0b-ecdd-4d58-9161-379386a328df">

---

## Setup Guide  

### Prerequisites  
1. [Node.js](https://nodejs.org) (v16+ recommended)  
2. A Firebase account ([Sign up here](https://firebase.google.com/))  

---

### Steps  

#### 1. Clone the Repository  
```bash  
git clone https://github.com/your-username/dummy-chat.git  
cd dummy-chat  
```  

#### 2. Install Dependencies  
```bash  
npm install  
```  

#### 3. Set Up Firebase  
1. Go to the [Firebase Console](https://console.firebase.google.com/).  
2. Create a new project.  
3. Enable **Authentication** (Google) in the Firebase Authentication section.  
4. Create a Firestore database to store messages.  

#### 4. Add Firebase Config  
- Open the `firebaseConfig.js` file located in the `src` directory.  
- Replace the placeholder values with your Firebase configuration:  

```javascript  
// src/firebaseConfig.js  

const firebaseConfig = {  
  apiKey: "your-api-key",  
  authDomain: "your-auth-domain",  
  projectId: "your-project-id",  
  storageBucket: "your-storage-bucket",  
  messagingSenderId: "your-messaging-sender-id",  
  appId: "your-app-id"  
};  

export default firebaseConfig;  
```  

#### 5. Start the Application  
```bash  
npm run dev  
```  

- Visit [http://localhost:3000](http://localhost:5173) in your browser to use the app locally.  

---

## Contributing  

We welcome contributions from the community! Here's how you can get started:  
1. Fork the repository.  
2. Create a new branch: `git checkout -b feature/your-feature-name`.  
3. Commit your changes: `git commit -m "Add some feature"`.  
4. Push to the branch: `git push origin feature/your-feature-name`.  
5. Open a pull request.  

---

### Note  
Every chat message is logged and can be read by the application owner. Use it responsibly.  

---

Happy Chatting! 🎉  
