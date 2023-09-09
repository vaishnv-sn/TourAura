import React from 'react';
import Navbar from './components/Navbar';
import PlaceCard from './components/PlaceCard';
import AddPlace from './components/AddPlace';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PlaceCard />} />
                    <Route path="/add-places" element={<AddPlace />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
