// Import dependencies using React
import React, { useEffect } from 'react'

// Import from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css'

// Define functional component named 'App'
const App = () => {

    return (
    <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                    <TooltipComponent content='Settings' position='Top'>
                        <button type='button' className='text-3xl p-3 howver:drop-shadow-xl hover:bg-light-gray text-white'
                         style = {{ background: 'blue', borderRadius: '50%' }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div>
                        Sidebar
                    </div>
                ) : (
                    <div>
                        Sidebar w-0
                    </div>
                )}
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App