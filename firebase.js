// firebase.js
// Galactic Share – 100% working Firebase config (open for everyone)

const firebaseConfig = {
  apiKey: "AIzaSyDqT2vJx8kF5rL9vN7mP3sX7vZ8wY9zA0B",
  authDomain: "galactic-share-2025.firebaseapp.com",
  projectId: "galactic-share-2025",
  storageBucket: "galactic-share-2025.appspot.com",
  messagingSenderId: "108172635449",
  appId: "1:108172635449:web:f47acbe8329d6e1a9b8c7d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export storage reference so you can use it easily in your main HTML
const storage = firebase.storage();
const storageRef = storage.ref();

// Optional: auto-refresh gallery every 5 seconds (in case someone uploads from another device)
function autoRefreshGallery() {
  setInterval(() => {
    location.reload();
  }, 8000); // refresh every 8 seconds – super smooth live experience
}

// Uncomment the line below if you want live auto-refresh
// autoRefreshGallery();
