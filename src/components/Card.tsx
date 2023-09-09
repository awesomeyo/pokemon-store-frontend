import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { useGetProducts } from "../hooks/useProducts";

export function EcommerceCard() {
  const { data, isLoading, isError } = useGetProducts();
  console.log(data)
  return (
    <>
      {isLoading && <span>fetching a character...</span>}
      {isError && <span>Ups! it was an error 🚨</span>}
      {!isLoading && data?.map((product) => (
        <Card className="m-4 w-80" key={product.id}>
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src={product.image}
              alt="card-image"
              // className="object-cover h-300 w-300 "
              height="300"
              width="300"
            />
          </CardHeader>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <Typography color="blue-gray" className="font-medium">
                {product.name}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Price : {product.price}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Weight: {product.desc.weight}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Height: {product.desc.height}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >

              BaseExperience: {product.desc.baseExperience}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="shadow-none bg-blue-gray-900/10 text-blue-gray-900 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
