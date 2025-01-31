# React Charts Dashboard  

## Description  
A Single Page Application (SPA) built with **React** and **TypeScript** for displaying and managing charts. The application allows users to view charts, filter data by date range, and customize chart settings through a settings page.  

## Technologies Used  
- **React** + **TypeScript**  
- **MUI** (for UI components and styling)  
- **Highcharts** (for data visualization)  
- **React Context API** (for global state management)  
- **LocalStorage** (for saving user settings and chart data)  

## Features  
### 📊 View Mode  
- Displays a list of charts  
- Filters data by a selected date range  
- Hides the date filter when no charts are available  

### ⚙️ Settings  
- Add new charts  
- Edit chart properties (name, type, color)  
- Delete charts  
- Changes are saved in **LocalStorage**  

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start project with `npm run dev` from the parent folder `high_charts` .
4. The app will be available at `http://localhost:5173/`.
