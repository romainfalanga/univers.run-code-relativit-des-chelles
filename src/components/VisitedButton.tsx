import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { isPageVisited } from '../utils/pageVisits';

interface VisitedButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const VisitedButton: React.FC<VisitedButtonProps> = ({ to, children, className = '' }) => {
  const [isVisited, setIsVisited] = React.useState(false);

  React.useEffect(() => {
    const checkVisited = async () => {
      const visited = await isPageVisited(to);
      setIsVisited(visited);
    };
    checkVisited();
  }, [to]);

  return (
    <Link
      to={to}
      className={`group flex items-center px-6 sm:px-8 py-3 sm:py-4 text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg ${className}`}
    >
      {isVisited && (
        <CheckCircle2 className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" />
      )}
      <span className="flex-1">{children}</span>
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
    </Link>
  );
};
