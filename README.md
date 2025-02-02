# 📄 Pagination Component using React

This project is a **Pagination Component** built using **React.js**, designed as part of a machine coding challenge. The component efficiently handles large datasets by breaking them into manageable pages, enhancing both performance and user experience.

## 🚀 Features

- **Dynamic Pagination**:Automatically adjusts the number of pages based on the total dataset and items per page.
- **Customizable Items per Page**:Users can select how many items to display per page.
- **Next/Previous Navigation**:Easily navigate between pages using **Next** and **Previous** buttons.
- **Direct Page Access**:Clickable page numbers for quick navigation.
- **Performance Optimized**:Efficient rendering to handle large datasets without performance lags.
- **Accessibility**:Keyboard-friendly navigation and ARIA labels for screen readers.

## 🎯 Key Concepts

- **State Management**:Utilizes React’s useState and useEffect hooks to manage pagination state and side effects.
- **Reusability**:The component is modular and reusable across different projects with minimal changes.
- **Scalability**:Designed to handle small and large datasets efficiently, with room for extending features like infinite scrolling or server-side pagination.

## 🛠️ Installation & Setup

1.  `git clone https://github.com/your-username/react-pagination-component.gitcd react-pagination-component`
2.  `npm install`
3.  `npm start`

## 📂 Directory Structure

```
react-pagination-component/
├── src/
│   ├── components/
│   │   └── Pagination.js     # Main pagination component
│   ├── data/
│   │   └── sampleData.js     # Sample data for testing pagination
│   ├── App.js                # Entry point for the application
│   └── index.js              # React DOM rendering
├── public/                   # Static files
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## 📋 Usage

### Basic Implementation

```
import Pagination from './components/Pagination';
import sampleData from './data/sampleData';

function App() {
  return (
    <div className="App">
      <h1>Pagination Example</h1>
      <Pagination data={sampleData} itemsPerPage={10} />
    </div>
  );
}

export default App;
```

### Props

PropTypeDescriptiondataarrayThe array of data to paginate.itemsPerPagenumberNumber of items to display per page (default: 10).onPageChangefuncOptional callback when the page changes.

## 🔧 Customization

- **Styling**:Customize the look and feel by modifying the CSS in Pagination.css.
- **Server-Side Pagination**:Integrate API calls in the onPageChange callback to fetch data dynamically from a server.
- **Loading States**:Add a loading indicator when switching pages, especially for API-based data fetching.

## 🤝 Contributions

This is a learning-focused project, but contributions are welcome! Feel free to fork the repository, open issues, or submit pull requests with improvements or new features.

### 🚀 Happy Coding! 🎨
