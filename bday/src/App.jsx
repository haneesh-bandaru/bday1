import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Heart, Sparkles, Stars } from 'lucide-react'
import FloatingElements from './FloatingElements'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import clsx from 'clsx'


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
    './akhi2.png',
    './us2.jpeg',
    './akhi4.jpeg',
  ],

]

export default function BirthdayPage() {
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [text, setText] = useState("Edo Saradaga petta em secret message ledu")
  const [showModal, setShowModal] = useState(false);

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



  useEffect(() => {
    const timer = setTimeout(() => {
      setText(`
     <p class="font-semibold text-lg text-red-600">
          🎉🎂🎈 Happiest Birthday to the most amazing friend in the world! 🎉🎂🎈
        </p>
        <p class="mt-4 text-gray-700">
          🌟 Days are better when you are around, and I hope your birthday is filled with love, laughter, and endless joy. 🌟
          🎁 May your day be as special as you are to me. 🎁
        </p>
        <p class="mt-4">
          💖 You have been a great person from the day I met you, and you have encouraged and supported me through every situation. 💖
        </p>

        <p class="mt-2 italic text-green-700">
          Inka manaki English radu kani, Akhi firstly chala thanks ra🫰🏻, assala eppudu anukoledu nuvvu intha close ayipotav ani.
          Ala aa kallatho👀, sweet voice🎶, tho bale matladutav telusa 🤩💫! konni sarlu ayithe oka therapy la anipistundhi netho matalu🤗.
        </p>

        <p class="mt-2 italic text-green-700">
          Appudu appudu chala happy vuntundhi ra, ne lanti manchi frnd dorikindhi ani kani anukune lopu, deggaralo levu anedi gurthuvastundhi😔.
        </p>

        <p class="mt-2 font-semibold text-pink-600">
          Nannu seriously chala mandi "Hanee" ani pilustaru, but nee antha sweet ga evaru pilavaru telusa🌠.
        </p>

        <p class="mt-2 italic text-green-700">
          Eppudu saradaga matladukune vallam, saradhi sir ki prati sari dorikipoyevallam, iddaram kalisi teju tho adukoni.
        </p>

        <p class="mt-2 font-semibold text-pink-600">
          But aa day chudu n8 ekkuva saradaga matladukunnam 🤩,that day is one of the most memorable and special day. abba aa days pure ga nenu njoy chesina days abba.\n
          inka aa orange dress lo mess nundi vachav chudu, nijamga angel lekka vunnav🪽\n
          Aa days alane vuntai anukunna kani sudden ga mayam ayipoyav 😖.
          Adi last day la kakunda manam malli colleauges la kalisi work cheyyali ani korukuntunna itlu ne
        </p>
        <h1 class="text-red-500 text-end">-Hanee🍯❤️</h1>
      `);
    }, 1000);

    return () => clearTimeout(timer);
  }, [showModal]);
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
            To the most amazing girl in the world ♥
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
      <div className="flex justify-center ">
        <Dialog onClick={() => {
          setShowModal(true)
        }}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="mt-10 relative overflow-hidden group animate-bounce hover:animate-none"
            >
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
                Secret Message
              </span>
              <Heart className="inline-block ml-2 text-red-500 group-hover:text-primary-foreground transition-colors duration-300" />
              <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription className="font-bold text-black  relative">
                <div className={clsx("absolute inset-0  rounded-lg bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 opacity-50")}></div>
                <div className={clsx('text-sm leading-5 p-2')} dangerouslySetInnerHTML={{ __html: text }} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  )
}

function BirthdayCard({ isOpen, setIsOpen }) {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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
              Dearest Akhi,👧🏻<br /><br />
              On this special day, may your world be filled with love, laughter, and endless joy. Your friendship is a treasure, and I'm so grateful to celebrate another year of your amazing journey through life.<br /><br />
              Happy Birthday, my dear best friend!🫂

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
              <img className="rounded object-cover h-[300px]" src={images[currentIndex]} alt={`${alt} - Image ${currentIndex + 1}`} width={500} height={300} />
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