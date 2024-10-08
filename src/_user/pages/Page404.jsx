import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Page404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
    <motion.div
      className="bg-brand p-8 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-6xl font-bold text-golden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold text- mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Page Not Found
      </motion.h2>
      <motion.p
        className="text-gray-300 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Sorry, the page you are looking for does not exist.
      </motion.p>
      <motion.button
        onClick={handleGoHome}
        className="mt-6 px-4 py-2 bg-yellow-500 text-blue-900 rounded hover:bg-yellow-600 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Go to Homepage
      </motion.button>
    </motion.div>
  </div>
  );
};

export default Page404;