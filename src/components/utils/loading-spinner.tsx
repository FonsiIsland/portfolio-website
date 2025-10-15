import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';

const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className='flex items-center justify-center space-x-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <LoaderCircle className={cn('size-8 animate-spin', className)} />
    </motion.div>
  );
};
export default LoadingSpinner;
