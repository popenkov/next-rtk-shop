import { FC } from 'react';
import { useGetProductsQuery } from '../../../store/product/product.api';
import CartDropdown from './cart-dropdown/CartDropdown';
import ProductItem from './ProductItem';
import ProductSkeleton from './ProductSkeleton';

const Home: FC = () => {
  const { data, error, isLoading } = useGetProductsQuery(10);
  console.log(isLoading);
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl text-green-900 font-medium">
          Let&apos;s find your products!
        </h1>
        <CartDropdown />
      </div>

      {isLoading ? (
        <div className="flex flex-wrap justify-between">
          {/* {new Array(3).map((product: any) => (
            <ProductSkeleton />
          ))} */}
        </div>
      ) : (
        <div className="flex flex-wrap justify-between">
          {data?.map((product: any) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-between">
        {data?.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
