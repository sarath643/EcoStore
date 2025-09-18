import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Product } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, price, image, category, rating } = product;

  return (
    <Link href={`/product/${id}`} className="block h-full">
      <Card className="group hover:shadow-lg transition-shadow duration-200 h-full cursor-pointer">
        <CardContent className="p-4">
          <div className="aspect-square relative mb-4 bg-gray-50 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-200"
            />
          </div>

          <div className="space-y-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>

            <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem]">
              {title}
            </h3>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600 ml-1">
                  {rating.rate} ({rating.count})
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-indigo-600">
                ${price.toFixed(2)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;