import Button from '../Elements/Button/index.jsx'
const CardProduct = (props) => {
  const { children } = props
  return(
    <div
    className='w-full max-w-sm bg-slate-100 border border-gray rounded-lg shadow p-8'
    >
        {children}
    </div>
  )
}

const HeaderCard = ({ Images }) => {
    return(
      <a>
        <img
        src={Images}
        alt="product"
        className='rounded-t-lg' />
      </a>
  )
}

const BodyCard = ({ children, HeadBody }) => {
  return(
    <div
    className="pt-4"
    >
      <a>
        <h5
        className='font-bold'
        >
          {HeadBody}
          </h5>
        <p
        className="md:text-md text-sm"
        >
           {children}
        </p>
      </a>
    </div>
  )
}

const FotterCard = ({ price }) => {
  return(
  <div
  className=' flex items-center justify-between pt-4'
  >
      <span
      className='text-xl font-medium'
      >
        {price}
      </span>
      <Button
      classname="bg-blue-600"
      >
        Add Chart
      </Button>
  </div>
  )
}

CardProduct.HeaderCard = HeaderCard
CardProduct.BodyCard = BodyCard
CardProduct.FotterCard = FotterCard
export default CardProduct