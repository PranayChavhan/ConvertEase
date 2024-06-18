import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-center">
      <div className="flex justify-center space-x-4">
        <Link href="https://github.com/PranayChavhan/ConvertEase">
          <Link href="/" className="text-gray-300 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
            <FaGithub className="inline-block" size={24} />
          </Link>
        </Link>
      </div>
      <p className="mt-2 text-sm">
        &copy; {new Date().getFullYear()} Pranay Chavhan
      </p>
    </footer>
  );
}

export default Footer;
