import './App.css'
import IntroAnimation from './components/IntroAnimation'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import UploadSection from './components/UploadSelection'

const App = () => {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <main
      aria-label="ArtScope main content"
      className="min-h-screen text-neutral-700 bg-cover bg-center brightness-[0.9] sm:flex sm:items-center text-shadow-lg"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1582201957424-621320ad670d?q=80&w=1309&auto=format&fit=crop")`,
      }}
    >
      <div className="z-10 bg-rose-700/10 sm:w-1/2 sm:mx-auto sm:backdrop-blur-[4px] p-4 rounded-md custom-shadow h-screen md:h-[650px] flex flex-col justify-start">
        <header className="text-center py-2 sm:py-6" role="banner">
          <h1 className="text-lg sm:text-4xl font-extrabold text-shadow">
            Art<span className="text-rose-700 font-bold">Scope</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 mt-2">
            Identify the artist behind a famous painting using AI.
          </p>
        </header >
        <AnimatePresence mode="wait">
          {showIntro ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              aria-live="polite"
            >
              <IntroAnimation onStart={() => setShowIntro(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              aria-live="polite"
            >
              <UploadSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

export default App
