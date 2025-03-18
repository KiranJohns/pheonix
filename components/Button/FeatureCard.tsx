
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  className 
}: FeatureCardProps) => {
  return (
    <motion.div
      className={cn(
        'group p-6 rounded-2xl glass-panel transition-all duration-300',
        'hover:shadow-xl hover:translate-y-[-5px]',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;