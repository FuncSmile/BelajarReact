import CardProduct from '../components/fragments/CardProduct.jsx'
import Button from "../components/Elements/Button"

const products = [ 
 {
   id : 1,
   img : "images/sepatu.jpeg",
   header : "Sepatu Mahal",
   desc : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.`,
   price : '1.500.000'
 },
 { 
   id : 2,
   img : "images/tas.jpeg",
   header : "Tas Gucci",
   desc : "Tas mahal yang punya orang kaya doang ",
   price : '12.000.000'
 }

]

const ProductPage = () => {

  return (
  <div className="flex flex-wrap gap-8 justify-center  p-6">

   {products.map( (data) =>{
     return (
	<CardProduct key={data.id}>
	   <CardProduct.HeaderCard 
	     Images={data.img}/>
	  <CardProduct.BodyCard 
	     HeadBody={data.header}>
	      { data.desc }
	  </CardProduct.BodyCard>
	  <CardProduct.FotterCard
	     price= { data.price }/>
          </CardProduct>
   )
  }
 )
}

    </div>
  )
}
export default ProductPage
