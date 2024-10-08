import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "./useWindowSize";

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, videoSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  const panelVariants = {
    open: {
      width: "100%",
      height: "100%",
    },
    closed: {
      width: "0%",
      height: "100%",
    },
  };

  const panelVariantsSm = {
    open: {
      width: "100%",
      height: "200px",
    },
    closed: {
      width: "100%",
      height: "0px",
    },
  };

  const descriptionVariants = {
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.125,
      },
    },
    closed: { opacity: 0, y: "100%" },
  };

  return (
    <>
      <div
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onMouseEnter={() => setOpen(id)}
        onMouseLeave={() => setOpen(null)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                style={{
                  backgroundImage: `url(${imgSrc})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="w-full h-full"
              />
            )}
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Panel;