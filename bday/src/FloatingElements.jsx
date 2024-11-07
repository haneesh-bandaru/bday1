import { motion } from 'framer-motion';

const elements = [
    { type: '🎈', x: '85%', y: '15%', delay: 0.5, scale: 1 },
    { type: '🧸', x: '5%', y: '60%', delay: 1, scale: 1.4 },
    { type: '✨', x: '15%', y: '30%', delay: 0.7, scale: 1 },
    { type: '🧸', x: '10%', y: '10%', delay: 0, scale: 1.2 },
    { type: '✨', x: '80%', y: '40%', delay: 1.2, scale: 1 },
    { type: '🎈', x: '90%', y: '70%', delay: 1.5, scale: 1.1 },

];

export default function FloatingElements() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {elements.map((el, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{ left: el.x, top: el.y }}
                    initial={{ scale: 0 }}
                    animate={{
                        y: [0, -20, 0],
                        scale: el.scale,
                    }}
                    transition={{
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            delay: el.delay,
                        },
                        scale: {
                            duration: 0.5,
                            delay: el.delay,
                        }
                    }}
                >
                    <span className="text-6xl filter drop-shadow-lg">{el.type}</span>
                </motion.div>
            ))}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDIzNywgMjMzLCAyNTQsIDAuNCkiLz48L3N2Zz4=')] opacity-50" />
        </div>
    );
}