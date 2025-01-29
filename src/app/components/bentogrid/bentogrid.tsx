"use client";
import { cn } from "@/app/components/bentogrid/utils";
import { motion } from "framer-motion";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto hidden-overflow",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  link,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  link: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div 
    initial={{ opacity: 0, }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{ duration: 1.5}}
        viewport={{once: true}}
    
    onClick={() => window.open(link)}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-lightmodeFont2/[0.2] justify-between flex flex-col space-y-4 cursor-pointer hidden-overflow",
        className
      )}
    >
      {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200 ">
          {icon}
          <div className="font-raleway font-bold text-lightmodeFont2 dark:text-darkmodeFont mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-xs text-lightmodeFont2 dark:text-darkmodeFont">
            {description}
          </div>
        </div>
    </motion.div>
  );
};
