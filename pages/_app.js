import '@/styles/globals.css'

import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <main> 
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {
            },
          }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}

export default App