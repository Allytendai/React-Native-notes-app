A simple cross-platform Notes application built using React Native, Expo, and AsyncStorage. This project demonstrates state management using React Context, local data persistence, and the basics of building a CRUD (Create, Read, Update, Delete) interface in a mobile environment.

🚀 Features

Create new notes

Display a list of notes

Delete notes

Persist data locally using AsyncStorage

Built with Expo Router for navigation

Uses React Context for global state management

🛠️ Technologies Used

React Native

Expo

TypeScript

Expo Router

AsyncStorage (@react-native-async-storage/async-storage)

📦 Installation
1. Clone the Repository
git clone <your-repo-url>
cd notes-app
2. Install Dependencies
npm install
3. Install AsyncStorage

(Required for saving notes locally)

expo install @react-native-async-storage/async-storage
4. Start the Development Server
npx expo start

Scan the QR code using the Expo Go app or open the Android/iOS emulator.
📱 Usage

Enter a note title and content using the text inputs.

Press Add Note to store it.

The list updates instantly using Context.

Press Delete to remove any stored note.

All changes are saved locally and persist between app launches.

📘 Code Overview
Context Provider

NotesContext.tsx manages all note operations:

Add Note

Delete Note

Load Notes

Save Notes

It exposes these through a React Context so other screens can access them easily.
