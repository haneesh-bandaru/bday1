import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Heart, Sparkles, Stars } from 'lucide-react'
import FloatingElements from './FloatingElements'

const friendImageStacks = [
  [
    './akhi.png',
    './us.jpeg',
    './akhi1.png',
  ],
  [
    './akhi1.jpeg',
    './akhi3.png',
    './akhi5.jpeg',
  ],
  [
    './us2.jpeg',
    './akhi2.png',
    './akhi4.jpeg',
  ],

]

export default function BirthdayPage() {
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const audio = new Audio('./music.mp3')
    audio.loop = true

    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [isPlaying])

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-full bg-gradient-to-br from-pink-100 to-blue-100 p-8 relative "
    >
      <Confetti />
      <FloatingElements />

      <div className="max-w-4xl mx-auto ">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl font-bold text-center text-pink-600 mb-8 font-dancing"
        >
          Happy Birthday, Akhi!❤️
          <p className="text-3xl text-purple-600 font-medium mt-4">
            To the most amazing friend in the world ♥
          </p>
        </motion.h1>
        <BirthdayCard isOpen={isCardOpen} setIsOpen={setIsCardOpen} />

        <Gallery />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMusic}
          className="fixed bottom-4 right-4 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors font-semibold"
        >
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </motion.button>
      </div>
    </motion.div>
  )
}

function BirthdayCard({ isOpen, setIsOpen }) {
  return (
    <motion.div
      className="relative w-96 h-64 mx-auto mb-12 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.05 }}
    >
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-white rounded-2xl shadow-lg backface-hidden"
          >
            <motion.div
              className="absolute w-full h-full rounded-2xl shadow-xl p-8 flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-50"
              animate={{ rotateY: isOpen ? -180 : 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center space-y-6">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-20 h-20 text-pink-400 mx-auto filter drop-shadow-lg" />
                </motion.div>
                <div className="relative">
                  <Stars className="absolute -top-6 -left-4 w-6 h-6 text-yellow-400 animate-pulse" />
                  <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-yellow-400 animate-pulse" />
                  <p className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                    Click to Open
                  </p>
                </div>
              </div>
            </motion.div>
            <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=250&fit=crop" alt="Birthday Card Cover" className="rounded-2xl " />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-white rounded-lg shadow-lg p-6 backface-hidden"
          >
            <p className="text-lg text-center text-pink-600 font-dancing">
              Dearest Sarah,<br /><br />
              On this special day, may your world be filled with love, laughter, and endless joy. Your friendship is a treasure, and I'm so grateful to celebrate another year of your amazing journey through life.<br /><br />
              Happy Birthday, my dear best friend!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12"
    >
      {friendImageStacks.map((stack, index) => (
        <ImageFrame key={index} images={stack} alt={`Friend Image Stack ${index + 1}`} />
      ))}
    </motion.div>
  )
}

function ImageFrame({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 5 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform rotate-3"></div>
      <div className="relative bg-white  rounded-lg shadow-lg transform -rotate-3 transition-transform hover:rotate-0">
        <div className="relative w-full h-64">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img className="rounded object-cover h-[300px]" src={images[currentIndex]}  alt={`${alt} - Image ${currentIndex + 1}`} width={500} height={300}  />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImage}
            className="bg-white bg-opacity-70 rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-pink-500" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImage}
            className="bg-white bg-opacity-70 rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-pink-500" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-pink-300 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -10,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: window.innerHeight + 10,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}