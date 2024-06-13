import CardProduct from '../components/fragments/CardProduct.jsx'
import Button from "../components/Elements/Button"
const ProductPage = () => {
  return (
    <div className='flex justify-center p-6'>
      <CardProduct>
        <CardProduct.HeaderCard
        Images="images/sepatu.jpeg"
        />
        <CardProduct.BodyCard 
        HeadBody="Sepatu Mahal"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </CardProduct.BodyCard>
        <CardProduct.FotterCard 
        price="1.500.000" />
      </CardProduct>
    </div>
  )
}
export default ProductPage