'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShipWheel, ShoppingCart, Store } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CartModal from './CartModal';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);

  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <ShipWheel className="h-8 w-8 text-indigo-400 " />
              <span className="font-bold text-xl text-indigo-600">EcoStore</span>
            </Link>

           

            {/* Cart Button */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;