import { ShoppingBasket } from 'lucide-react';
import Link from 'next/link';

const MyTravelsButton = ({ className = '', onClick }) => {
  return (
    <Link
      href="/profile/trips"
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 bg-white text-blue-600 hover:bg-blue-600 border-blue-600 hover:text-white rounded-xl transition-colors duration-300 border hover:border-blue-600 ${className}`}
    >
      <span>سفرهای من</span>
      <ShoppingBasket className="w-5 h-5" />
    </Link>
  );
};

export default MyTravelsButton;
